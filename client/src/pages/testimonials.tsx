import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Lock } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Testimonials() {
  usePageTitle("Testimonials - Guardian Commercial Realty", "Client testimonials are available upon request. Contact us to receive references and client feedback.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-testimonials-title">
              Testimonials
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-7 w-7 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif mb-6" data-testid="text-testimonials-available">
            Client testimonials are available upon request.
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-base lg:text-lg">
            <p>
              To respect the privacy and confidentiality of our clients, testimonials are not displayed publicly. We can provide references and client feedback upon request.
            </p>
            <p>
              Please get in touch with us to receive client references.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="text-base" data-testid="button-testimonials-contact">
                Get in Touch for Client References
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
