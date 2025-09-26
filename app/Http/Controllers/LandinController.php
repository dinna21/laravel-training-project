<?php
// filepath: e:\laravel-training-project\app\Http\Controllers\LandinController.php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class LandinController extends Controller
{
    public function index(): Response
    {
        // Load data directly from the data folder
        $landingData = include base_path('data/landing.php');
        
        return Inertia::render('Landing', [
            'projects' => $landingData['projects'],
            'blogs' => $landingData['blogs'],
            'descriptionItems' => $landingData['descriptionItems'],
            'informationItems' => $landingData['informationItems'],
        ]);
    }
        public function services(): Response
    {
        // Load services data from the data folder
        $servicesData = include base_path('data/services.php');
        
        return Inertia::render('Services', [
            'services' => $servicesData['services'],
        ]);
    }
}