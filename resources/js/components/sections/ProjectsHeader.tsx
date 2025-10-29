interface ProjectHeaderProps {
  name: string;
  projectType: string;
  timeline: string;
  client: string;
}

export default function ProjectHeader({ name, projectType, timeline, client }: ProjectHeaderProps) {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16">
          {name}
        </h1>

        {/* Project Details Grid */}
        <div className="flex justify-between gap-2">
          <div className="w-1/2">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              PROJECT TYPE
            </h3>
            <p className="text-gray-900 dark:text-gray-100 text-base">
              {projectType}
            </p>
          </div>

          <div className="w-1/4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              TIMELINE
            </h3>
            <p className="text-gray-900 dark:text-gray-100 text-base">
              {timeline}
            </p>
          </div>

          <div className="w-1/5">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              CLIENT
            </h3>
            <p className="text-gray-900 dark:text-gray-100 text-base">
              {client}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}