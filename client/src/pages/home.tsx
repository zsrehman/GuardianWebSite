import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ClipboardList,
  FileSearch,
  ShieldCheck,
  Handshake,
  BarChart3,
  ArrowRight,
  Quote,
  ChevronRight,
  Award,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const services = [
  {
    icon: ClipboardList,
    title: "Strategic Planning",
    description:
      "Project charter, needs assessment, budget development, cost and risk reduction, critical dates, and client approval.",
  },
  {
    icon: FileSearch,
    title: "Transaction Services",
    description:
      "Lease abstracts, space programming, employee and customer scattergrams, demographic research, market surveys and site selection.",
  },
  {
    icon: ShieldCheck,
    title: "Protective Services",
    description:
      "Letter of intent, lease review and negotiations, operating expense audits, document tracking and administration.",
  },
  {
    icon: Handshake,
    title: "Business Point Negotiations",
    description:
      "Financial analysis, municipal incentives, weekly status reports, design and construction management.",
  },
  {
    icon: BarChart3,
    title: "Financial Analysis",
    description:
      "Comprehensive financial modeling, disposition strategy and implementation, move coordination, and virtual tours.",
  },
];

const caseStudies = [
  {
    title: "1st Enterprise Bank",
    type: "Lease",
    department: "Private Banking",
    size: "14,100 Square Feet",
    location: "818 W. 7th Street, Los Angeles, CA",
    result: "Achieved client's objective of securing centrally located offices with unique style and old-world charm. Aggressive negotiations resulted in occupancy costs at 30% below initial budget.",
    reference: "John C. Black - Chief Executive Officer",
  },
  {
    title: "20th Century Fox Federal Credit Union",
    type: "Sublease / Relocation",
    department: "Ground Floor Retail Branch",
    size: "",
    location: "1901 Avenue of the Stars, Century City, CA",
    result: "Reduced client's occupancy costs by 40% while completing the time-sensitive transaction in 90 days.",
    reference: "Dan Tucker - Chief Executive Officer",
  },
];

const clientLogos = [
  "Bank of America", "CNN", "City of Los Angeles", "Morgan Stanley",
  "Korn Ferry International", "Farmers Insurance", "Turner Broadcasting",
  "Countrywide", "MCI", "Alfred Publishing",
];

export default function Home() {
  usePageTitle(
    "Guardian Commercial Realty - The Tenant's Advocate",
    "Guardian Commercial Realty exclusively represents tenants and buyers in commercial real estate transactions."
  );

  return (
    <Layout>
      <section className="relative bg-primary overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-cityscape.jpg"
            alt="City skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.25em] mb-4" data-testid="text-hero-subtitle">
                Commitment
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight font-serif mb-6" data-testid="text-hero-title">
                The Tenant's Advocate
              </h1>
              <blockquote className="border-l-2 border-primary-foreground/30 pl-5 mb-8">
                <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed italic" data-testid="text-hero-description">
                  "We are never conflicted or distracted from what I founded Guardian to do --- aggressively achieve the objectives of those seeking to lease or purchase commercial property for their use."
                </p>
                <footer className="mt-4">
                  <p className="text-primary-foreground/80 font-semibold">Robert Chavez</p>
                  <p className="text-primary-foreground/60 text-sm">President and CEO</p>
                </footer>
              </blockquote>
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
            <div className="hidden lg:block">
              <img
                src="/images/robert-chavez-new.jpg"
                alt="Robert F. Chavez - President and CEO"
                className="rounded-lg max-h-[420px] object-cover object-top mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Certified Minority Business Enterprise (MBE)</span> - Southern California Minority Business Development Council
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Understanding Your Needs - Protecting Your Interests</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Guardian works with you to develop and implement a specifically tailored strategic plan based upon your company's objectives, acceptable risk tolerances, and relieves you of significant responsibility and burden.
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, i) => (
              <Card key={i} className="border-border/50" data-testid={`card-case-study-${i}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3 flex-wrap">
                    <span className="bg-primary/10 px-2.5 py-1 rounded-md">{study.type}</span>
                    <span className="bg-primary/10 px-2.5 py-1 rounded-md">{study.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{study.title}</h3>
                  {study.department && (
                    <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Department:</span> {study.department}</p>
                  )}
                  {study.size && (
                    <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Size:</span> {study.size}</p>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3"><span className="font-medium">Accomplishments:</span> {study.result}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-medium">Reference:</span> {study.reference}</p>
                  <div className="mt-4">
                    <Link href="/case-studies" className="text-sm font-medium text-primary inline-flex items-center gap-1 no-underline" data-testid={`link-case-study-${i}`}>
                      View All Case Studies
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background" data-testid="section-clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Trusted By</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif">
              Our Clients
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clientLogos.map((name) => (
              <div key={name} className="px-5 py-3 bg-muted/50 rounded-md border border-border/30">
                <span className="text-sm font-medium text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/50" data-testid="card-testimonial-featured">
              <CardContent className="p-8 lg:p-12">
                <Quote className="h-10 w-10 text-primary/20 mb-6" />
                <p className="text-foreground leading-relaxed mb-6 italic text-lg">
                  "I was very impressed with Robert's professional style, market knowledge and attention to detail. Robert's tenacity and willingness to relentlessly 'stick with the fight' ultimately reduced our pro forma real estate overhead by more than 30% over the next ten years. I plan on using him in the future as our business grows, and would highly recommend him to others seeking commercial office space for their business."
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">John C. Black</p>
                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                  <p className="text-sm text-primary font-medium">1st Enterprise Bank</p>
                </div>
              </CardContent>
            </Card>
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

      <section className="py-16 lg:py-24 bg-primary" data-testid="section-guaranty">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-12 w-12 text-primary-foreground/30 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4">
            Our Guaranty
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-4">
            Guardian safeguards against any conflicts of interest by guaranteeing that we will not represent more than one client with a similarly situated requirement in the same target market.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed mb-8">
            Moreover, if a client is not reasonably satisfied with our services, the client may, at its sole and absolute discretion, access all or part of our fee.
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
