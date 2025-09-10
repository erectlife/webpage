import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Zap } from "lucide-react";

const Acknowledgements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Rio Conference",
      subtitle: "Health Innovation Award 2024",
      description:
        "Recognized for breakthrough AI-powered wellness solutions at the International Health Technology Conference in Rio de Janeiro.",
      color: "from-accent to-secondary",
      logo: "/src/assets/wmsm-rio.jpg", // Conference photo
      logoAlt: "WMSM Rio Conference 2024"
    },
    {
      icon: Award,
      title: "EIT Health",
      subtitle: "Digital Health Accelerator", 
      description:
        "Selected as a top startup in EIT Health's prestigious accelerator program, focusing on digital health innovations across Europe.",
      color: "from-secondary to-primary",
      logo: "/src/assets/eit-health-logo.png",
      logoAlt: "EIT Health Logo"
    },
    {
      icon: Zap,
      title: "Labena Ventures",
      subtitle: "Wellness Innovation Hub",
      description:
        "Graduated from leading tech accelerator program, receiving mentorship and funding to scale our wellness platform globally.",
      color: "from-primary to-accent",
      logo: "/src/assets/labena-ventures-logo.png",
      logoAlt: "Labena Ventures Logo"
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recognized <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to innovation and excellence in digital wellness has
            been recognized by leading organizations and accelerators worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-background animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  {achievement.logo ? (
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg border border-border/20">
                      <img
                        src={achievement.logo}
                        alt={achievement.logoAlt}
                        className="w-12 h-12 object-contain rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <h4 className="text-lg font-semibold text-secondary mb-4">
                  {achievement.subtitle}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center space-x-6 bg-background px-8 py-4 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Users Helped</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgements;