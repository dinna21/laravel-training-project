<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    /**
     * Show admin login form
     */
    public function showLogin(): Response
    {
        return Inertia::render('admin/login');
    }

    /**
     * Handle admin login
     */
    public function login(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Check admin credentials
        if ($request->email === 'admin@gmail.com' && $request->password === '1234') {
            $request->session()->put('admin_authenticated', true);
            $request->session()->put('admin_email', $request->email);
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors([
            'email' => 'Invalid admin credentials.',
        ]);
    }

    /**
     * Show admin dashboard
     */
    public function dashboard(): Response
    {
        // Sample data for dashboard
        $stats = [
            'users' => 1234,
            'posts' => 89,
            'views' => 45678,
            'revenue' => '$12,345'
        ];

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
        ]);
    }

    /**
     * Handle admin logout
     */
    public function logout(Request $request): RedirectResponse
    {
        $request->session()->forget(['admin_authenticated', 'admin_email']);
        return redirect()->route('admin.login');
    }
}