import { useForm, Head, router } from "@inertiajs/react";
import { FormEvent } from "react";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
    },
    {
        title: 'Blogs',
        href: '/admin/blogs',
    },
    {
        title: 'Create',
        href: '/admin/blogs/create',
    },
];

export default function CreateBlog() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        content: "",
        featured_image: null as File | null,
        author_name: "",
        author_role: "",
        author_avatar: null as File | null,
        status: "draft" as "draft" | "published",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Use router.post for better handling
        router.post('/admin/blogs', data, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Blog" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Create Blog</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Create a new blog post with rich content
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
                                Basic information about your blog post
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Title */}
                            <div>
                                <Label htmlFor="title">
                                    Title <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                    placeholder="Enter blog title"
                                    className="mt-1"
                                    required
                                />
                                {errors.title && (
                                    <p className="text-sm text-red-600 mt-1">{errors.title}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <Label htmlFor="description">
                                    Description <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    rows={3}
                                    placeholder="Enter a short summary"
                                    className="mt-1 resize-none"
                                    required
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-600 mt-1">{errors.description}</p>
                                )}
                            </div>

                            {/* Content */}
                            <div>
                                <Label htmlFor="content">
                                    Content <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData("content", e.target.value)}
                                    rows={8}
                                    placeholder="Write your full blog content here..."
                                    className="mt-1 resize-none"
                                    required
                                />
                                {errors.content && (
                                    <p className="text-sm text-red-600 mt-1">{errors.content}</p>
                                )}
                            </div>

                            {/* Featured Image */}
                            <div>
                                <Label htmlFor="featured_image">Featured Image</Label>
                                <div className="mt-1">
                                    <Input
                                        id="featured_image"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setData("featured_image", e.target.files ? e.target.files[0] : null)
                                        }
                                        className="cursor-pointer"
                                    />
                                </div>
                                {errors.featured_image && (
                                    <p className="text-sm text-red-600 mt-1">{errors.featured_image}</p>
                                )}
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
                                {errors.status && (
                                    <p className="text-sm text-red-600 mt-1">{errors.status}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Author Information Card */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground">Author Information</h2>
                            <p className="text-sm text-muted-foreground">
                                Information about the blog author
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Author Name & Role */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="author_name">Author Name</Label>
                                    <Input
                                        id="author_name"
                                        type="text"
                                        value={data.author_name}
                                        onChange={(e) => setData("author_name", e.target.value)}
                                        placeholder="Author full name"
                                        className="mt-1"
                                    />
                                    {errors.author_name && (
                                        <p className="text-sm text-red-600 mt-1">{errors.author_name}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="author_role">Author Role</Label>
                                    <Input
                                        id="author_role"
                                        type="text"
                                        value={data.author_role}
                                        onChange={(e) => setData("author_role", e.target.value)}
                                        placeholder="e.g. Content Writer"
                                        className="mt-1"
                                    />
                                    {errors.author_role && (
                                        <p className="text-sm text-red-600 mt-1">{errors.author_role}</p>
                                    )}
                                </div>
                            </div>

                            {/* Author Avatar */}
                            <div>
                                <Label htmlFor="author_avatar">Author Avatar</Label>
                                <div className="mt-1">
                                    <Input
                                        id="author_avatar"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setData("author_avatar", e.target.files ? e.target.files[0] : null)
                                        }
                                        className="cursor-pointer"
                                    />
                                </div>
                                {errors.author_avatar && (
                                    <p className="text-sm text-red-600 mt-1">{errors.author_avatar}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.visit('/admin/blogs')}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? "Creating..." : "Create Blog"}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}