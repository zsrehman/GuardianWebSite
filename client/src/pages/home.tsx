import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  BarChart3,
  Handshake,
  Search,
  FileText,
  ArrowRight,
  Quote,
  ChevronRight,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const services = [
  {
    icon: Building2,
    title: "Tenant Representation",
    description:
      "Exclusive advocacy for tenants in lease negotiations, renewals, and relocations. We never represent landlords.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Strategy",
    description:
      "Comprehensive analysis and strategic planning to optimize your real estate portfolio and reduce occupancy costs.",
  },
  {
    icon: Handshake,
    title: "Transaction Services",
    description:
      "End-to-end transaction management from site selection through lease execution, ensuring favorable terms.",
  },
  {
    icon: Search,
    title: "Market Analysis",
    description:
      "In-depth market research and competitive analysis to identify opportunities and inform your real estate decisions.",
  },
  {
    icon: FileText,
    title: "Negotiation Support",
    description:
      "Expert negotiation strategies backed by market data, ensuring you secure the best possible lease terms.",
  },
];

const caseStudies = [
  {
    title: "Federal Agency Headquarters Relocation",
    location: "Washington, D.C.",
    size: "285,000 SF",
    result: "Achieved 22% cost savings through strategic lease restructuring and competitive bidding process.",
  },
  {
    title: "Fortune 500 Portfolio Consolidation",
    location: "Multiple U.S. Markets",
    size: "1.2M SF across 14 locations",
    result: "Consolidated 14 locations into 8 strategic hubs, reducing annual occupancy costs by $4.2M.",
  },
];

const testimonials = [
  {
    quote:
      "GuardianUSA transformed our approach to commercial real estate. Their exclusive tenant focus means we always know they have our best interests at heart.",
    author: "Robert Mitchell",
    role: "VP of Operations, Meridian Technologies",
  },
  {
    quote:
      "The team's market knowledge and negotiation expertise saved us millions in our recent headquarters relocation. They are simply the best in the business.",
    author: "Sarah Chen",
    role: "CFO, Atlantic Health Systems",
  },
];

export default function Home() {
  usePageTitle(
    "GuardianUSA - The Tenant's Advocate | Commercial Real Estate Advisory",
    "GuardianUSA exclusively represents tenants and buyers in commercial real estate transactions."
  );

  return (
    <Layout>
      <section className="relative bg-primary overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-4" data-testid="text-hero-subtitle">
              Commercial Real Estate Advisory
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight font-serif mb-6" data-testid="text-hero-title">
              The Tenant's Advocate
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl" data-testid="text-hero-description">
              GuardianUSA exclusively represents tenants and buyers in commercial real estate transactions. We provide strategic advisory services that protect your interests and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-base" data-testid="button-hero-contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground bg-transparent" data-testid="button-hero-services">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              Comprehensive Tenant Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From initial market analysis to lease execution, we provide end-to-end advisory services designed exclusively for tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group border-border/50" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" data-testid="button-view-all-services">
                View All Services
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Results</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              Featured Case Studies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Real results for real clients. See how our strategic approach delivers measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, i) => (
              <Card key={i} className="border-border/50" data-testid={`card-case-study-${i}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                    <span className="bg-primary/10 px-2.5 py-1 rounded-md">{study.location}</span>
                    <span className="bg-primary/10 px-2.5 py-1 rounded-md">{study.size}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{study.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.result}</p>
                  <Link href="/case-studies" className="text-sm font-medium text-primary inline-flex items-center gap-1 no-underline" data-testid={`link-case-study-${i}`}>
                    Read Full Case Study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Testimonials</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50" data-testid={`card-testimonial-${i}`}>
                <CardContent className="p-6 lg:p-8">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials">
              <Button variant="outline" data-testid="button-view-testimonials">
                Read More Testimonials
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary" data-testid="section-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Let us put our expertise to work for you. Schedule a confidential consultation to discuss your commercial real estate needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-cta-contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
