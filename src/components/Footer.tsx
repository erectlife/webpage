import { Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ErectLife</h3>
            <p className="text-white/80 leading-relaxed">
              Transform your life with AI-powered wellness. Combining physical
              training, mental health, and nutrition guidance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Navigation</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                About ErectLife
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("privacy")}
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                Privacy
              </button>
              <button
                onClick={() => scrollToSection("questionnaire")}
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                Get Started
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Legal</h4>
            <nav className="space-y-3">
              <Link
                to="/privacy-policy"
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@erectlife.com"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>hello@erectlife.com</span>
              </a>
              <a
                href="https://www.linkedin.com/company/erectlife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 ErectLife. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Made with ❤️ for your wellness journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;