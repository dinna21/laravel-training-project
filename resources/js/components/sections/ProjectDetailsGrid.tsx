interface DetailItem {
  label: string;
  value: string;
}

interface ProjectDetailsGridProps {
  details: DetailItem[];
  backgroundColor?: string;
}

export default function ProjectDetailsGrid({ 
  details,
  backgroundColor = "bg-white dark:bg-gray-900" 
}: ProjectDetailsGridProps) {
  return (
    <section className={`py-16 px-6 ${backgroundColor}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {details.map((detail, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                {detail.label}
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-base">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}