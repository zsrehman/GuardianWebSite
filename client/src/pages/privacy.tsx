import Layout from "@/components/layout";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Privacy() {
  usePageTitle("Privacy Policy - GuardianUSA", "GuardianUSA privacy policy and data protection information.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-privacy-title">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Last updated: January 1, {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-foreground font-serif mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GuardianUSA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1.5 mb-6">
              <li>Fill out a contact form on our website</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Communicate with us via email, phone, or other means</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This information may include your name, email address, phone number, company name, and any other details you choose to provide.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1.5 mb-6">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you relevant information about our services</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">7. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">8. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl font-bold text-foreground font-serif mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              GuardianUSA<br />
              1200 Corporate Drive, Suite 400<br />
              Arlington, VA 22202<br />
              Email: privacy@guardianusa.com<br />
              Phone: (703) 555-0180
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
