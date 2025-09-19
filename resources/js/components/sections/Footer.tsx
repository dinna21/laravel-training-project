import { Mail, Phone } from "lucide-react";
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
        <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center">
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
      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-left">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">{companyName}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Creating digital experiences that matter.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500">Services</Link></li>
                <li><Link href="/work" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500">Work</Link></li>
                <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500">About</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-left">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600 dark:text-gray-300">Web Design</li>
                <li className="text-gray-600 dark:text-gray-300">UX/UI Design</li>
                <li className="text-gray-600 dark:text-gray-300">Development</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-left">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>hello@agency.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Main St, City</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {year} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}