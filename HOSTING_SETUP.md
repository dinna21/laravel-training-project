# Hosting Setup Guide for Admin Login

## Issues Fixed

1. **Sessions Table**: Created migration for sessions table (required for database session driver)
2. **Error Handling**: Added try-catch blocks for better error handling in hosted environments
3. **Session Configuration**: Improved session handling for production

## Required Steps After Deployment

### 1. Run Migrations

Make sure to run all migrations including the new sessions table:

```bash
php artisan migrate
```

### 2. Create Admin User

If admin user doesn't exist, create it:

```bash
php artisan tinker
```

Then run:
```php
use App\Models\User;
use Illuminate\Support\Facades\Hash;

User::create([
    'name' => 'Admin User',
    'email' => 'admin@gmail.com',
    'password' => Hash::make('your-secure-password'),
    'is_admin' => true,
]);
```

Or use the seeder:
```bash
php artisan db:seed --class=DatabaseSeeder
```

### 3. Configure .env for Production

Update your `.env` file with these settings:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com

# Session Configuration
SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_SECURE_COOKIE=true
SESSION_SAME_SITE=lax

# If using HTTPS, set these:
SESSION_SECURE_COOKIE=true
SESSION_HTTP_ONLY=true

# Database Configuration
DB_CONNECTION=mysql  # or your database type
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 4. Clear and Cache Configuration

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# For production, cache configs:
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 5. Set Proper Permissions

```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

### 6. Verify Sessions Table Exists

Check that the sessions table was created:

```bash
php artisan migrate:status
```

### 7. Test Admin Login

1. Go to: `https://your-domain.com/admin/login`
2. Use credentials:
   - Email: `admin@gmail.com`
   - Password: (your set password)

## Common Issues and Solutions

### Issue: "Session store not set on request"

**Solution**: Make sure `SESSION_DRIVER=database` is set in `.env` and sessions table exists.

### Issue: "Cookies not working"

**Solution**: 
- Set `SESSION_SECURE_COOKIE=true` if using HTTPS
- Set `SESSION_SAME_SITE=lax` or `none` (if needed for cross-site)
- Check that `APP_URL` matches your actual domain

### Issue: "Admin user not found"

**Solution**: Create admin user using tinker or seeder (see step 2 above).

### Issue: "Rate limiting errors"

**Solution**: Make sure cache is configured properly. Set `CACHE_DRIVER` in `.env`.

### Issue: "Database connection errors"

**Solution**: 
- Verify database credentials in `.env`
- Make sure database exists
- Check database user has proper permissions
- For SQLite: ensure `database/database.sqlite` file exists and is writable

## Debugging

### Check Logs

```bash
tail -f storage/logs/laravel.log
```

### Test Session Storage

```bash
php artisan tinker
```

```php
$request = request();
$request->session()->put('test', 'value');
$request->session()->save();
echo $request->session()->get('test');
```

### Verify Admin User

```bash
php artisan tinker
```

```php
use App\Models\User;
$admin = User::where('email', 'admin@gmail.com')->first();
echo $admin ? 'Found' : 'Not found';
echo $admin->is_admin ? ' - Is Admin' : ' - Not Admin';
```

## Security Checklist

- [ ] `APP_DEBUG=false` in production
- [ ] `APP_ENV=production` in production
- [ ] Strong admin password set
- [ ] `SESSION_SECURE_COOKIE=true` for HTTPS
- [ ] Database credentials are secure
- [ ] Storage and cache directories have correct permissions
- [ ] `.env` file is not publicly accessible

## Additional Notes

- The sessions table is required when using `SESSION_DRIVER=database`
- Admin login uses rate limiting (5 attempts per minute per IP)
- Sessions are stored in the database for better scalability
- Make sure to run migrations on your production server

