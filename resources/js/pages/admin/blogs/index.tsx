import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';  // Change this
import BlogList from '@/components/BlogList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface Blog {
  id: number;
  title: string;
  subtitle?: string;
  category?: string;
  description: string;
  author: string;
  author_name?: string;
  date: string;
  status: 'published' | 'draft';
  featured_image: string | null;
}

interface BlogsIndexProps {
  blogs: Blog[];
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
  },
  {
    title: 'Blogs',
    href: '/admin/blogs',
  },
];

export default function BlogsIndex({ blogs }: BlogsIndexProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Manage Blogs" />
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
            <p className="text-muted-foreground mt-1">Manage and organize your blog posts</p>
          </div>
          <Link href="/admin/blogs/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Create Blog
            </Button>
          </Link>
        </div>
        <BlogList blogs={blogs} />
      </div>
    </AppLayout>
  );
}