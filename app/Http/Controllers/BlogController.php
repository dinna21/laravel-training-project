<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(): Response
    {
        // Load blog data from the data folder
        $blogData = include base_path('data/blog.php');
        
        return Inertia::render('Blog', [
            'blog' => $blogData['blog'],
        ]);
    }
}