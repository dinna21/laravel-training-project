import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
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

  return (
    <section className={`py-16 px-6 ${backgroundColor}`}>
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
            <Card key={blog.id} className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-600">
                          <div class="text-center">
                            <div class="text-4xl mb-2">📁</div>
                            <div class="text-sm">${blog.title}</div>
                          </div>
                        </div>`;
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-semibold group-hover:text-cyan-400 mb-2 transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {blog.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}