import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Shield,
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const competencies = [
  "Exclusive tenant and buyer representation",
  "Multi-market transaction management",
  "Lease negotiation and restructuring",
  "Portfolio optimization and strategy",
  "Financial analysis and modeling",
  "Market research and intelligence",
  "Construction and project management oversight",
  "Workplace strategy and space planning",
];

export default function About() {
  usePageTitle("About Us - GuardianUSA", "Learn about GuardianUSA's mission, vision, and commitment to exclusive tenant representation.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-about-title">
              Your Trusted Partner in Commercial Real Estate
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              GuardianUSA was founded on a simple but powerful principle: tenants deserve dedicated, conflict-free representation in their commercial real estate transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif mb-4">Company Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GuardianUSA is a commercial real estate advisory firm that exclusively represents tenants and buyers. Unlike traditional brokerage firms that represent both landlords and tenants, we have eliminated all conflicts of interest by choosing to advocate solely for the occupier.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of experienced professionals brings decades of combined expertise across diverse property types and markets. We serve corporations, government agencies, healthcare organizations, law firms, and non-profit institutions throughout the United States.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By focusing exclusively on the tenant's perspective, we provide unbiased counsel, deeper market insight, and stronger negotiation outcomes. Our clients consistently achieve below-market lease terms, significant cost savings, and real estate strategies that align with their long-term business objectives.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50" data-testid="card-mission">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-serif">Our Mission</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To provide tenants and buyers with unparalleled real estate advisory services, free from conflicts of interest, ensuring every transaction reflects the client's best interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50" data-testid="card-vision">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-serif">Our Vision</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be the most trusted name in tenant representation, recognized nationally for our integrity, expertise, and the measurable value we deliver to every client.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif mb-4">Core Competencies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our capabilities span the full spectrum of tenant advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {competencies.map((c, i) => (
              <div key={i} className="flex items-center gap-3" data-testid={`text-competency-${i}`}>
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif mb-4">Leadership</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our leadership team brings decades of commercial real estate experience.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-border/50" data-testid="card-leadership">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-serif mb-1">John W. Hamilton</h3>
                <p className="text-sm text-primary font-medium mb-3">Founder & Managing Principal</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With over 25 years of experience in commercial real estate, John founded GuardianUSA with the vision of creating a firm dedicated exclusively to tenant advocacy. He has represented clients in transactions totaling over $2 billion in value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 text-primary-foreground/30 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4">
            Experience the GuardianUSA Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Discover why organizations across the country choose GuardianUSA as their exclusive tenant representative.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-about-cta">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
