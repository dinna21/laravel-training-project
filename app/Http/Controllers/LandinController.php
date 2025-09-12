<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\Request;

class LandinController extends Controller
{
    public function index()
    {
        $projects = [
        [
            'id' => 1,
            'name' => 'E-Commerce Platform',
            'description' => 'Modern online shopping platform with advanced features.',
            'image' => '/images/office--img.jpg',
            'category' => 'Web Development',
            'technologies' => ['React', 'Laravel', 'MySQL']
        ],
        [
            'id' => 2,
            'name' => 'Mobile Banking App',
            'description' => 'Secure and user-friendly banking application.',
            'image' => '/images/office--img.jpg',
            'category' => 'Mobile App',
            'technologies' => ['React Native', 'Node.js', 'MongoDB']
        ],
        [
            'id' => 3,
            'name' => 'Corporate Website',
            'description' => 'Professional corporate website with CMS integration.',
            'image' => '/images/office--img.jpg',
            'category' => 'Web Design',
            'technologies' => ['Next.js', 'Tailwind CSS', 'Strapi']
        ],
        ];
        $Blogs = [
        [
            'id' => 1,
            'title' => 'Understanding Inertia.js',
            'description' => 'A deep dive into building modern web applications with Inertia.js and Laravel.',
            'image' => '/images/office--img.jpg',
        ],
        [
            'id'=> 2,
            'title'=> 'Getting Started with React',
            'description'=> 'An introductory guide to building applications with React.',
            'image'=> '/images/office--img.jpg',
        ],
        [
            'id'=> 3,
            'title'=> 'Laravel Best Practices',
            'description'=> 'Tips and tricks for writing clean and efficient Laravel code.',
            'image'=> '/images/office--img.jpg',
        ],
        ];
        return Inertia::render('Landing', [
            'projects' => $projects,
            'blogs' => $Blogs
        ]);
    }
}
