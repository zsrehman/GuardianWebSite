import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ClipboardList,
  FileSearch,
  ShieldCheck,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const services = [
  {
    icon: ClipboardList,
    title: "Strategic Planning",
    description:
      "We develop a comprehensive strategic plan tailored to your specific needs, timeline, and objectives.",
    bullets: [
      "Project Charter",
      "Needs Assessment",
      "Budget Development",
      "Cost & Risk Reduction",
      "Critical Dates",
      "Client Approval",
    ],
  },
  {
    icon: FileSearch,
    title: "Transaction Services",
    description:
      "Our transaction team manages every detail of your real estate search and lease process from start to finish.",
    bullets: [
      "Lease Abstract / Assessments",
      "Space Programming / Projections",
      "Employee & Customer Scattergrams",
      "Demographic Research",
      "Market Survey & Site Selection",
      "Virtual Tours",
      "Building & Premises Evaluations",
      "Site Comparison Summaries",
    ],
  },
  {
    icon: Handshake,
    title: "Business Point Negotiations",
    description:
      "Our experienced negotiators work aggressively to secure the most favorable terms on your behalf.",
    bullets: [
      "Financial Analysis",
      "Municipal Incentives",
      "Weekly Status Reports",
      "Design & Construction Management",
      "Move Coordination",
      "Disposition Strategy & Implementation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protective Services",
    description:
      "We protect your interests throughout the lease term with ongoing monitoring and administration.",
    bullets: [
      "Letter of Intent",
      "Lease Review & Negotiations",
      "Operating Expense Audits",
      "Document Tracking & Administration",
    ],
  },
];

export default function Services() {
  usePageTitle("Services - Guardian Commercial Realty", "Understanding your needs and protecting your interests with comprehensive commercial real estate services.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-services-title">
              Understanding Your Needs - Protecting Your Interests
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Guardian works with you to develop and implement a specifically tailored strategic plan. Guardian's process is based upon your company's objectives, acceptable risk tolerances, and relieves you of significant responsibility and burden. Our comprehensive due diligence transforms challenge into opportunity and ensures prompt attention to your needs. This translates into significant savings of time and expense.
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
