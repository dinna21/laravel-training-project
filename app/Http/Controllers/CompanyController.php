<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index(): Response
    {
        // Load company data from the data folder
        $companyData = include base_path('data/company.php');
        
        return Inertia::render('Company', [
            'company' => $companyData['company'],
            'history' => $companyData['history'],
        ]);
    }
}