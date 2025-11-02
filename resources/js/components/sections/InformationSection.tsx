import { Button } from "@/components/ui/button";
import '@/../../resources/css/company-animations.css';

interface InformationItem {
  id?: number;
  number: string | number;
  title: string;
  buttonText: string;
  buttonLink?: string;
  onClick?: () => void;
}

interface InformationSectionProps {
  title?: string;
  items: InformationItem[];
  backgroundColor?: string;
  titlePosition?: 'left' | 'center';
  showArrow?: boolean;
}

export default function InformationSection({ 
  title = "Information",
  items,
  backgroundColor = "bg-white dark:bg-gray-900",
  titlePosition = 'left',
  showArrow = true
}: InformationSectionProps) {
  return (
    <section className={`py-16 px-30 ${backgroundColor}`}>
      <div className="container mx-auto max-w-6xl">
        <div className={`grid ${titlePosition === 'left' ? 'md:grid-cols-2' : 'grid-cols-1'} gap-12`}>
          {/* Title Section */}
          {titlePosition === 'left' ? (
            <div className="flex items-start">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 company-title-animate">
                {title} {showArrow && <span className="inline-block arrow-pulse">→</span>}
              </h3>
            </div>
          ) : (
            <div className="text-center mb-8 col-span-full">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 company-title-animate">
                {title} {showArrow && <span className="inline-block arrow-pulse">→</span>}
              </h3>
            </div>
          )}

          {/* Information Items */}
          <div className={`space-y-8 ${titlePosition === 'center' ? 'col-span-full max-w-4xl mx-auto' : ''}`}>
            {items.map((item, index) => (
              <div 
                key={item.id || index} 
                className={`flex items-start gap-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 info-item-animate info-item-hover animate-delay-${Math.min((index + 1) * 100, 600)}`}
              >
                {/* Number */}
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 min-w-[60px] info-number-badge">
                  {item.number}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3 info-title">
                    {item.title}
                  </h4>
                  
                  {item.buttonLink ? (
                    <a 
                      href={item.buttonLink}
                      className="inline-block text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded transition-colors info-button"
                    >
                      {item.buttonText} <span className="inline-block arrow-slide">→</span>
                    </a>
                  ) : (
                    <button 
                      onClick={item.onClick}
                      className="text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded transition-colors info-button"
                    >
                      {item.buttonText} <span className="inline-block arrow-slide">→</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}