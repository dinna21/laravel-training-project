interface CompanyDescriptionProps {
  title: string;
  image: string;
  description: string[];
}

export default function CompanyDescription({ title, image, description }: CompanyDescriptionProps) {
  return (
    <>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        {title}
      </h2>

      {/* Company Image */}
      <div className="mb-8 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
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
                    <div class="text-sm opacity-60">Image not found: ${image}</div>
                  </div>
                </div>
              `;
            }
          }}
        />
      </div>

      {/* Company Description */}
      <div className="space-y-6">
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}