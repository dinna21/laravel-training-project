import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceSection from "@/components/sections/ServiceSection";
import { useAppearance } from "@/hooks/use-appearance";


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

interface ServicesProps {
  services: ServiceItem[];
}

export default function Services({ services }: ServicesProps) {
  const { appearance } = useAppearance();
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title="Services - Agency Inc." />

      <Header />

      {/* Render each service section */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          backgroundColor={ "bg-white dark:bg-gray-900"}
        />
      ))}

      <Footer />
    </div>
  );
}