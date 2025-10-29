import { useAppearance } from '@/hooks/use-appearance';

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

  return (
    <section className={`py-16 px-30 ${backgroundColor}`}>
      <div className="container mx-auto">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className="space-y-16">
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className={`grid ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-12 items-start ${showBackground ? 'bg-[#F9F7F5] dark:bg-[#312F33] p-8 rounded-2xl shadow-sm' : ''
                }`}
            >
              {/* LEFT COLUMN — TITLE */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT COLUMN — DESCRIPTION ABOVE IMAGES */}
              <div className="flex flex-col space-y-6 text-gray-700 dark:text-gray-200">
                {/* Description text */}
                <div className="space-y-4">
                  <p className="leading-relaxed">{item.description}</p>
                  {item.additionalDescription && (
                    <p className="leading-relaxed">{item.additionalDescription}</p>
                  )}
                </div>

                {/* Images - Display 2 images side by side */}
                {item.images && item.images.length > 0 && (
                  <div className="flex flex-col space-y-4">
                    {/* First Image */}
                    <div className="w-full">
                      <img
                        src={item.images[0]}
                        alt={`${item.title} - Image 1`}
                        className="w-[537px] h-[337px] rounded-lg"
                      />
                    </div>

                    {/* Second Image - if available */}
                    {item.images[1] && (
                      <div className="w-full">
                        <img
                          src={item.images[1]}
                          alt={`${item.title} - Image 2`}
                          className="w-[537px] h-[237px] rounded-lg object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}