import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, Trash2 } from 'lucide-react';

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
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No blogs available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
          {/* Featured Image */}
          {blog.featured_image && (
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={`/storage/${blog.featured_image}`}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <CardContent className="p-6 space-y-3">
            {/* Status & Category */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                  blog.status === 'published'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}
              >
                {blog.status}
              </span>
              {blog.category && (
                <span className="inline-flex rounded-full px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  {blog.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {blog.title}
            </h3>

            {/* Subtitle */}
            {blog.subtitle && (
              <p className="text-sm text-muted-foreground line-clamp-1">
                {blog.subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {blog.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="text-xs text-muted-foreground space-y-1">
                <p>By {blog.author_name || blog.author}</p>
                <p>{blog.date}</p>
              </div>
              
              <div className="flex gap-2">
                <Link href={`/admin/blogs/${blog.id}/edit`}>
                  <Button size="sm" variant="ghost" className="hover:bg-primary/10">
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}