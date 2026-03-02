import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote, ArrowRight } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const testimonials = [
  {
    name: "John C. Black",
    title: "Chief Executive Officer",
    company: "1st Enterprise Bank",
    date: "February 2006",
    quote: `I first met Robert Chavez through a referral from a business associate in September of 2005. After an initial telephone conversation we agreed to interview Robert to potentially engaging him to represent us as our commercial real estate broker. Robert arrived at the meeting professionally prepared. His detailed knowledge of the market was impressive, as was his background, experience and qualifications. Shortly after that initial meeting I engaged his services to assist us in leasing approximately 14,000 sq. ft. of office space in downtown Los Angeles.`,
    additionalQuotes: [
      `Robert's initial due diligence included a presentation of over sixty buildings for my review. He and I personally inspected over twenty five locations, narrowed the field to twelve, and ultimately presented proposals to six. Throughout this process Robert provided significant technical expertise in terms of market evaluation, economic and suitability factors. He took the time to understand our business model and our specific needs, and actively assisted in guiding me to the most appropriate buildings that would meet our requirements.`,
      `Upon selecting a specific property and entering into a letter of intent, Robert remained actively engaged throughout lengthy lease negotiations with the landlord. Right up to the point of execution he assisted our attorney and me with detailed reviews of multiple lease drafts. Robert was instrumental in reducing our risk, obtaining very favorable lease terms and securing significant concessions from the landlord.`,
      `I was very impressed with Robert's professional style, market knowledge and attention to detail. Robert's tenacity and willingness to relentlessly "stick with the fight" ultimately reduced our pro forma real estate overhead by more than 30% over the next ten years. I plan on using him in the future as our business grows, and would highly recommend him to others seeking commercial office space for their business.`,
    ],
  },
  {
    name: "Dan Tucker",
    title: "Chief Executive Officer",
    company: "20th Century Fox Federal Credit Union",
    date: "",
    quote: "Guardian's expertise was invaluable during our relocation process. Robert's ability to identify a sublease opportunity reduced our occupancy costs by 40% while completing the time-sensitive transaction in just 90 days. His proactive approach and deep market knowledge made all the difference.",
    additionalQuotes: [],
  },
];

export default function Testimonials() {
  usePageTitle("Testimonials - Guardian Commercial Realty", "Hear from Guardian Commercial Realty's clients about their experience with our tenant representation services.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-testimonials-title">
              What Our Clients Say
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our clients' success is our success. Here is what they have to say about working with Guardian Commercial Realty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="border-border/50" data-testid={`card-testimonial-${i}`}>
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Quote className="h-10 w-10 text-primary/20 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{testimonial.company}</h3>
                      {testimonial.date && (
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    {testimonial.additionalQuotes.map((q, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed italic">
                        "{q}"
                      </p>
                    ))}
                  </div>

                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
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
            Experience the Guardian Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Join the many organizations that trust Guardian to protect their interests and deliver results.
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
