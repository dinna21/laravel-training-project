import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useAppearance } from "@/hooks/use-appearance";

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
            <Card key={project.id} className="bg-transparent border-gray-200 dark:border-gray-600 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <img
                  src={appearance === 'dark' && project.imageDark ? project.imageDark : project.image}
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
              <div className="p-2">
                <p className="font-semibold mb-2">
                  {project.name}
                </p>
              </div>
            </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional gradient cards section */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-6 mt-12">
          {/* First gradient card */}
          <div className="bg-gradient-to-r from-[#68F7EF] via-[#92F9E6] to-[#F8FED1] dark:bg-[length:100%_100%] dark:[background-image:linear-gradient(153.16deg,#23222E_23.51%,#D3E0E4_84.61%)] text-gray-900 dark:text-white p-8 rounded-lg min-h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet consectetur.
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white border-white/30 hover:bg-white/30 text-sm">
                  UX/UI Design
                </Badge>
                <Badge className="bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white border-white/30 hover:bg-white/30 text-sm">
                  Web Design
                </Badge>
                <Badge className="bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white border-white/30 hover:bg-white/30 text-sm">
                  No-Code Development
                </Badge>
              </div>

              <p className="text-gray-800 dark:text-white/80 text-base md:text-lg leading-relaxed">
                Felis amet orci diam at. Amet curabitur orci cras velit diam sem augue sem.
              </p>
            </div>

            <div className="mt-6">
              <Button className="bg-white/20 hover:bg-white/30 text-gray-900 dark:text-white border border-white/30 backdrop-blur-sm text-base">
                Service <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Second gradient card */}
          <div className="bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-300 dark:from-neutral-800 dark:via-neutral-600 dark:to-neutral-400 text-gray-900 dark:text-white p-8 rounded-lg min-h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Praesent in orcas nam quis ultrices.<br></br>Faucibus sed amet a egestas mauris
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white border-white/30 hover:bg-white/30 text-sm">
                  UX/UI Design
                </Badge>
                <Badge className="bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white border-white/30 hover:bg-white/30 text-sm">
                  Web Design
                </Badge>
                <Badge className="bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white border-white/30 hover:bg-white/30 text-sm">
                  No-Code Development
                </Badge>
              </div>

              <p className="text-gray-800 dark:text-white/80 text-base md:text-lg leading-relaxed">
                Felis amet orci diam at. Amet curabitur orci cras velit diam sem augue sem.
              </p>
            </div>

            <div className="mt-6">
              <Button className="bg-white/20 hover:bg-white/30 text-gray-900 dark:text-white border border-white/30 backdrop-blur-sm text-base">
                Process <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}