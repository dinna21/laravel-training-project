import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useAppearance } from '@/hooks/use-appearance';

interface ServiceProject {
  id: number;
  name: string;
  image: string;
  imageDark?: string;
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  badges: string[];
  projects: ServiceProject[];
}

interface ServiceSectionProps {
  service: ServiceItem;
  backgroundColor?: string;
}

export default function ServiceSection({ 
  service, 
  backgroundColor = "bg-white dark:bg-gray-900" 
}: ServiceSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section ref={sectionRef} className={`py-8 md:py-16 px-4 md:px-6 ${backgroundColor}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Two Column Layout - Responsive */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 md:mb-16 ${isVisible ? 'header-animate' : 'opacity-0'}`}>
          {/* Left Column - Service Title */}
          <div className="order-1 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {service.title}
            </h2>
          </div>

          {/* Right Column - Badges and Description */}
          <div className="order-2 lg:order-2">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              {service.badges.map((badge, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="animated-badge px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full cursor-pointer"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        </div>

        {/* Work Section - Full Width */}
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 inline-flex items-center gap-2 ${isVisible ? 'header-animate' : 'opacity-0'}`}>
            Work 
            <span className="arrow-bounce">→</span>
          </h3>
          
          {/* Projects Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group ${isVisible ? 'card-animate' : 'opacity-0'}`}
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`
                }}
              >
                <Card 
                  className={`animated-card border-0 cursor-pointer overflow-hidden rounded-lg ${
                    selectedProject === project.id 
                      ? 'bg-blue-600 dark:bg-blue-700' 
                      : 'bg-gray-900 dark:bg-gray-800'
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <CardContent className="p-0 relative">
                    {/* Project Image - Responsive aspect ratio */}
                    <div className="aspect-[4/3] sm:aspect-[4/3] relative overflow-hidden">
                      <img
                        src={appearance === 'dark' && project.imageDark ? project.imageDark : project.image}
                        alt={project.name}
                        className="animated-image w-full h-full object-cover rounded-t-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white rounded-t-lg">
                                <div class="text-center p-4">
                                  <div class="text-xs sm:text-sm opacity-60">Image not found</div>
                                  <div class="text-xs opacity-40 mt-1 break-all">${project.image}</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="image-overlay"></div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Project Name Caption - Responsive */}
                <div className="mt-3 sm:mt-4 px-1 sm:px-2">
                  <h4 className="title-underline text-gray-900 dark:text-gray-100 text-sm sm:text-base font-medium">
                    {project.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}