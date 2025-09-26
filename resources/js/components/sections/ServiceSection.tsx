import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceProject {
  id: number;
  name: string;
  image: string;
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

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section className={`py-16 px-6 ${backgroundColor}`}>
      <div className="container mx-auto">
        {/* Two Column Layout - Title Left, Content Right */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Service Title */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {service.title}
            </h2>
          </div>

          {/* Right Column - Badges and Description */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {service.badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full"
            >
              {badge}
            </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {service.description}
            </p>
          </div>
        </div>

        {/* Work Section - Full Width */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            Work 
            <span className="ml-2 text-gray-400">→</span>
          </h3>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.projects.map((project) => (
              <div key={project.id} className="group">
                <Card 
                  className={`border-0 cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg ${
                    selectedProject === project.id 
                      ? 'bg-blue-600 dark:bg-blue-700' 
                      : 'bg-gray-900 dark:bg-gray-800'
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white">
                                <div class="text-center">
                                  <div class="text-sm opacity-60">Image not found</div>
                                  <div class="text-xs opacity-40 mt-1">${project.image}</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Project Name Caption - Outside the card */}
                <div className="mt-4 px-2">
                  <h4 className="text-gray-900 dark:text-gray-100 text-base font-medium">
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