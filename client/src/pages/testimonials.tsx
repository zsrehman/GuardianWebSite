import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote, ArrowRight, Star } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const testimonials = [
  {
    quote:
      "GuardianUSA transformed our approach to commercial real estate. Their exclusive tenant focus means we always know they have our best interests at heart. The savings they achieved exceeded our expectations.",
    author: "Robert Mitchell",
    role: "VP of Operations",
    company: "Meridian Technologies",
  },
  {
    quote:
      "The team's market knowledge and negotiation expertise saved us millions in our recent headquarters relocation. They are simply the best in the business when it comes to tenant representation.",
    author: "Sarah Chen",
    role: "Chief Financial Officer",
    company: "Atlantic Health Systems",
  },
  {
    quote:
      "Working with GuardianUSA on our multi-market portfolio consolidation was a game-changer. Their strategic approach reduced our occupancy costs by over 30% while improving our workplace quality.",
    author: "James Richardson",
    role: "Director of Real Estate",
    company: "Pacific Northwest Bancorp",
  },
  {
    quote:
      "We've worked with several brokerage firms over the years, but GuardianUSA stands apart. Their commitment to tenant-only representation eliminates any concern about divided loyalties.",
    author: "Dr. Amanda Foster",
    role: "Managing Partner",
    company: "Chesapeake Medical Associates",
  },
  {
    quote:
      "The depth of market analysis GuardianUSA provided was exceptional. They identified opportunities we never would have found on our own, resulting in a lease that positions us for growth over the next decade.",
    author: "Michael Torres",
    role: "CEO",
    company: "Velocity Consulting Group",
  },
  {
    quote:
      "From site selection to lease execution, GuardianUSA managed every detail of our expansion with professionalism and expertise. Their team made a complex process feel straightforward and manageable.",
    author: "Katherine Wells",
    role: "VP of Administration",
    company: "Capital Region University",
  },
];

export default function Testimonials() {
  usePageTitle("Testimonials - GuardianUSA", "Hear from the organizations we've had the privilege of representing.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Client Voices
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-testimonials-title">
              Testimonials
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Hear from the organizations we've had the privilege of representing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50 flex flex-col" data-testid={`card-testimonial-${i}`}>
                <CardContent className="p-6 lg:p-8 flex flex-col flex-1">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-primary/15 mb-3" />
                  <p className="text-foreground leading-relaxed mb-6 flex-1 italic text-sm">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground text-sm" data-testid={`text-testimonial-author-${i}`}>
                      {t.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-primary font-medium">{t.company}</p>
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
            Join Our Satisfied Clients
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Discover why leading organizations trust GuardianUSA for their commercial real estate needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-testimonials-cta">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
