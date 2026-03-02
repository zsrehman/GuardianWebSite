import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Maximize, ArrowRight, TrendingUp } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const caseStudies = [
  {
    title: "Federal Agency Headquarters Relocation",
    location: "Washington, D.C.",
    size: "285,000 SF",
    category: "Government",
    summary:
      "Represented a major federal agency in relocating their headquarters from outdated facilities to a modern, energy-efficient building in the heart of the nation's capital.",
    result: "Achieved 22% cost savings through strategic lease restructuring and a competitive bidding process among five Class A properties.",
    highlights: ["22% cost reduction", "LEED Gold certified", "15-year term"],
  },
  {
    title: "Fortune 500 Portfolio Consolidation",
    location: "Multiple U.S. Markets",
    size: "1.2M SF across 14 locations",
    category: "Corporate",
    summary:
      "Managed a multi-year portfolio consolidation strategy for a Fortune 500 technology company, reducing their national footprint while enhancing workplace quality.",
    result: "Consolidated 14 locations into 8 strategic hubs, reducing annual occupancy costs by $4.2M while improving employee experience.",
    highlights: ["$4.2M annual savings", "43% space reduction", "Zero disruption"],
  },
  {
    title: "Healthcare Network Expansion",
    location: "Mid-Atlantic Region",
    size: "180,000 SF across 6 facilities",
    category: "Healthcare",
    summary:
      "Guided a regional healthcare network through the strategic expansion of their outpatient facility network, securing locations in high-growth suburban markets.",
    result: "Secured six new clinic locations at below-market rates with favorable build-out allowances, positioning the network for 30% patient volume growth.",
    highlights: ["6 new locations", "Below-market rents", "30% growth capacity"],
  },
  {
    title: "Law Firm Relocation & Lease Restructuring",
    location: "New York, NY",
    size: "95,000 SF",
    category: "Legal",
    summary:
      "Represented a prominent law firm in renegotiating their expiring lease and evaluating relocation options in Manhattan's competitive legal corridor.",
    result: "Negotiated a 10-year renewal with $8.5M in concession value, including a complete renovation package and 18 months of free rent.",
    highlights: ["$8.5M concessions", "Full renovation", "18 months free rent"],
  },
];

export default function CaseStudies() {
  usePageTitle("Case Studies - GuardianUSA", "Real results for real clients across diverse industries and markets.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-case-studies-title">
              Case Studies
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Explore how we've delivered measurable results for our clients across diverse industries and markets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, i) => (
              <Card key={i} className="border-border/50 flex flex-col" data-testid={`card-case-study-${i}`}>
                <CardContent className="p-6 lg:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-serif mb-3" data-testid={`text-case-study-title-${i}`}>
                    {study.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="h-3.5 w-3.5" />
                      {study.size}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {study.summary}
                  </p>

                  <div className="bg-muted/50 rounded-md p-4 mb-5">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-foreground font-medium">{study.result}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap mt-auto">
                    {study.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium bg-primary/5 text-primary border border-primary/10 px-2.5 py-1 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
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
            Your Success Story Starts Here
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Let us show you what exclusive tenant representation can do for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-case-studies-cta">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
