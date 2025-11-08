<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Check if user is authenticated
        if (!Auth::check()) {
            return redirect()->route('admin.login')
                ->withErrors(['email' => 'Please login to access admin panel.']);
        }

        // Check if authenticated user is an admin
        if (!Auth::user()->is_admin) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            
            return redirect()->route('admin.login')
                ->withErrors(['email' => 'You do not have admin privileges.']);
        }

        // Verify session flag exists (belt and suspenders)
        if (!$request->session()->has('admin_authenticated')) {
            $request->session()->put('admin_authenticated', true);
        }

        return $next($request);
    }
}