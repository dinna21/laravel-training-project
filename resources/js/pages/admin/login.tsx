import { Head, Form } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';

interface AdminLoginProps {
    errors?: Record<string, string>;
}

export default function AdminLogin({ errors }: AdminLoginProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Head title="Admin Login" />
            
            {/* Theme Toggle - Top Right */}
            <div className="fixed top-4 right-4 z-10">
                <AppearanceToggleDropdown />
            </div>
            
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-foreground">
                        Admin Login
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Access the admin dashboard with your credentials
                    </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                    <Form action="/admin/login" method="post" className="space-y-6">
                        {({ processing, errors: formErrors }) => (
                            <>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="email" className="text-card-foreground">
                                            Admin Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoFocus
                                            className="mt-1 bg-background text-foreground border-border"
                                            placeholder="admin@gmail.com"
                                        />
                                        <InputError message={formErrors?.email || errors?.email} />
                                    </div>

                                    <div>
                                        <Label htmlFor="password" className="text-card-foreground">
                                            Admin Password
                                        </Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="mt-1 bg-background text-foreground border-border"
                                            placeholder="Enter admin password"
                                        />
                                        <InputError message={formErrors?.password || errors?.password} />
                                    </div>
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                                    disabled={processing}
                                >
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                                    Sign in to Admin Dashboard
                                </Button>
                            </>
                        )}
                    </Form>
                </div>
                
                <div className="text-center">
                    <a 
                        href="/" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to main site
                    </a>
                </div>
            </div>
        </div>
    );
}