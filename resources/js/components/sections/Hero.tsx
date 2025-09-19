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
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight max-w-3xl mb-8">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 mb-12 justify-center">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Two-card layout */}
        {showCards && (
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl w-full mx-auto">
            {/* Left Card */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <Button variant="secondary" className="mt-6 bg-cyan-400 text-gray-900 hover:bg-cyan-300">
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

        {/* CTA Buttons */}
        {ctaButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaButtons.primary && (
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Rocket className="w-5 h-5 mr-2" />
                {ctaButtons.primary.text}
              </Button>
            )}
            {ctaButtons.secondary && (
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-900 dark:border-gray-500 dark:text-gray-100">
                {ctaButtons.secondary.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}