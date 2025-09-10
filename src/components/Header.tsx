import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveSection } from "@/hooks/useActiveSection";
import erectLifeLogo from "@/assets/erectlife-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'how-it-works', 'privacy', 'questionnaire']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (sectionId: string) => {
    const baseClass = "transition-all duration-200 font-medium relative";
    const activeClass = "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-100";
    const inactiveClass = "text-foreground hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";
    
    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center p-1 hover:opacity-80 transition-opacity"
              aria-label="Go to home"
            >
              <img
                src={erectLifeLogo}
                alt="ErectLife logo"
                className="h-8 md:h-9 lg:h-10 w-auto select-none"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 768px) 32px, (max-width: 1024px) 36px, 40px"
                width="40"
                height="40"
              />
              <span className="sr-only">ErectLife</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={getNavLinkClass("home")}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={getNavLinkClass("about")}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={getNavLinkClass("how-it-works")}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("privacy")}
              className={getNavLinkClass("privacy")}
            >
              Privacy
            </button>
            <button
              onClick={() => scrollToSection("questionnaire")}
              className={getNavLinkClass("questionnaire")}
            >
              Get Started
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("questionnaire")}
              className="hero-gradient text-white font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Start Free Test
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("privacy")}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Privacy
              </button>
              <button
                onClick={() => scrollToSection("questionnaire")}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Get Started
              </button>
              <Button
                onClick={() => scrollToSection("questionnaire")}
                className="hero-gradient text-white font-semibold hover:opacity-90 transition-opacity duration-200 w-full"
              >
                Start Free Test
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;