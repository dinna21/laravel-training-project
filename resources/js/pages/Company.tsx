import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface CompanyInfo {
  title: string;
  description: string[];
  image: string;
}

interface HistoryItem {
  year: string;
  month: string;
  description: string;
}

interface CompanyProps {
  company: CompanyInfo;
  history: HistoryItem[];
}

export default function Company({ company, history }: CompanyProps) {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title="Company - Agency Inc." />

      <Header />

      {/* Company Section */}
      <section className="py-16 px-4 md:px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Company
              </h1>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                {company.title}
              </h2>

              {/* Company Image */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={company.image}
                  alt="Company meeting"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-300 rounded-2xl">
                          <div class="text-center p-6">
                            <div class="text-lg mb-2">Company Meeting Image</div>
                            <div class="text-sm opacity-60">Image not found: ${company.image}</div>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Company Description */}
              <div className="space-y-6">
                {company.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* History Section */}
      <section className="py-16 px-4 md:px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - History Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                History
              </h2>
            </div>

            {/* Right Column - Timeline */}
            <div className="space-y-6">
              {history.map((item, index) => (
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}