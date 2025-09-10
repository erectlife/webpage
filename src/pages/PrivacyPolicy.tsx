import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Shield, Eye, Lock, Users, Globe, FileText, Phone, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Personal Information</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Name, email address, and contact information</li>
            <li>Account credentials and profile information</li>
            <li>Payment and billing information (processed securely by third-party processors)</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Health & Wellness Data</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Health assessments and questionnaire responses</li>
            <li>Progress tracking data and measurements</li>
            <li>Exercise and activity logs</li>
            <li>Nutrition and dietary preferences</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Technical Information</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Device information, IP address, and browser type</li>
            <li>App usage analytics and performance data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </div>
      )
    },
    {
      icon: Shield,
      title: "How We Use Your Information", 
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Service Delivery</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Provide personalized health and wellness recommendations</li>
            <li>Generate AI-powered insights and coaching</li>
            <li>Track your progress and adjust your plan accordingly</li>
            <li>Connect you with qualified health professionals when needed</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Communication</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Send you service updates and important notifications</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Share relevant health tips and educational content (with your consent)</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Improvement & Research</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Improve our AI algorithms and recommendation engine (using anonymized data)</li>
            <li>Conduct research to enhance our services (always with proper consent)</li>
            <li>Analyze usage patterns to optimize user experience</li>
          </ul>
        </div>
      )
    },
    {
      icon: Users,
      title: "Information Sharing & Disclosure",
      content: (
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground font-medium">
              <strong>We never sell your personal data.</strong> Your privacy is not for sale, and we are committed to keeping your information secure.
            </p>
          </div>
          
          <h4 className="font-semibold text-foreground">Limited Sharing</h4>
          <p className="text-muted-foreground">We may share your information only in these specific circumstances:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>With your consent:</strong> When you explicitly approve sharing with specific partners</li>
            <li><strong>Service providers:</strong> Third-party processors who help us deliver our services (under strict data agreements)</li>
            <li><strong>Health professionals:</strong> Certified experts in our network (anonymized data only, unless you request personal consultation)</li>
            <li><strong>Legal compliance:</strong> When required by law or to protect rights and safety</li>
            <li><strong>Business transfers:</strong> In case of merger or acquisition (with the same privacy protections)</li>
          </ul>
        </div>
      )
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Encryption & Storage</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>AES-256 encryption for data at rest and in transit</li>
            <li>SOC 2 certified data centers with 24/7 monitoring</li>
            <li>Regular third-party security audits and penetration testing</li>
            <li>Multi-factor authentication for all admin access</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Access Controls</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Role-based access control with least privilege principle</li>
            <li>Regular access reviews and deprovisioning procedures</li>
            <li>Employee background checks and security training</li>
            <li>Comprehensive audit logs for all data access</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Incident Response</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>24/7 security monitoring and alerting systems</li>
            <li>Established incident response procedures</li>
            <li>Immediate notification in case of any data breach</li>
            <li>Regular backup and disaster recovery testing</li>
          </ul>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Your Rights & Choices",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Data Rights (GDPR & CCPA)</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Access:</strong> Request a copy of all personal data we have about you</li>
            <li><strong>Rectification:</strong> Correct any inaccurate or incomplete information</li>
            <li><strong>Erasure:</strong> Delete your account and associated data ("right to be forgotten")</li>
            <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
            <li><strong>Restriction:</strong> Limit how we process your data</li>
            <li><strong>Objection:</strong> Opt-out of certain data processing activities</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Communication Preferences</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Unsubscribe from marketing emails at any time</li>
            <li>Control push notifications through your device settings</li>
            <li>Manage email preferences in your account settings</li>
            <li>Opt-out of analytics and tracking (may limit functionality)</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Account Management</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Update your profile and preferences at any time</li>
            <li>Download your data before account deletion</li>
            <li>Request data deletion within 30 days of account closure</li>
            <li>Contact support for any privacy-related concerns</li>
          </ul>
        </div>
      )
    },
    {
      icon: FileText,
      title: "Data Retention & Deletion",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Retention Periods</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Active accounts:</strong> Data retained while your account is active</li>
            <li><strong>Inactive accounts:</strong> Automatic deletion after 2 years of inactivity</li>
            <li><strong>Health data:</strong> Deleted within 30 days of account closure</li>
            <li><strong>Financial records:</strong> Retained for 7 years as required by law</li>
            <li><strong>Support tickets:</strong> Retained for 3 years for quality purposes</li>
          </ul>
          
          <h4 className="font-semibold text-foreground mt-6">Deletion Process</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Immediate removal from active systems upon request</li>
            <li>Secure overwriting of data storage locations</li>
            <li>Verification and confirmation of complete deletion</li>
            <li>Exceptions only for legal compliance requirements</li>
          </ul>
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your privacy and data security are our top priorities. This policy explains how we collect, 
              use, and protect your information when you use ErectLife.
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

          {/* Privacy Sections */}
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
              <span>Contact Us</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Privacy Officer</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>privacy@erectlife.com</span>
                  </div>
                  <p>Response time: Within 48 hours</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">General Support</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>hello@erectlife.com</span>
                  </div>
                  <p>Available 24/7 for urgent privacy concerns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;