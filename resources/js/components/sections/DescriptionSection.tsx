import { useAppearance } from '@/hooks/use-appearance';
import { useState, useEffect, useRef } from 'react';

interface DescriptionItem {
  id?: number;
  title: string;
  description: string;
  additionalDescription?: string;
  images: string[];
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
  const { appearance } = useAppearance();
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [titleVisible, setTitleVisible] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Title visibility
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && !titleVisible) {
          setTitleVisible(true);
        }
      }

      // Item visibility
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0 && !visibleItems.has(index)) {
          setVisibleItems(prev => new Set(prev).add(index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems, titleVisible]);

  const getParallaxOffset = (index: number) => {
    const element = itemRefs.current[index];
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const distance = viewportCenter - elementCenter;
    return distance * 0.05; // subtle factor
  };

  return (
    <section className={`py-16 px-30 ${backgroundColor} overflow-hidden relative`}>
      <div className="container mx-auto">
        {/* Title */}
        {title && (
          <div
            ref={titleRef}
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 relative inline-block">
              {title}
              <span
                className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out ${
                  titleVisible ? 'w-full' : 'w-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              />
            </h2>
          </div>
        )}

        {/* Items */}
        <div className="space-y-16">
          {items.map((item, index) => {
            const isVisible = visibleItems.has(index);
            const parallaxOffset = getParallaxOffset(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id || index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`grid ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-12 items-start ${
                  showBackground ? 'bg-[#F9F7F5] dark:bg-[#312F33] p-8 rounded-2xl shadow-sm' : ''
                } transition-all duration-1000 ease-out relative`}
                style={{
                  transform: `translateY(${isVisible ? parallaxOffset : 64}px)`,
                  opacity: isVisible ? 1 : 0
                }}
              >
                {/* LEFT COLUMN */}
                <div
                  className={`transition-all duration-1000 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-x-0 scale-100'
                      : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'} scale-95`
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-500 transition-all duration-300 relative group">
                    {item.title}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                  </h3>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col space-y-6 text-gray-700 dark:text-gray-200">
                  <div
                    className={`space-y-4 transition-all duration-1000 ease-out ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${isEven ? 'translate-x-12' : '-translate-x-12'}`
                    }`}
                  >
                    <p className="leading-relaxed">{item.description}</p>
                    {item.additionalDescription && (
                      <p className="leading-relaxed">{item.additionalDescription}</p>
                    )}
                  </div>

                  {/* Images */}
                  {item.images && item.images.length > 0 && (
                    <div className="flex flex-col space-y-4">
                      {item.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`w-full overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 ease-out`}
                          style={{
                            transform: `translateY(${isVisible ? parallaxOffset * (0.3 + imgIndex * 0.2) : 48}px)`,
                            opacity: isVisible ? 1 : 0
                          }}
                        >
                          <img
                            src={img}
                            alt={`${item.title} - Image ${imgIndex + 1}`}
                            className="w-full h-[337px] object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-110 hover:rotate-1"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}