<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Blog;

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
    if (
        $user &&
        Hash::check($request->password, $user->password) &&
        $user->is_admin
    ) {
        // Use Laravel Auth instead of session
        Auth::login($user);
        
        $request->session()->regenerate();
        $request->session()->put('admin_authenticated', true);

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
        $blogs = Blog::with('user')
            ->latest()
            ->take(3) // show latest 3 blogs on dashboard
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'description' => $blog->description,
                    'author' => $blog->author_name ?? $blog->user->name,
                    'date' => $blog->created_at->format('d M Y'),
                    'status' => $blog->status,
                    'featured_image' => $blog->featured_image,
                ];
            });

        return Inertia::render('admin/dashboard', [
            'blogs' => $blogs,
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