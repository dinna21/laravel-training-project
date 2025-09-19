import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
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
  backgroundColor = "bg-gray-100 dark:bg-gray-800"
}: WorkSectionProps) {
  const displayProjects = showAll ? projects : projects.slice(0, limit);

  return (
    <section className={`py-16 px-6 ${backgroundColor}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title} →</h3>
          {!showAll && projects.length > limit && (
            <Link href="/work">
              <Button variant="outline">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <Card key={project.id} className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="bg-cyan-400 text-gray-900 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-cyan-400 hover:text-gray-900">
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}