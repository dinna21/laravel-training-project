<?php
return [
    'hero' => [
        'title' => 'Lorem ipsum dolor sit amet consectetur.',
        'badges' => ['UX/UI Design', 'Web Design'],
        'showCards' => true,
        'ctaButtons' => [
            'primary' => ['text' => 'Get Started'],
            'secondary' => ['text' => 'Learn More'],
        ],
    ],
    'projects' => [
        [
            'id' => 1,
            'name' => 'E-Commerce Platform',
            'description' => 'Modern online shopping platform with advanced features.',
            'image' => '/images/image (3).png',
            'imageDark' => '/images/image (2).png',
            'category' => 'Web Development',
            'technologies' => ['React', 'Laravel', 'MySQL']
        ],
        [
            'id' => 2,
            'name' => 'Mobile Banking App',
            'description' => 'Secure and user-friendly banking application.',
            'image' => '/images/image (3).png',
            'imageDark' => '/images/image (2).png',
            'category' => 'Mobile App',
            'technologies' => ['React Native', 'Node.js', 'MongoDB']
        ],
        [
            'id' => 3,
            'name' => 'Corporate Website',
            'description' => 'Professional corporate website with CMS integration.',
            'image' => '/images/image (3).png',
            'imageDark' => '/images/image (2).png',
            'category' => 'Web Design',
            'technologies' => ['Next.js', 'Tailwind CSS', 'Strapi']
        ],
    ],

'blogs' => [
    [
        'id' => 1,
        'title' => 'Understanding Inertia.js',
        'description' => 'A deep dive into building modern web applications with Inertia.js and Laravel.',
        'image' => '/images/image (6).png',
        'imageDark' => '/images/image (9).png',
        'date' => '2023-11-25', // Add this
    ],
    [
        'id' => 2,
        'title' => 'Getting Started with React',
        'description' => 'An introductory guide to building applications with React.',
        'image' => '/images/image (7).png',
        'imageDark' => '/images/image (10).png',
        'date' => '2023-10-15', // Add this
    ],
    [
        'id' => 3,
        'title' => 'Laravel Best Practices',
        'description' => 'Tips and tricks for writing clean and efficient Laravel code.',
        'image' => '/images/image (8).png',
        'imageDark' => '/images/image (11).png',
        'date' => '2023-09-08', // Add this
    ],
],

    'descriptionItems' => [
        [
            'id' => 1,
            'title' => 'Lorem ipsum dolor sit amet consectetur.',
            'content' => [
                'Lorem ipsum dolor sit amet consectetur. Felis arcu sed diam sit quis fermentum.',
                'Lacinia neque aliquam facilisis sceleris magna. Sed et tellus sapien rutrum egestas pellentesque rutrum ut.',
                'Lorem ipsum dolor sit amet consectetur. Pellentesque nunc mauris dictum sodales quis porta.',
            ],
        ],
    ],

    'informationItems' => [
        [
            'id' => 1,
            'number' => '25',
            'title' => 'Lorem ipsum dolor sit amet consectetur.',
            'buttonText' => 'Press release',
            'buttonLink' => '/press-release-1',
        ],
        [
            'id' => 2,
            'number' => '25',
            'title' => 'Lorem ipsum dolor sit amet consectetur.',
            'buttonText' => 'Press release',
            'buttonLink' => '/press-release-2',
        ],
        [
            'id' => 3,
            'number' => '25',
            'title' => 'Lorem ipsum dolor sit amet consectetur.',
            'buttonText' => 'Press release',
            'buttonLink' => '/press-release-3',
        ],
    ],
];