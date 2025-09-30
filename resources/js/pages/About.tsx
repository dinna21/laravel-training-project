import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface ProjectInfo {
  name: string;
  projectType: string;
  timeline: string;
  client: string;
}

interface AboutInfo {
  description: string;
  images: string[];
}

interface SolutionsInfo {
  description: string;
  additionalInfo: string;
  images: string[];
}

interface AboutProps {
  project: ProjectInfo;
  about: AboutInfo;
  solutions: SolutionsInfo;
}

export default function About({ project, about, solutions }: AboutProps) {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title="About Us - Agency Inc." />

      <Header />

      {/* Projects Name Header Section */}
      <section className="py-16 px-4 md:px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16">
            {project.name}
          </h1>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                PROJECT TYPE
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-base">
                {project.projectType}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                TIMELINE
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-base">
                {project.timeline}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                CLIENT
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-base">
                {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                About
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {about.description}
              </p>

              {/* Display Images from images folder - Theme Adaptive */}
              {about.images.map((image, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-gray-900/50"
                >
                  <img
                    src={image}
                    alt={`About image ${index + 1}`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <div class="text-center p-6">
                              <div class="text-lg mb-2">Image not found</div>
                              <div class="text-sm opacity-60">${image}</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 md:px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Solutions
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {solutions.description}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {solutions.additionalInfo}
              </p>

              {/* Display Solutions Images - Theme Adaptive */}
              {solutions.images.map((image, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-gray-900/50"
                >
                  <img
                    src={image}
                    alt={`Solution image ${index + 1}`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <div class="text-center p-6">
                              <div class="text-lg mb-2">Image not found</div>
                              <div class="text-sm opacity-60">${image}</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}