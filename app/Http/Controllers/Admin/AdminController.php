<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
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

        // Find user by email
        $user = User::where('email', $request->email)->first();

        // Check if user exists, password matches, and user is admin
        if ($user && 
            Hash::check($request->password, $user->password) && 
            $user->is_admin) {
            
            $request->session()->put('admin_authenticated', true);
            $request->session()->put('admin_email', $request->email);
            $request->session()->put('admin_user_id', $user->id);
            
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors([
            'email' => 'Invalid admin credentials or insufficient permissions.',
        ]);
    }

    /**
     * Show admin dashboard
     */
    public function dashboard(): Response
    {
        // Enhanced stats for blog management
        $stats = [
            'users' => User::count(),
            'totalBlogs' => 89, // Replace with actual blog count
            'publishedBlogs' => 77, // Replace with actual count
            'draftBlogs' => 12, // Replace with actual count
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
        $request->session()->forget(['admin_authenticated', 'admin_email', 'admin_user_id']);
        return redirect()->route('admin.login');
    }
}