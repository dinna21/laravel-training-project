import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import BlogList from '@/components/BlogList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  status: 'published' | 'draft';
  featured_image: string | null;
}

interface BlogsIndexProps {
  blogs: Blog[];
}

export default function BlogsIndex({ blogs }: BlogsIndexProps) {
  return (
    <AppLayout>
      <Head title="Manage Blogs" />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <Link href="/admin/blogs/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Create Blog
          </Button>
        </Link>
      </div>
      <BlogList blogs={blogs} />
    </AppLayout>
  );
}