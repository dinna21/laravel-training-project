import { Head, Form } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

interface AdminLoginProps {
    errors?: Record<string, string>;
}

export default function AdminLogin({ errors }: AdminLoginProps) {
    return (
        <AuthLayout 
            title="Admin Login" 
            description="Access the admin dashboard with your credentials"
        >
            <Head title="Admin Login" />

            <Form action="/admin/login" method="post" className="flex flex-col gap-6">
                {({ processing, errors: formErrors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Admin Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="admin@gmail.com"
                                />
                                <InputError message={formErrors?.email || errors?.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Admin Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Enter admin password"
                                />
                                <InputError message={formErrors?.password || errors?.password} />
                            </div>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={processing}
                            tabIndex={3}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                            Sign in to Admin Dashboard
                        </Button>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}