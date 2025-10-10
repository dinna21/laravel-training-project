interface DescriptionItem {
  id?: number;
  title: string;
  content: string[];
}

interface DescriptionSectionProps {
  title?: string;
  items: DescriptionItem[];
  backgroundColor?: string;
  columns?: 1 | 2;
  showBackground?: boolean;
}

export default function DescriptionSection({ 
  title,
  items,
  backgroundColor = "bg-white dark:bg-gray-900",
  columns = 2,
  showBackground = true
}: DescriptionSectionProps) {
  return (
 <section className={`py-16 px-6 ${backgroundColor}`}>
      <div className="container mx-auto">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className="space-y-8">
          {items.map((item, index) => (
        <div 
          key={item.id || index} 
          className={`grid ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-8 w-full text-left ${
            showBackground ? 'bg-[#F9F7F5] dark:bg-[#312F33] p-8 rounded-lg' : ''
          }`}
        >
              {/* Title Column */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
              </div>

              {/* Content Column */}
              <div className="space-y-4 text-gray-700 dark:text-gray-200">
                {item.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}