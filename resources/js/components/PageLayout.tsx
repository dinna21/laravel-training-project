import { ReactNode } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}