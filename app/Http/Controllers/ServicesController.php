<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index(): Response
    {
        // Load services data from the data folder
        $servicesData = include base_path('data/services.php');
        
        return Inertia::render('Services', [
            'services' => $servicesData['services'],
        ]);
    }
}