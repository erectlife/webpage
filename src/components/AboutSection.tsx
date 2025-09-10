import { Activity, Brain, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Physical Training",
      description:
        "Personalized workout routines designed by fitness experts to improve your physical strength and endurance.",
    },
    {
      icon: Brain,
      title: "Mental Health",
      description:
        "Mindfulness techniques, stress management, and cognitive exercises to enhance your mental well-being.",
    },
    {
      icon: Utensils,
      title: "Nutrition",
      description:
        "Custom meal plans and nutritional guidance to fuel your body with the right nutrients for optimal health.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What is <span className="text-gradient">ErectLife</span>?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ErectLife is a comprehensive wellness platform that combines
            cutting-edge AI technology with expert guidance to help you achieve
            your health and wellness goals through a holistic approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-background/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;