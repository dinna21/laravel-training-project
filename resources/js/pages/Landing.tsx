import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import DescriptionSection from "@/components/sections/DescriptionSection";
import InformationSection from "@/components/sections/InformationSection";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";

//  Import data form the constants folder
import { descriptionItems, informationItems } from "@/constants/landing-data";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface LandingProps {
  projects: Project[];
  blogs: Blog[];
}

export default function Landing({ projects, blogs }: LandingProps) {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title="Agency Inc. - Creative Digital Solutions" />

      <Header />

      <Hero
        title="Lorem ipsum dolor sit amet consectetur."
        badges={["UX/UI Design", "Web Design"]}
        showCards={true}
        ctaButtons={{
          primary: { text: "Get Started" },
          secondary: { text: "Learn More" },
        }}
      />

      <DescriptionSection
        items={descriptionItems}
        backgroundColor="bg-white dark:bg-gray-900"
        columns={2}
        showBackground={true}
      />

      <WorkSection projects={projects} />
      <BlogSection blogs={blogs} />

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
