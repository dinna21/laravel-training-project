import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  status: 'published' | 'draft';
  featured_image: string | null;
}

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      router.delete(`/admin/blogs/${id}`);
    }
  };

  if (!blogs.length) {
    return <p className="text-muted-foreground">No blogs available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
        >
          {blog.featured_image && (
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={`/storage/${blog.featured_image}`}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                  blog.status === 'published'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}
              >
                {blog.status}
              </span>
              <span className="text-xs text-muted-foreground">{blog.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{blog.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{blog.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">By {blog.author}</span>
              <div className="flex gap-2">
                <Link href={`/admin/blogs/${blog.id}/edit`}>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
