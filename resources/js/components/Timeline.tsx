interface TimelineItem {
  year: string;
  month: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="flex items-start gap-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          {/* Year and Month */}
          <div className="flex-shrink-0 w-20">
            <div className="text-gray-900 dark:text-gray-100 font-bold text-lg">
              {item.year}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              {item.month}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}