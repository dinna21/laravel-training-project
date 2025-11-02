import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useAppearance } from "@/hooks/use-appearance";
import { useEffect, useRef, useState } from "react";
import '@/../../resources/css/animation.css';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  imageDark?: string;
  category: string;
  technologies: string[];
}

interface WorkSectionProps {
  projects: Project[];
  title?: string;
  showAll?: boolean;
  limit?: number;
  backgroundColor?: string;
}

export default function WorkSection({
  projects,
  title = "Work",
  showAll = false,
  limit = 3,
  backgroundColor = "bg-white dark:bg-gray-900"
}: WorkSectionProps) {
  const displayProjects = showAll ? projects : projects.slice(0, limit);
  const { appearance } = useAppearance();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-16 px-30 ${backgroundColor}`}>
      <div className="container mx-auto">
        <div className={`flex justify-between items-center mb-8 ${isVisible ? 'header-animate' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 inline-flex items-center gap-2">
            {title}
            <span className="inline-block arrow-bounce">→</span>
          </h3>
          {!showAll && projects.length > limit && (
            <Link href="/work">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${isVisible ? 'card-animate' : 'opacity-0'}`}
              style={{
                animationDelay: `${0.2 + index * 0.15}s`
              }}
            >
              <Card className="animated-card bg-transparent border border-gray-200 dark:border-gray-700 group cursor-pointer h-full">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                    <div className="image-overlay"></div>
                    <img
                      src={appearance === 'dark' && project.imageDark ? project.imageDark : project.image}
                      alt={project.name}
                      className="w-full h-full object-cover animated-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-600">
                            <div class="text-center">
                              <div class="text-4xl mb-2">📁</div>
                              <div class="text-sm">${project.name}</div>
                            </div>
                          </div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-900 dark:text-gray-100 animated-text title-underline">
                      {project.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Gradient cards remain the same */}
        {/* ...existing code... */}
      </div>
    </section>
  );
}