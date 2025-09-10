import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import iphoneMockup1 from "@/assets/iphone-mockup-1.jpg";
import iphoneMockup2 from "@/assets/iphone-mockup-2.jpg";

const Hero = () => {
  const scrollToQuestionnaire = () => {
    const element = document.getElementById("questionnaire");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] lg:min-h-[90vh]">
          {/* Content - Mobile: order-2, Desktop: order-1 */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Life with{" "}
                <span className="text-gradient">AI-Powered</span> Wellness
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Comprehensive wellness app combining physical training, mental
                health, and nutrition guidance. Get personalized recommendations
                from AI and expert coaches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToQuestionnaire}
                size="lg"
                className="hero-gradient text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Free Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>AI Powered</span>
              </div>
            </div>
          </div>

          {/* Images - Mobile: order-1, Desktop: order-2 */}
          <div className="relative flex justify-center items-center lg:justify-end animate-slide-up order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl rounded-full transform scale-150"></div>
              <div className="relative flex items-center space-x-4 lg:space-x-8">
                <div className="transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={iphoneMockup1}
                    alt="ErectLife App - Fitness Dashboard"
                    className="w-48 lg:w-64 h-auto rounded-3xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-500 translate-y-8 lg:translate-y-12">
                  <img
                    src={iphoneMockup2}
                    alt="ErectLife App - Nutrition Tracking"
                    className="w-48 lg:w-64 h-auto rounded-3xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;