import { useForm, Head, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Heading from '@/components/heading';
import FormField from '@/components/form-field';
import ContentBlockItem, { type ContentBlock } from '@/components/content-block-item';
import { ArrowLeft, Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Blogs', href: '/admin/blogs' },
    { title: 'Create', href: '/admin/blogs/create' },
];

export default function CreateBlog() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        subtitle: "",
        description: "", // ADD THIS - It's required by controller
        featured_image: null as File | null,
        category: "adventure",
        author_name: "",
        author_role: "",
        author_avatar: null as File | null,
        status: "draft" as "draft" | "published",
    });

    const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
        { id: '1', type: 'heading', content: '', level: 'H2' }
    ]);
    const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null);

    const handleAddBlock = () => {
        setContentBlocks([...contentBlocks, {
            id: Date.now().toString(),
            type: 'heading',
            content: '',
            level: 'H2'
        }]);
    };

    const handleRemoveBlock = (id: string) => {
        setContentBlocks(contentBlocks.filter(block => block.id !== id));
    };

    const handleBlockChange = (id: string, field: keyof ContentBlock, value: string) => {
        setContentBlocks(contentBlocks.map(block =>
            block.id === id ? { ...block, [field]: value } : block
        ));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("featured_image", file);
            const reader = new FileReader();
            reader.onloadend = () => setFeaturedImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const contentHtml = contentBlocks.map(block => {
            switch (block.type) {
                case 'heading':
                    return `<${block.level?.toLowerCase()}>${block.content}</${block.level?.toLowerCase()}>`;
                case 'paragraph':
                    return `<p>${block.content}</p>`;
                case 'quote':
                    return `<blockquote>${block.content}</blockquote>`;
                default:
                    return '';
            }
        }).join('\n');

        router.post('/admin/blogs', { 
            ...data, 
            content: contentHtml 
        }, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setContentBlocks([{ id: '1', type: 'heading', content: '', level: 'H2' }]);
                setFeaturedImagePreview(null);
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            }
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Blog" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading title="Create Blog" description="Create a new blog post with rich content blocks" />
                    <Button type="button" variant="outline" onClick={() => router.visit('/admin/blogs')}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blogs
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Blog Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Blog Details</CardTitle>
                            <CardDescription>Basic information about your blog post</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2">
                                    <FormField label="Title" error={errors.title} required htmlFor="title">
                                        <Input
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                            placeholder="Enter blog title... (max 100 characters)"
                                            maxLength={100}
                                            required
                                        />
                                    </FormField>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField label="Status" htmlFor="status">
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) => setData("status", e.target.value as "draft" | "published")}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                        </select>
                                    </FormField>

                                    <FormField label="Category" htmlFor="category">
                                        <select
                                            id="category"
                                            value={data.category}
                                            onChange={(e) => setData("category", e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        >
                                            <option value="adventure">Adventure</option>
                                            <option value="technology">Technology</option>
                                            <option value="lifestyle">Lifestyle</option>
                                            <option value="business">Business</option>
                                            <option value="travel">Travel</option>
                                            <option value="food">Food</option>
                                        </select>
                                    </FormField>
                                </div>
                            </div>

                            <FormField label="Subtitle" error={errors.subtitle} htmlFor="subtitle">
                                <Input
                                    id="subtitle"
                                    value={data.subtitle}
                                    onChange={(e) => setData("subtitle", e.target.value)}
                                    placeholder="Enter blog subtitle (optional, max 200 characters)..."
                                    maxLength={200}
                                />
                            </FormField>

                            {/* ADD DESCRIPTION FIELD */}
                            <FormField label="Description" error={errors.description} required htmlFor="description">
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    placeholder="Enter a brief description..."
                                    rows={3}
                                    required
                                />
                            </FormField>

                            <FormField label="Featured Image" error={errors.featured_image} htmlFor="featured_image">
                                <div className="flex items-center gap-4">
                                    <Input id="featured_image" type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer" />
                                    {featuredImagePreview && (
                                        <img src={featuredImagePreview} alt="Preview" className="w-20 h-20 rounded-lg object-cover border" />
                                    )}
                                </div>
                            </FormField>
                        </CardContent>
                    </Card>

                    {/* Content Blocks */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Content Blocks</CardTitle>
                            <CardDescription>Build your blog content using our block-based editor</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {contentBlocks.map((block) => (
                                <ContentBlockItem
                                    key={block.id}
                                    block={block}
                                    onChange={handleBlockChange}
                                    onRemove={handleRemoveBlock}
                                />
                            ))}
                            <Button type="button" variant="outline" onClick={handleAddBlock} className="w-full border-dashed">
                                <Plus className="h-4 w-4 mr-2" />
                                Add Content Block
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Author Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Author Information</CardTitle>
                            <CardDescription>Information about the blog author</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField label="Author Name" error={errors.author_name} htmlFor="author_name">
                                    <Input
                                        id="author_name"
                                        value={data.author_name}
                                        onChange={(e) => setData("author_name", e.target.value)}
                                        placeholder="Author full name"
                                    />
                                </FormField>

                                <FormField label="Author Role" error={errors.author_role} htmlFor="author_role">
                                    <Input
                                        id="author_role"
                                        value={data.author_role}
                                        onChange={(e) => setData("author_role", e.target.value)}
                                        placeholder="e.g. Content Writer"
                                    />
                                </FormField>
                            </div>

                            <FormField label="Author Avatar" error={errors.author_avatar} htmlFor="author_avatar">
                                <Input
                                    id="author_avatar"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData("author_avatar", e.target.files?.[0] || null)}
                                    className="cursor-pointer"
                                />
                            </FormField>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end gap-3">
                        <Button type="button" variant="outline" onClick={() => router.visit('/admin/blogs')}>
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