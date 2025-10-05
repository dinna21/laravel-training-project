import { Head, Link, Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    FileText, 
    PlusCircle, 
    Edit3, 
    Trash2, 
    Eye, 
    Settings, 
    LogOut,
    BarChart3
} from 'lucide-react';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';

export default function AdminDashboard() {
    const blogs = [
        { id: 1, title: 'AI in Modern Project Management', author: 'John Doe', date: 'Oct 4, 2025', views: 1240, status: 'Published' },
        { id: 2, title: 'How to Optimize React Apps', author: 'Jane Smith', date: 'Sep 30, 2025', views: 980, status: 'Draft' },
        { id: 3, title: 'Next.js Rendering Explained', author: 'Admin', date: 'Sep 25, 2025', views: 1860, status: 'Published' },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Head title="Admin Dashboard - Blog Management" />
            
            {/* Header with Theme Toggle */}
            <header className="border-b border-border bg-card shadow-sm">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <h1 className="text-2xl font-bold text-card-foreground">
                        Admin - Blog Management
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                            Welcome, Admin
                        </span>
                        
                        {/* Theme Toggle */}
                        <AppearanceToggleDropdown />
                        
                        <Form action="/admin/logout" method="post" className="inline">
                            {({ processing }) => (
                                <Button 
                                    type="submit" 
                                    variant="outline" 
                                    size="sm"
                                    disabled={processing}
                                    className="gap-2"
                                >
                                    <LogOut className="h-4 w-4" />
                                    {processing ? 'Logging out...' : 'Logout'}
                                </Button>
                            )}
                        </Form>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-6 space-y-8">
                
                {/* Top Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground">Manage Blogs</h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit, or delete your blog posts easily.
                        </p>
                    </div>
                    <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                        <PlusCircle className="h-4 w-4" />
                        Create New Blog
                    </Button>
                </div>

                {/* Blog Table */}
                <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground border-b border-border">
                            <tr>
                                <th className="px-6 py-3 font-medium">Title</th>
                                <th className="px-6 py-3 font-medium">Author</th>
                                <th className="px-6 py-3 font-medium">Date</th>
                                <th className="px-6 py-3 font-medium">Views</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                                    <td className="px-6 py-3 font-medium text-card-foreground">{blog.title}</td>
                                    <td className="px-6 py-3 text-muted-foreground">{blog.author}</td>
                                    <td className="px-6 py-3 text-muted-foreground">{blog.date}</td>
                                    <td className="px-6 py-3 text-muted-foreground">{blog.views.toLocaleString()}</td>
                                    <td className="px-6 py-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            blog.status === 'Published' 
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                            {blog.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 flex justify-end gap-2">
                                        <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20">
                                            <Edit3 className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Analytics Section */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-card-foreground">Blog Analytics</h2>
                        <Button variant="outline" size="sm" className="gap-2">
                            <BarChart3 className="h-4 w-4" /> View Details
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="rounded-lg border border-border p-4 bg-background">
                            <p className="text-sm text-muted-foreground">Total Blogs</p>
                            <p className="text-2xl font-bold text-foreground">54</p>
                        </div>
                        <div className="rounded-lg border border-border p-4 bg-background">
                            <p className="text-sm text-muted-foreground">Published</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">39</p>
                        </div>
                        <div className="rounded-lg border border-border p-4 bg-background">
                            <p className="text-sm text-muted-foreground">Drafts</p>
                            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">15</p>
                        </div>
                        <div className="rounded-lg border border-border p-4 bg-background">
                            <p className="text-sm text-muted-foreground">Total Views</p>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">23,870</p>
                        </div>
                    </div>
                </div>

                {/* Settings Section */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-card-foreground">Admin Settings</h2>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Settings className="h-4 w-4" /> Manage
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Configure general settings, roles, and permissions for blog management.
                    </p>
                </div>
            </main>
        </div>
    );
}