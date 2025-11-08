<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
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
        // Validate input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Rate limiting
        $key = 'admin-login:' . $request->ip();
        
        if (RateLimiter::tooManyAttempts($key, 5)) {
            $seconds = RateLimiter::availableIn($key);
            
            throw ValidationException::withMessages([
                'email' => "Too many login attempts. Please try again in {$seconds} seconds.",
            ]);
        }

        // Normalize email (trim whitespace and convert to lowercase for comparison)
        $email = strtolower(trim($request->email));
        
        // Find user by email (case-insensitive search)
        // Try exact match first, then case-insensitive
        $user = User::where('email', $email)->first();
        
        // If not found, try case-insensitive search (for databases that are case-sensitive)
        if (!$user) {
            $user = User::whereRaw('LOWER(email) = ?', [strtolower($email)])->first();
        }
        
        // Log for debugging (remove in production or use proper logging)
        if (!$user) {
            Log::warning('Admin login attempt failed - user not found', [
                'email' => $email,
                'ip' => $request->ip(),
                'total_users' => User::count(),
            ]);
        }

        // Check if user exists
        if (!$user) {
            RateLimiter::hit($key, 60);
            
            return back()->withErrors([
                'email' => 'No account found with this email address.',
            ])->onlyInput('email');
        }

        // Check password
        if (!Hash::check($request->password, $user->password)) {
            RateLimiter::hit($key, 60);
            
            return back()->withErrors([
                'email' => 'Invalid credentials. Please check your password.',
            ])->onlyInput('email');
        }

        // Check if user is admin
        if (!$user->is_admin) {
            RateLimiter::hit($key, 60);
            
            return back()->withErrors([
                'email' => 'You do not have admin privileges.',
            ])->onlyInput('email');
        }

        // Clear rate limiter on successful login
        RateLimiter::clear($key);

        try {
            // Login the user using Laravel Auth
            Auth::login($user, $request->boolean('remember'));
            
            // Regenerate session to prevent session fixation
            $request->session()->regenerate();
            
            // Set admin flag
            $request->session()->put('admin_authenticated', true);
            
            // Explicitly save session (important for hosted environments)
            $request->session()->save();

            return redirect()->intended(route('admin.dashboard'));
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Admin login session error: ' . $e->getMessage());
            
            // Clear any partial authentication
            Auth::logout();
            $request->session()->invalidate();
            
            return back()->withErrors([
                'email' => 'Login failed due to a server error. Please try again.',
            ])->onlyInput('email');
        }
    }

    /**
     * Show admin dashboard
     */
    public function dashboard(): Response
    {
        $blogs = Blog::with('user')
            ->latest()
            ->take(3)
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
        // Logout using Laravel Auth
        Auth::logout();
        
        // Clear session data
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect()->route('admin.login')
            ->with('status', 'You have been logged out successfully.');
    }
}