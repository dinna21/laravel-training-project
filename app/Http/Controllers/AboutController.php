<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index(): Response
    {
        // Load about data from the data folder
        $aboutData = include base_path('data/about.php');
        
        return Inertia::render('About', [
            'project' => $aboutData['project'],
            'about' => $aboutData['about'],
            'solutions' => $aboutData['solutions'],
        ]);
    }
}