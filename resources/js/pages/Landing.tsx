//here is the landing page that uses various sections to build the complete page layout
import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import DescriptionSection from "@/components/sections/DescriptionSection";
import InformationSection from "@/components/sections/InformationSection";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";

interface HeroData {
  title: string;
  badges: string[];
  showCards: boolean;
  ctaButtons: {
    primary: { text: string };
    secondary: { text: string };
  };
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  imageDark?: string;
  category: string;
  technologies: string[];
}

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  imageDark?: string;
  date: string;
}

interface DescriptionItem {
  id: number;
  title: string;
  content: string[]; // Keep this as it comes from PHP
}

interface InformationItem {
  id: number;
  number: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

interface LandingProps {
  hero: HeroData;
  projects: Project[];
  blogs: Blog[];
  descriptionItems: DescriptionItem[];
  informationItems: InformationItem[];
}

export default function Landing({
  hero,
  projects,
  blogs,
  descriptionItems,
  informationItems,
}: LandingProps) {
  // Transform descriptionItems to match DescriptionSection's expected format
  const transformedDescriptionItems = descriptionItems.map(item => ({
    id: item.id,
    title: item.title,
    description: item.content[0] || '', // First paragraph as main description
    additionalDescription: item.content.slice(1).join('\n\n'), // Rest as additional
    images: [] // Empty array as landing page descriptions don't have images
  }));

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title="Agency Inc. - Creative Digital Solutions" />

      <Header />

      <Hero
        title={hero.title}
        badges={hero.badges}
        showCards={hero.showCards}
        ctaButtons={hero.ctaButtons}
      />

      <DescriptionSection
        items={transformedDescriptionItems}
        backgroundColor="bg-white dark:bg-gray-900"
        columns={2}
        showBackground={true}
      />

      <WorkSection 
        projects={projects}
        title="Work"
        showAll={false}
        limit={3}
        backgroundColor="bg-white dark:bg-gray-900"
      />

      <BlogSection 
        blogs={blogs}
        title="Blog"
        showAll={false}
        limit={3}
        backgroundColor="bg-white dark:bg-gray-900"
      />

      <InformationSection
        title="Information"
        items={informationItems}
        backgroundColor="bg-white dark:bg-gray-900"
        titlePosition="left"
        showArrow={true}
      />

      <Footer />
    </div>
  );
}