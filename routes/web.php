<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\LandinController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BlogController as AdminBlogController;



// Landing page
Route::get('/', [LandinController::class, 'index'])->name('landing');

// Company page
Route::get('/company', [CompanyController::class, 'index'])->name('company');

// Services page
Route::get('/services', [ServicesController::class, 'index'])->name('services');

// Blog (public view)
Route::get('/blog', [AdminBlogController::class, 'latest'])->name('blog.latest');

// About page
Route::get('/about', [AboutController::class, 'index'])->name('about');


Route::prefix('admin')->name('admin.')->group(function () {

    // Admin Login
    Route::get('/login', [AdminController::class, 'showLogin'])->name('login');
    Route::post('/login', [AdminController::class, 'login'])->name('login.store');
    
    // Debug route (remove in production)
    Route::get('/debug/users', function () {
        if (env('APP_DEBUG', false)) {
            $users = \App\Models\User::all();
            return response()->json([
                'total_users' => $users->count(),
                'users' => $users->map(function ($user) {
                    return [
                        'id' => $user->id,
                        'email' => $user->email,
                        'name' => $user->name,
                        'is_admin' => $user->is_admin,
                    ];
                }),
                'admin_user_exists' => \App\Models\User::where('email', 'admin@gmail.com')->exists(),
            ]);
        }
        return response()->json(['error' => 'Debug mode is disabled'], 403);
    })->name('debug.users');

    // Protected Admin Routes (requires custom 'admin' middleware)
    Route::middleware(['admin'])->group(function () {

        // Dashboard
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

        // Logout
        Route::post('/logout', [AdminController::class, 'logout'])->name('logout');


        Route::prefix('blogs')->name('blogs.')->group(function () {
            Route::get('/', [AdminBlogController::class, 'index'])->name('index');
            Route::get('/create', [AdminBlogController::class, 'create'])->name('create');
            Route::post('/', [AdminBlogController::class, 'store'])->name('store');
            Route::get('/{blog}/edit', [AdminBlogController::class, 'edit'])->name('edit');
            Route::put('/{blog}', [AdminBlogController::class, 'update'])->name('update');
            Route::delete('/{blog}', [AdminBlogController::class, 'destroy'])->name('destroy');
        });
    });
});


// Public Blog Routes
Route::get('/blog/{blog}', [AdminBlogController::class, 'show'])->name('blog.show');
Route::get('/blogs', [AdminBlogController::class, 'publicIndex'])->name('blogs.public');

// Include settings and auth routes
require __DIR__ . '/settings.php';  
require __DIR__ . '/auth.php';
