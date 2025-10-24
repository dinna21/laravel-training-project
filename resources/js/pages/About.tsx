import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import DescriptionSection from "@/components/sections/DescriptionSection";
import { useAppearance } from "@/hooks/use-appearance";

interface ProjectInfo {
  name: string;
  projectType: string;
  timeline: string;
  client: string;
}

interface AboutInfo {
  description: string;
  images: string[];
  imagesDark?: string[];
}

interface SolutionsInfo {
  description: string;
  additionalInfo: string;
  images: string[];
  imagesDark?: string[];
}

interface AboutProps {
  project: ProjectInfo;
  about: AboutInfo;
  solutions: SolutionsInfo;
}

export default function About({ project, about, solutions }: AboutProps) {
  const { appearance } = useAppearance();

  // Transform data for DescriptionSection component with safe fallbacks
  const aboutItems = [
    {
      id: 1,
      title: "About",
      description: about.description || "No description available.",
      images: appearance === 'dark' && about.imagesDark ? about.imagesDark : about.images,
    }
  ];

  const solutionsItems = [
    {
      id: 2,
      title: "Solutions",
      description: solutions.description || "No description available.",
      additionalDescription: solutions.additionalInfo || "",
      images: appearance === 'dark' && solutions.imagesDark ? solutions.imagesDark : solutions.images,
    }
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title={`${project.name} - About Us`} />

      <Header />

      {/* Project Header Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16">
            {project.name}
          </h1>

          {/* Project Details Grid */}
          <div className="flex justify-between gap-2">
            <div className="w-1/2 ">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                PROJECT TYPE
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-base">
                {project.projectType}
              </p>
            </div>

            <div className="w-1/4">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                TIMELINE
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-base">
                {project.timeline}
              </p>
            </div>

            <div className="w-1/5">
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

      {/* About Section - Using DescriptionSection Component */}
      <DescriptionSection
        items={aboutItems}
        backgroundColor="bg-white dark:bg-gray-900"
        columns={2}
        showBackground={false}
      />

      {/* Solutions Section - Using DescriptionSection Component */}
      <DescriptionSection
        items={solutionsItems}
        backgroundColor="bg-white dark:bg-gray-900"
        columns={2}
        showBackground={false}
      />

      <Footer />
    </div>
  );
}