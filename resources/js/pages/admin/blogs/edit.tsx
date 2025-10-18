import { useForm, Head, router } from "@inertiajs/react";
import { FormEvent } from "react";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

interface EditBlogProps {
    blog: {
        id: number;
        title: string;
        description: string;
        content: string;
        featured_image?: string;
        author_name: string;
        author_role: string;
        author_avatar?: string;
        status: "draft" | "published";
    };
}

export default function EditBlog({ blog }: EditBlogProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blogs', href: '/admin/blogs' },
        { title: 'Edit', href: `/admin/blogs/${blog.id}/edit` },
    ];

    const { data, setData, post, processing, errors } = useForm({
        title: blog.title || "",
        description: blog.description || "",
        content: blog.content || "",
        featured_image: null as File | null,
        author_name: blog.author_name || "",
        author_role: blog.author_role || "",
        author_avatar: null as File | null,
        status: blog.status || "draft",
    });

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Use POST with _method spoofing for file uploads
    router.post(`/admin/blogs/${blog.id}`, {
        _method: 'put',
        title: data.title,
        description: data.description,
        content: data.content,
        ...(data.featured_image && { featured_image: data.featured_image }),
        author_name: data.author_name,
        author_role: data.author_role,
        ...(data.author_avatar && { author_avatar: data.author_avatar }),
        status: data.status,
    }, {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
            console.log('Blog updated successfully');
        },
    });
};


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Blog #${blog.id} - ${blog.title}`} />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Edit Blog</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Update blog details and publish changes
                        </p>
                    </div>
                    <Button 
                        type="button"
                        variant="outline" 
                        onClick={() => router.visit('/admin/blogs')}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blogs
                    </Button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Blog Details Card */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground">Blog Details</h2>
                            <p className="text-sm text-muted-foreground">
                                Edit the blog post details
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Title */}
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                />
                                {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
                            </div>

                            {/* Description */}
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    rows={3}
                                />
                                {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
                            </div>

                            {/* Content */}
                            <div>
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData("content", e.target.value)}
                                    rows={8}
                                />
                                {errors.content && <p className="text-sm text-red-600 mt-1">{errors.content}</p>}
                            </div>

                            {/* Featured Image */}
                            <div>
                                <Label htmlFor="featured_image">Featured Image</Label>

                                {/* Show current image if available */}
                                {blog.featured_image && (
                                    <div className="mt-2">
                                        <img
                                            src={`/storage/${blog.featured_image}`}
                                            alt="Current featured"
                                            className="w-32 h-32 rounded-lg object-cover border"
                                        />
                                    </div>
                                )}

                                <Input
                                    id="featured_image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData("featured_image", e.target.files ? e.target.files[0] : null)
                                    }
                                    className="mt-2 cursor-pointer"
                                />
                                {errors.featured_image && <p className="text-sm text-red-600 mt-1">{errors.featured_image}</p>}
                            </div>

                            {/* Status */}
                            <div>
                                <Label htmlFor="status">Status</Label>
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(e) => setData("status", e.target.value as "draft" | "published")}
                                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground">Author Information</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="author_name">Author Name</Label>
                                    <Input
                                        id="author_name"
                                        type="text"
                                        value={data.author_name}
                                        onChange={(e) => setData("author_name", e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="author_role">Author Role</Label>
                                    <Input
                                        id="author_role"
                                        type="text"
                                        value={data.author_role}
                                        onChange={(e) => setData("author_role", e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Current avatar */}
                            {blog.author_avatar && (
                                <div className="mt-2">
                                    <img
                                        src={`/storage/${blog.author_avatar}`}
                                        alt="Current avatar"
                                        className="w-20 h-20 rounded-full object-cover border"
                                    />
                                </div>
                            )}

                            <div>
                                <Label htmlFor="author_avatar">Change Avatar</Label>
                                <Input
                                    id="author_avatar"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData("author_avatar", e.target.files ? e.target.files[0] : null)
                                    }
                                    className="cursor-pointer mt-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.visit('/admin/blogs')}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? "Updating..." : "Update Blog"}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}