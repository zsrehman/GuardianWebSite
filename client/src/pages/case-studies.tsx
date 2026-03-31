import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Lock } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

export default function CaseStudies() {
  usePageTitle("Case Studies - Guardian Commercial Realty", "Our case studies are available upon request. Contact us to receive examples relevant to your industry.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-case-studies-title">
              Case Studies
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
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif mb-6" data-testid="text-case-studies-available">
            Our case studies are available upon request.
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-base lg:text-lg">
            <p>
              Due to the confidential nature of our work and our commitment to client privacy, we do not publicly display detailed case studies. However, we are happy to share relevant examples aligned with your industry and specific requirements.
            </p>
            <p>
              Please contact us to request case studies.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="text-base" data-testid="button-case-studies-contact">
                Contact Us to Request Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
