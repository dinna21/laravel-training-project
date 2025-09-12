# Laravel Training Project

A modern full-stack web application built with Laravel, React, TypeScript, and Inertia.js as a training project to demonstrate best practices in web development.

## 🚀 Features

- **Backend**: Laravel 10+ with PHP 8+
- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with dark/light theme support
- **Routing**: Inertia.js for seamless SPA experience
- **UI Components**: Custom component library with shadcn/ui
- **Icons**: Lucide React icons
- **Development**: Hot module replacement with Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- PHP 8.1 or higher
- Composer
- Node.js 18+ and npm/yarn
- MySQL/PostgreSQL/SQLite database

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laravel-training-project
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure your database**
   Edit `.env` file with your database credentials:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel_training
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

6. **Run database migrations**
   ```bash
   php artisan migrate
   ```

7. **Seed the database (optional)**
   ```bash
   php artisan db:seed
   ```

## 🚀 Development

1. **Start the Laravel development server**
   ```bash
   php artisan serve
   ```

2. **Start the Vite development server** (in a new terminal)
   ```bash
   npm run dev
   ```

3. **Visit your application**
   Open [http://localhost:8000](http://localhost:8000) in your browser

## 📁 Project Structure

```
laravel-training-project/
├── app/                          # Laravel application logic
│   ├── Http/Controllers/         # Controllers
│   ├── Models/                   # Eloquent models
│   └── ...
├── resources/
│   ├── js/                       # React/TypeScript frontend
│   │   ├── components/           # Reusable React components
│   │   │   ├── ui/               # UI component library
│   │   │   └── appearance-dropdown.tsx
│   │   ├── pages/                # Inertia.js pages
│   │   │   └── Landing.tsx       # Main landing page
│   │   ├── actions/              # Frontend actions/utilities
│   │   └── wayfinder/            # Routing utilities
│   ├── views/                    # Blade templates
│   └── css/                      # Stylesheets
├── routes/                       # Route definitions
├── database/                     # Migrations, seeders, factories
├── public/                       # Public assets
├── storage/                      # Storage and cache
├── tests/                        # Test files
├── package.json                  # Node.js dependencies
├── composer.json                 # PHP dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite build configuration
```

## 🎨 Frontend Features

### Components
- **Landing Page**: Modern, responsive landing page with dark/light theme
- **UI Components**: Custom component library built with Tailwind CSS
- **Theme Toggle**: Dark/light mode switcher
- **Responsive Design**: Mobile-first approach

### Technologies Used
- **React 18+**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Inertia.js**: Modern monolith approach
- **Lucide React**: Beautiful icon library

## 🧪 Testing

Run the test suite:

```bash
# PHP tests
php artisan test

# Frontend tests (if configured)
npm run test
```

## 🏗️ Building for Production

1. **Build frontend assets**
   ```bash
   npm run build
   ```

2. **Optimize Laravel**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

## 📚 Learning Objectives

This training project covers:

- **Laravel Framework**: MVC architecture, routing, middleware, Eloquent ORM
- **React Development**: Component-based architecture, hooks, TypeScript
- **Modern Tooling**: Vite, Tailwind CSS, ESLint, Prettier
- **Full-Stack Integration**: Inertia.js for seamless frontend-backend communication
- **Best Practices**: Code organization, type safety, responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open-sourced software licensed under the [MIT license](LICENSE).

## 🔗 Resources

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev)
- [Inertia.js Documentation](https://inertiajs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 📞 Support

If you have any questions or need help with this training project, please:

1. Check the documentation links above
2. Search existing issues
3. Create a new issue with detailed information

---

**Happy Learning! 🎓**
