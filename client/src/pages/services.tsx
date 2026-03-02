import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Building2,
  BarChart3,
  Handshake,
  Search,
  Target,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const services = [
  {
    icon: Building2,
    title: "Tenant Representation",
    description:
      "As your exclusive advocate, we represent only tenants — never landlords. This eliminates conflicts of interest and ensures our advice is always aligned with your goals.",
    bullets: [
      "Lease negotiation and renewal strategy",
      "New office, industrial, and retail space acquisition",
      "Sublease disposition and restructuring",
      "Build-to-suit project representation",
      "Lease audit and compliance review",
    ],
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "We develop long-term real estate strategies that align with your business objectives, growth plans, and financial targets.",
    bullets: [
      "Occupancy cost analysis and benchmarking",
      "Space utilization and workplace strategy",
      "Market timing and opportunity assessment",
      "Lease portfolio optimization",
      "Capital planning and budgeting support",
    ],
  },
  {
    icon: Briefcase,
    title: "Portfolio Services",
    description:
      "For organizations with multiple locations, we provide centralized portfolio management to maximize efficiency and minimize costs across all your real estate holdings.",
    bullets: [
      "Multi-market lease administration",
      "Critical date management and tracking",
      "Portfolio performance reporting",
      "Consolidation and expansion planning",
      "Risk assessment and mitigation",
    ],
  },
  {
    icon: Handshake,
    title: "Transaction Services",
    description:
      "We manage every aspect of your real estate transactions, from initial requirements gathering through lease execution and post-occupancy support.",
    bullets: [
      "Requirements analysis and space programming",
      "Site selection and market surveys",
      "Financial analysis and comparison modeling",
      "Lease document review and negotiation",
      "Construction and move management coordination",
    ],
  },
  {
    icon: Search,
    title: "Market Analysis",
    description:
      "Our research team provides comprehensive market intelligence to ensure you make informed decisions backed by current data.",
    bullets: [
      "Competitive market surveys and rent comparables",
      "Submarket trend analysis and forecasting",
      "Demographic and labor market studies",
      "Supply and demand modeling",
      "Investment and disposition analysis",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "We provide sophisticated financial analysis to help you understand the total cost of occupancy and identify opportunities for savings.",
    bullets: [
      "Net present value and IRR analysis",
      "Lease vs. buy evaluation",
      "Operating expense audit and review",
      "Tax incentive and abatement research",
      "Capital improvement funding strategies",
    ],
  },
];

export default function Services() {
  usePageTitle("Services - GuardianUSA", "Comprehensive tenant representation and commercial real estate advisory services.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-services-title">
              How We Serve You
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              GuardianUSA offers a comprehensive suite of commercial real estate advisory services, all designed with one principle: protecting and advancing the tenant's interests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <Card key={i} className="border-border/50" data-testid={`card-service-detail-${i}`}>
                <CardContent className="p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="lg:w-1/2">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground font-serif mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:w-1/2">
                      <ul className="space-y-3">
                        {service.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4">
            Let's Discuss Your Needs
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Every client's situation is unique. Contact us for a confidential consultation to explore how our services can benefit your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-services-cta">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
