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
    
    <section className="py-1 px-6 text-center relative overflow-hidden mt-8">
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
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 mb-12 justify-left">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Remove max-w-4xl to use full container width */}
        {showCards && (
          <div className="grid md:grid-cols-2 gap-8 mb-0 w-full">
            {/* Left Card */}
            <Card className="bg-gradient-to-r from-gray-800 via-gray-300 to-amber-100 text-white border-0">
              <CardContent className="p-8 text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <Button variant="secondary" className="mt-19 bg-cyan-400 text-gray-900 hover:bg-cyan-300">
                  Contact <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Right Card - Image */}
            <Card className="border-0 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/images/office--img.jpg"
                  alt="Modern office space"
                  className="w-full h-64 object-cover"
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