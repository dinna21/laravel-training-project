<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\LandinController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', [LandinController::class, 'index'])->name(('landing'));

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// company page route 
Route::get('/company', [CompanyController::class, 'index'])->name('company'); // Add this

// services page route
Route::get('/services', [App\Http\Controllers\ServicesController::class, 'index'])->name('services');

//Blog page route 
Route::get('/blog', [BlogController::class,'index'])->name('blog');
// About page route

Route::get('/about', [AboutController::class, 'index'])->name('about');require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// Admin Routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [App\Http\Controllers\Admin\AdminController::class, 'showLogin'])->name('login');
    Route::post('/login', [App\Http\Controllers\Admin\AdminController::class, 'login'])->name('login.store');
    
    Route::middleware(['admin'])->group(function () {
        Route::get('/dashboard', [App\Http\Controllers\Admin\AdminController::class, 'dashboard'])->name('dashboard');
        Route::post('/logout', [App\Http\Controllers\Admin\AdminController::class, 'logout'])->name('logout');
    });
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';