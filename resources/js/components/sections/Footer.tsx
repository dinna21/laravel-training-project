import { Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

interface FooterProps {
  showContact?: boolean;
  contactTitle?: string;
  contactDescription?: string;
  companyName?: string;
  year?: number;
}

export default function Footer({ 
  showContact = true,
  contactTitle = "Contact Us",
  contactDescription = "We'd love to hear from you!",
  companyName = "Agency Inc.",
  year = new Date().getFullYear()
}: FooterProps) {
  return (
    <>
      {/* Contact Section */}
      {showContact && (
        <section id="contact" className="py-16 px- bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              {contactTitle}
              
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {contactDescription}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button variant="secondary">
                <Mail className="w-5 h-5 mr-2" /> Email
              </Button>
              <Button variant="secondary">
                <Phone className="w-5 h-5 mr-2" /> Call
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 px-30 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 mb-1 justify-items-center">
            {/* Philosophy Column */}
            <div>
              <h4 className="font-semibold mb-8 text-gray-900 dark:text-gray-100 flex items-center">
                Philosophy 
                <span className="ml-2 text-gray-400">↗</span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/brands" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/information" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Information
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-8 text-gray-900 dark:text-gray-100 flex items-center">
                Company 
                <span className="ml-2 text-gray-400">↗</span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/greeting" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Greeting
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="/company-profile" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Company Profile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recruit Column */}
            <div>
              <h4 className="font-semibold mb-8 text-gray-900 dark:text-gray-100 flex items-center">
                Recruit 
                <span className="ml-2 text-gray-400">↗</span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/interview" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Interview
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/career-path" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Career path
                  </Link>
                </li>
                <li>
                  <Link href="/recruitment-requirements" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Recruitment Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/employer-action-plan" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    Employer action plan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {companyName}
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-1">
              <p>Jaderholls</p>
              <p>634 Clovis Lodge</p>
              <p>Suite 281</p>
              <p>Germany</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-12 border-t border-gray-200 dark:border-gray-700">
            {/* Company Name and Year */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {companyName}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {year} {companyName}. All Rights Reserved.
              </p>
            </div>

            {/* Social Links and Privacy */}
            <div className="flex items-center space-x-6">
              {/* Social Icons */}
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>

              {/* Privacy Policy */}
              <Link href="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}