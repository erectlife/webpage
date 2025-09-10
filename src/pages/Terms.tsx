import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, UserCheck, Shield, Gavel, Phone, Mail } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: UserCheck,
      title: "Acceptance of Terms",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            By accessing or using ErectLife ("the Service"), you agree to be bound by these Terms of Service 
            ("Terms"). If you disagree with any part of these terms, you may not access the Service.
          </p>
          
          <h4 className="font-semibold text-foreground">Key Points</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>You must be at least 18 years old to use our services</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You agree to provide accurate and complete information</li>
            <li>These terms may be updated periodically with notice to users</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground font-medium">
              <strong>Important:</strong> ErectLife is a wellness platform that provides educational content 
              and personalized recommendations. It is not a substitute for professional medical advice, 
              diagnosis, or treatment.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: FileText,
      title: "Description of Service",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">What We Provide</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>AI-powered health and wellness assessments</li>
            <li>Personalized exercise, nutrition, and lifestyle recommendations</li>
            <li>Progress tracking and analytics tools</li>
            <li>Access to certified health professionals (premium plans)</li>
            <li>Educational content and resources</li>
            <li>Community features and peer support</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Service Limitations</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Our recommendations are general in nature and not medical advice</li>
            <li>Results may vary based on individual circumstances</li>
            <li>Service availability may be subject to maintenance and updates</li>
            <li>Some features require premium subscription for full access</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Your Responsibilities</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Consult healthcare providers before starting new exercise programs</li>
            <li>Provide accurate information for personalized recommendations</li>
            <li>Use the service responsibly and in accordance with these terms</li>
            <li>Report any technical issues or concerns promptly</li>
          </ul>
        </div>
      )
    },
    {
      icon: CreditCard,
      title: "Billing & Subscriptions",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Subscription Plans</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Free Plan:</strong> Basic features with limited access</li>
            <li><strong>Premium Plan:</strong> Full feature access with expert consultations</li>
            <li><strong>Family Plan:</strong> Multiple accounts with shared benefits</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Payment Terms</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Subscriptions are billed monthly or annually in advance</li>
            <li>All prices are in USD unless otherwise specified</li>
            <li>Payment is processed securely through third-party providers</li>
            <li>Failed payments may result in service suspension</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Cancellation & Refunds</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Cancel your subscription anytime through account settings</li>
            <li>Cancellation takes effect at the end of your current billing period</li>
            <li>30-day money-back guarantee for new subscribers</li>
            <li>Refunds for unused portions are provided at our discretion</li>
            <li>Free trial automatically converts to paid plan unless cancelled</li>
          </ul>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-sm text-amber-800 font-medium">Trial Period</p>
                <p className="text-sm text-amber-700">
                  Your free trial will automatically convert to a paid subscription unless you cancel 
                  before the trial period ends. You'll receive reminder emails before billing.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Scale,
      title: "User Conduct & Prohibited Uses",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Acceptable Use</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use the service for personal, non-commercial purposes</li>
            <li>Provide accurate information in assessments and profiles</li>
            <li>Respect other users in community features</li>
            <li>Follow all applicable laws and regulations</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Prohibited Activities</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Sharing your account credentials with others</li>
            <li>Reverse engineering or attempting to access source code</li>
            <li>Using automated tools to access or scrape the service</li>
            <li>Uploading malicious content or attempting to harm our systems</li>
            <li>Impersonating other users or providing false information</li>
            <li>Using the service for illegal or harmful activities</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Consequences</h4>
          <p className="text-muted-foreground">
            Violation of these terms may result in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Warning and request to modify behavior</li>
            <li>Temporary suspension of account access</li>
            <li>Permanent termination of account</li>
            <li>Legal action in cases of serious violations</li>
          </ul>
        </div>
      )
    },
    {
      icon: Shield,
      title: "Privacy & Data Protection",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Your privacy is important to us. This section summarizes key privacy points, 
            but please review our complete <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for full details.
          </p>
          
          <h4 className="font-semibold text-foreground">Data Collection</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>We collect information you provide and usage data</li>
            <li>Health data is encrypted and stored securely</li>
            <li>We never sell your personal information</li>
            <li>Data is used to improve your experience and our services</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Your Rights</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Access and download your data anytime</li>
            <li>Request correction of inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of non-essential communications</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Data Security</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Enterprise-grade encryption and security measures</li>
            <li>Regular security audits and compliance checks</li>
            <li>HIPAA-compliant handling of health information</li>
            <li>Immediate notification of any security incidents</li>
          </ul>
        </div>
      )
    },
    {
      icon: AlertTriangle,
      title: "Medical Disclaimer",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm text-red-800 font-medium">Important Medical Disclaimer</p>
                <p className="text-sm text-red-700">
                  ErectLife is not a medical device or service. Always consult qualified healthcare 
                  professionals for medical advice, diagnosis, or treatment.
                </p>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-foreground">Not Medical Advice</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Our recommendations are for educational and informational purposes only</li>
            <li>Content is not intended to diagnose, treat, cure, or prevent any disease</li>
            <li>Individual results may vary and are not guaranteed</li>
            <li>Always consult your doctor before starting new exercise or nutrition programs</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Health Professional Network</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Our health professionals are licensed and certified</li>
            <li>Consultations are supplementary to your primary healthcare</li>
            <li>Emergency medical conditions require immediate professional care</li>
            <li>We facilitate connections but don't provide direct medical treatment</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Your Responsibility</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use our service responsibly and within your physical capabilities</li>
            <li>Stop any activity that causes pain or discomfort</li>
            <li>Inform your healthcare providers about your use of our service</li>
            <li>Seek immediate medical attention for any health emergencies</li>
          </ul>
        </div>
      )
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Service Warranty</h4>
          <p className="text-muted-foreground">
            ErectLife is provided "as is" without warranties of any kind, either express or implied. 
            We strive to provide accurate and helpful information, but cannot guarantee specific results.
          </p>
          
          <h4 className="font-semibold text-foreground mt-6">Limitation of Damages</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Our liability is limited to the amount you paid for the service</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>This includes damages for loss of profits, data, or other intangible losses</li>
            <li>Some jurisdictions don't allow these limitations, so they may not apply to you</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Indemnification</h4>
          <p className="text-muted-foreground">
            You agree to indemnify and hold harmless ErectLife and its affiliates from any claims, 
            damages, or expenses arising from your use of the service or violation of these terms.
          </p>
          
          <h4 className="font-semibold text-foreground mt-6">Force Majeure</h4>
          <p className="text-muted-foreground">
            We are not liable for any failure to perform due to circumstances beyond our reasonable 
            control, including natural disasters, government actions, or network failures.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 mb-8">
            <Button asChild variant="secondary" size="sm">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              These terms govern your use of ErectLife and outline the rights and responsibilities 
              of both you and our service.
            </p>
            <div className="mt-6 text-sm text-white/80">
              <p><strong>Effective Date:</strong> January 1, 2024</p>
              <p><strong>Last Updated:</strong> January 1, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-muted/30 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted/50"
                >
                  <section.icon className="h-4 w-4" />
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
              <Phone className="h-6 w-6 text-primary" />
              <span>Questions About These Terms?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service or need clarification 
              on any points, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Legal Department</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>legal@erectlife.com</span>
                  </div>
                  <p>For terms and legal inquiries</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">General Support</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>hello@erectlife.com</span>
                  </div>
                  <p>For general questions and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;