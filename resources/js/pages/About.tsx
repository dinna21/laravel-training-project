import { Head } from "@inertiajs/react";
import PageLayout from "@/components/PageLayout";
import ProjectHeader from "@/components/sections/ProjectsHeader";
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
    <PageLayout>
      <Head title={`${project.name} - About Us`} />

      <ProjectHeader
        name={project.name}
        projectType={project.projectType}
        timeline={project.timeline}
        client={project.client}
      />

      <DescriptionSection
        items={aboutItems}
        backgroundColor="bg-white dark:bg-gray-900"
        columns={2}
        showBackground={false}
      />

      <DescriptionSection
        items={solutionsItems}
        backgroundColor="bg-white dark:bg-gray-900"
        columns={2}
        showBackground={false}
      />
    </PageLayout>
  );
}