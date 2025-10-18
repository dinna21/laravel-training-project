import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import BlogList from '@/components/BlogList';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    status: 'published' | 'draft';
    featured_image: string | null;
}

interface DashboardProps {
    blogs: Blog[];
}

export default function Dashboard({ blogs }: DashboardProps) {
    // Display only first 3 blogs
    const recentBlogs = blogs.slice(0, 3);

    return (
        <AppLayout>
            <Head title="Dashboard" />
            
            <div className="space-y-6 px-4 py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="text-muted-foreground mt-1">
                            Welcome back! Here's your recent blogs.
                        </p>
                    </div>
                    {blogs.length > 3 && (
                        <Link href="/admin/blogs">
                            <Button variant="outline" className="gap-2">
                                View All Blogs
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    )}
                </div>

                {recentBlogs.length === 0 ? (
                    <div className="text-center py-12 bg-card rounded-lg border">
                        <p className="text-muted-foreground mb-4">No blogs yet.</p>
                        <Link href="/admin/blogs/create">
                            <Button>Create Your First Blog</Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold">Recent Blogs</h2>
                        <BlogList blogs={recentBlogs} />
                    </>
                )}
            </div>
        </AppLayout>
    );
}