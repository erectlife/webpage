import { Shield, Lock, Eye, UserCheck, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const PrivacySection = () => {
  const privacyPillars = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Your data is encrypted at rest and in transit using AES-256 encryption standards."
    },
    {
      icon: Eye,
      title: "No Data Selling",
      description: "We never sell your personal information to third parties. Your privacy is not for sale."
    },
    {
      icon: UserCheck,
      title: "HIPAA Compliant",
      description: "All health data handling meets strict HIPAA compliance standards for maximum protection."
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Data stored in SOC 2 certified infrastructure with regular security audits."
    },
    {
      icon: Globe,
      title: "GDPR Ready",
      description: "Full compliance with European data protection regulations and user rights."
    },
    {
      icon: Heart,
      title: "Your Control",
      description: "You own your data. Export or delete your information anytime, no questions asked."
    }
  ];

  const faqs = [
    {
      question: "How do you protect my sensitive health data?",
      answer: "All your health information is encrypted using military-grade AES-256 encryption, both when stored on our servers and when transmitted. We follow HIPAA compliance standards and undergo regular third-party security audits."
    },
    {
      question: "Do you share my data with anyone?",
      answer: "No, we never sell or share your personal data with third parties for marketing purposes. Health professionals on our platform only see anonymized data necessary for providing your personalized recommendations."
    },
    {
      question: "Can I delete my account and data?",
      answer: "Absolutely. You can delete your account and all associated data at any time through your account settings. All data will be permanently removed within 30 days, except where required by law for record-keeping."
    },
    {
      question: "Where is my data stored?",
      answer: "Your data is stored in SOC 2 certified data centers with enterprise-grade security measures. All servers are located in jurisdictions with strong privacy laws and are never moved without your consent."
    },
    {
      question: "How do you handle AI processing of my data?",
      answer: "Our AI processes your data in secure, isolated environments. No personal information is used to train our models, and all AI processing happens on encrypted data with strict access controls."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="privacy" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container mx-auto container-padding">
        {/* Header with Background Image */}
        <div className="relative mb-16 animate-fade-in">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl opacity-10"
            style={{ backgroundImage: "url('/src/assets/consulting.jpg')" }}
          ></div>
          <div className="relative text-center py-12 px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Privacy <span className="text-gradient">Comes First</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe your health data should remain yours. Built with privacy-by-design 
              principles and enterprise-grade security measures.
            </p>
          </div>
        </div>

        {/* Privacy Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {privacyPillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-8 bg-background rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">SOC 2</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">HIPAA</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">GDPR</div>
              <div className="text-xs text-muted-foreground">Ready</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">AES-256</div>
              <div className="text-xs text-muted-foreground">Encrypted</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Privacy <span className="text-gradient">Questions</span>
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border border-border rounded-lg px-6 bg-background shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Want to Learn More?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Read our detailed privacy policy and terms of service to understand 
              exactly how we protect and handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/terms">Terms of Service</Link>
              </Button>
              <Button 
                onClick={() => scrollToSection("questionnaire")}
                className="hero-gradient text-white font-semibold hover:opacity-90 transition-opacity duration-200 w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;