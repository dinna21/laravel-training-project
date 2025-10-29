import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Rocket } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  badges?: string[];
  showCards?: boolean;
  backgroundImage?: string;
  ctaButtons?: {
    primary?: { text: string; href?: string; onClick?: () => void };
    secondary?: { text: string; href?: string; onClick?: () => void };
  };
}

export default function Hero({
  title,
  subtitle,
  badges = [],
  showCards = true,
  backgroundImage,
  ctaButtons
}: HeroProps) {
  return (

    <section className="py-16 px-30 text-center relative overflow-hidden mt-8">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
      )}

      {/* Change from mx-auto to container mx-auto to match WorkSection */}
      <div className="relative z-10 container mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight max-w-3xl mb-8 text-left">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Badges */}
        {/* Badges as Buttons */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 mb-12 justify-start">
            {badges.map((badge, index) => (
              <button
                key={index}
                className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-2 px-3 text-md rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {badge}
              </button>
            ))}
          </div>
        )}


        {/* Remove max-w-4xl to use full container width */}
        {showCards && (
          <div className="grid md:grid-cols-2 gap-8 mb-0 w-full">
            {/* Left Card */}
            <Card
              className="
              border-0
              bg-gradient-to-r 
              from-[#3E3C41] to-[#FEF6D9]      /* Light theme uses dark theme colors now */
              dark:from-[#95ECFD] dark:to-[#E5FFFB]  /* Dark theme uses light theme colors now */
              text-gray-900 dark:text-white
            "
            >
              <CardContent className="p-8 text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <Button className="bg-white/20 mt-25 hover:bg-white/30 text-gray-900 dark:text-white border border-white/30 backdrop-blur-sm text-base">
                  {/* <Button variant="secondary" className="mt-19 bg-cyan-400 text-gray-900 hover:bg-cyan-300"> */}
                  Contact <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Right Card - Image */}
            <Card className="border-0">
              <CardContent className="p-0">
                <img
                  src="/images/office--img.jpg"
                  alt="Modern office space"
                  className="w-full h-64"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">Office Space Image</div>';
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}