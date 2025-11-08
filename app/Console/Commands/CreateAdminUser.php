<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create-user {email?} {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create or update an admin user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email') ?? $this->ask('Enter admin email', 'admin@gmail.com');
        $name = $this->argument('name') ?? $this->ask('Enter admin name', 'Admin User');
        $password = $this->secret('Enter password (leave empty for default: 1234)') ?: '1234';

        // Check if user already exists
        $existingUser = \App\Models\User::where('email', $email)->first();
        
        if ($existingUser) {
            if ($this->confirm("User with email {$email} already exists. Update to admin?", true)) {
                $existingUser->update([
                    'is_admin' => true,
                    'password' => \Illuminate\Support\Facades\Hash::make($password),
                ]);
                $this->info("✓ Admin user updated successfully!");
                $this->line("  Email: {$email}");
                $this->line("  Password: {$password}");
                return 0;
            } else {
                $this->warn("Operation cancelled.");
                return 1;
            }
        }

        // Create new admin user
        \App\Models\User::create([
            'name' => $name,
            'email' => $email,
            'password' => \Illuminate\Support\Facades\Hash::make($password),
            'is_admin' => true,
        ]);

        $this->info("✓ Admin user created successfully!");
        $this->line("  Email: {$email}");
        $this->line("  Password: {$password}");
        
        return 0;
    }
}
