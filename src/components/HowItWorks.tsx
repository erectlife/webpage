import { Bot, UserCheck, Target, BarChart3, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Bot,
      title: "AI Assessment", 
      description: "Complete our comprehensive health questionnaire. Our AI analyzes your data to understand your unique needs and goals.",
      details: ["Personalized health profiling", "Lifestyle analysis", "Goal identification"]
    },
    {
      icon: UserCheck,
      title: "Expert Review",
      description: "Certified health professionals review your AI-generated insights and provide expert validation and adjustments.",
      details: ["Professional validation", "Custom modifications", "Safety verification"]
    },
    {
      icon: Target,
      title: "Personalized Plan",
      description: "Receive your tailored wellness plan combining the best of AI precision with human expertise.",
      details: ["Custom exercise routines", "Nutrition guidance", "Progress milestones"]
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor your journey with detailed analytics, regular check-ins, and continuous plan optimization.",
      details: ["Real-time tracking", "Performance insights", "Plan adjustments"]
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient">ErectLife</span> Works
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our innovative 4-step process combines cutting-edge AI technology with expert human insight 
            to deliver personalized wellness solutions that actually work.
          </p>
        </div>

        {/* Two-Column Layout with Vertical Stepper */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30 z-0"></div>
                )}
                
                <div className="relative z-10 group">
                  <div className="flex items-start space-x-6">
                    {/* Step Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative shadow-lg">
                        <step.icon className="h-8 w-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual/Highlight */}
          <div className="lg:sticky lg:top-32">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/50 overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full border border-secondary/30 mb-6">
                    <Bot className="h-6 w-6 text-secondary" />
                    <span className="text-secondary font-semibold text-lg">AI</span>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                    <UserCheck className="h-6 w-6 text-accent" />
                    <span className="text-accent font-semibold text-lg">Expert</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    The Perfect <span className="text-gradient">Balance</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience the power of artificial intelligence combined with human expertise. 
                    Our unique approach ensures you get scientifically-backed recommendations that 
                    are personally validated by certified professionals.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">97%</div>
                    <div className="text-sm text-muted-foreground">User Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">AI Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Expert Coaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary-glow mb-1">5min</div>
                    <div className="text-sm text-muted-foreground">Setup Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;