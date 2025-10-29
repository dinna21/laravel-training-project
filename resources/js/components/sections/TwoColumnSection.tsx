import { ReactNode } from "react";

interface TwoColumnSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TwoColumnSection({ title, children, className = "" }: TwoColumnSectionProps) {
  return (
    <section className={`py-16 px-4 md:px-6 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h1>
          </div>

          {/* Right Column - Content */}
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}