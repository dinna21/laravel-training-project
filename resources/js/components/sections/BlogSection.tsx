import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useAppearance } from '@/hooks/use-appearance';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  imageDark?: string;
  date: string;
}

interface BlogSectionProps {
  blogs: Blog[];
  title?: string;
  showAll?: boolean;
  limit?: number;
  backgroundColor?: string;
}

export default function BlogSection({
  blogs,
  title = "Blog",
  showAll = false,
  limit = 3,
  backgroundColor = "bg-white dark:bg-gray-900"
}: BlogSectionProps) {
  const displayBlogs = showAll ? blogs : blogs.slice(0, limit);
  const { appearance } = useAppearance();
  return (
    <section className={`py-16 px-30 ${backgroundColor}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title} →</h3>
          {!showAll && blogs.length > limit && (
            <Link href="/blog">
              <Button variant="outline">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBlogs.map((blog) => (
            <Card key={blog.id} className="bg-transparent border-gray-200 dark:border-gray-600 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 overflow-hidden">
                  <img
                    src={appearance === 'dark' && blog.imageDark ? blog.imageDark : blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 ">
                  {blog.date && (() => {
                    const date = new Date(blog.date);
                    const year = date.getFullYear();
                    const day = date.getDate();
                    const month = date.toLocaleDateString('en-US', { month: 'short' });

                    return (
                      <>
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-sm text-muted-foreground">{year}</span>
                          <span className="text-4xl font-bold text-foreground">{day}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{month}</div>
                      </>
                    );
                  })()}
                  <h4 className="text-base font-normal text-foreground">
                    {blog.title}
                  </h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}