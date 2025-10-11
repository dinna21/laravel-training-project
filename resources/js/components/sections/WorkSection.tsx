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
        <div className="grid grid-cols-1 gap-6 mt-12">
          {/* First gradient card */}
          <div
            className="
            text-gray-900 dark:text-black 
            p-8 rounded-lg min-h-[300px] flex flex-col justify-between
            bg-[linear-gradient(153.16deg,#23222E_23.51%,#D3E0E4_84.61%)] 
            dark:bg-[linear-gradient(90deg,#68F7EF_0%,#92F9E6_28.93%,#F8FED1_100%)]
          "
          >
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white dark:text-black">
              Lorem ipsum dolor sit amet consectetur.
            </h3>

            {/* Bottom Section: Button on left, Badges and Text on right */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
              {/* Left: Button */}
              <Button className="bg-white/20 hover:bg-white/30 dark:bg-black/10 dark:hover:bg-black/20 text-white dark:text-black border border-white/30 dark:border-black/20 backdrop-blur-sm text-base whitespace-nowrap">
                Service <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Right: Badges and Paragraph */}
              <div className="text-right w-full md:max-w-md">
                {/* Badges - 2 rows layout */}
                <div className="space-y-2 mb-3">
                  {/* First row - 2 badges */}
                  <div className="flex justify-end gap-2">
                    <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-white/30 dark:border-black/20 hover:bg-white/30 dark:hover:bg-black/20 text-sm">
                      UX/UI Design
                    </Badge>
                    <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-white/30 dark:border-black/20 hover:bg-white/30 dark:hover:bg-black/20 text-sm">
                      Web Design
                    </Badge>
                  </div>
                  {/* Second row - 1 badge */}
                  <div className="flex justify-end">
                    <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-white/30 dark:border-black/20 hover:bg-white/30 dark:hover:bg-black/20 text-sm">
                      No-Code Development
                    </Badge>
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-white dark:text-black text-base leading-relaxed">
                  Felis amet orci diam at. Amet curabitur orci cras velit diam sem augue sem.
                </p>
              </div>
            </div>
          </div>

          {/* Second gradient card */}
          <div
            className="
            text-gray-900 dark:text-black
            p-8 rounded-lg min-h-[300px] flex flex-col justify-between
            bg-[linear-gradient(110.42deg,#3B3D35_8.69%,#DDD9D7_91.43%)] 
            dark:bg-[linear-gradient(90deg,#E2FFE0_0%,#FEFDB8_100%)]
          "
          >
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white dark:text-black">
              Praesent in cras nam quis ultrices.<br />Faucibus sed amet a egestas mauris
            </h3>

            {/* Bottom Section: Button on left, Badges and Text on right */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
              {/* Left: Button */}
              <Button className="bg-white/20 hover:bg-white/30 dark:bg-black/10 dark:hover:bg-black/20 text-white dark:text-black border border-white/30 dark:border-black/20 backdrop-blur-sm text-base whitespace-nowrap">
                Process <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Right: Badges and Paragraph */}
              <div className="text-right w-full md:max-w-md">
                {/* Badges - 2 rows layout */}
                <div className="space-y-2 mb-3">
                  {/* First row - 2 badges */}
                  <div className="flex justify-end gap-2">
                    <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-white/30 dark:border-black/20 hover:bg-white/30 dark:hover:bg-black/20 text-sm">
                      Design Thinking
                    </Badge>
                    <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-white/30 dark:border-black/20 hover:bg-white/30 dark:hover:bg-black/20 text-sm">
                      Research
                    </Badge>
                  </div>
                  {/* Second row - 1 badge */}
                  <div className="flex justify-end">
                    <Badge className="bg-white/20 dark:bg-black/10 text-white dark:text-black border-white/30 dark:border-black/20 hover:bg-white/30 dark:hover:bg-black/20 text-sm">
                      User-centered
                    </Badge>
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-white dark:text-black text-base leading-relaxed">
                  Felis amet orci diam at. Amet curabitur orci cras velit diam sem augue sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}