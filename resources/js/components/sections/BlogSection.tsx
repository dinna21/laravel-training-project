import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useAppearance } from '@/hooks/use-appearance';
import { useEffect, useRef, useState } from 'react';


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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px'
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-16 px-30 ${backgroundColor}`}>
      <div className="container mx-auto">
        <div className={`flex justify-between items-center mb-12 ${isVisible ? 'header-animate' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 inline-flex items-center gap-2">
            {title}
            <span className="inline-block arrow-bounce">→</span>
          </h3>
          {!showAll && blogs.length > limit && (
            <Link href="/blog">
              <Button 
                variant="outline"
                className="view-all-btn group relative"
              >
                View All 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`${isVisible ? 'card-animate' : 'opacity-0'}`}
              style={{
                animationDelay: `${0.2 + index * 0.15}s`
              }}
            >
              <Card className="blog-card bg-transparent border border-gray-200 dark:border-gray-700 group cursor-pointer h-full">
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 overflow-hidden relative rounded-t-lg">
                    <img
                      src={appearance === 'dark' && blog.imageDark ? blog.imageDark : blog.image}
                      alt={blog.title}
                      className="blog-image w-full h-full object-cover"
                    />
                    <div className="image-overlay"></div>
                  </div>

                  <div className="p-6">
                    {blog.date && (() => {
                      const date = new Date(blog.date);
                      const year = date.getFullYear();
                      const day = date.getDate();
                      const month = date.toLocaleDateString('en-US', { month: 'short' });

                      return (
                        <div className="mb-4">
                          <div className="flex items-baseline gap-4 mb-1">
                            <span className="date-text text-sm text-muted-foreground font-medium">
                              {year}
                            </span>
                            <span className="date-number text-5xl font-bold text-foreground">
                              {day}
                            </span>
                          </div>
                          <div className="date-text text-sm text-muted-foreground uppercase tracking-wider font-medium">
                            {month}
                          </div>
                        </div>
                      );
                    })()}
                    
                    <h4 className="blog-title text-lg font-medium text-foreground leading-relaxed pb-1">
                      {blog.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}