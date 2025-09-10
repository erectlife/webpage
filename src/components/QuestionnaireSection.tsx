import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Shield, Star } from "lucide-react";

const QuestionnaireSection = () => {
  const handleSignUpClick = () => {
    // This would typically navigate to the questionnaire
    window.open("https://erectlife.com/coming-soon/", "_blank");
  };

  const benefits = [
    {
      icon: Clock,
      title: "5-Minute Assessment",
      description: "Quick and comprehensive health evaluation",
    },
    {
      icon: Shield,
      title: "100% Private & Secure",
      description: "Your data is encrypted and protected",
    },
    {
      icon: Star,
      title: "Personalized Results",
      description: "Get insights tailored to your unique profile",
    },
  ];

  return (
    <section id="questionnaire" className="section-padding secondary-gradient relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/src/assets/van.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/80"></div>
      
      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Take our free assessment to discover your personalized wellness
              path. Join thousands who have already started their journey to
              better health.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-slide-up">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm opacity-80">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Instant results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Expert reviewed</span>
                  </div>
                </div>

                <Button
                  onClick={handleSignUpClick}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                >
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs opacity-70">
                  By clicking "Start Free Assessment", you agree to receive
                  updates about ErectLife. No spam, unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuestionnaireSection;