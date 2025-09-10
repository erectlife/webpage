import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import PrivacySection from "@/components/PrivacySection";
import QuestionnaireSection from "@/components/QuestionnaireSection";
import Acknowledgements from "@/components/Acknowledgements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>
        <HowItWorks />
        <section id="questionnaire" className="scroll-mt-20">
          <QuestionnaireSection />
        </section>
        <PrivacySection />
        <Acknowledgements />
      </main>
      <Footer />
    </div>
  );
};

export default Index;