import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin, Building, FileText, Ruler } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const caseStudies = [
  {
    title: "1st Enterprise Bank",
    transactionType: "Lease",
    department: "Private Banking",
    size: "14,100 square feet",
    location: "818 W. 7th Street, Los Angeles, CA",
    accomplishments:
      "Achieved client's objective of securing centrally located offices with unique style and old-world charm. Aggressive negotiations resulted in occupancy costs at 30% below initial budget.",
    reference: "John C. Black - Chief Executive Officer",
    featured: true,
  },
  {
    title: "20th Century Fox Federal Credit Union",
    transactionType: "Sublease / Relocation",
    department: "Ground Floor Retail Branch",
    size: "",
    location: "1901 Avenue of the Stars, Century City, CA",
    accomplishments:
      "Reduced client's occupancy costs by 40% while completing the time-sensitive transaction in 90 days.",
    reference: "Dan Tucker - Chief Executive Officer",
    featured: true,
  },
  {
    title: "CNN",
    transactionType: "Lease Renewal",
    department: "Los Angeles Bureau",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Negotiated favorable lease renewal terms for the Los Angeles bureau, achieving significant cost savings and operational continuity.",
    reference: "",
    featured: false,
  },
  {
    title: "Korn Ferry International",
    transactionType: "Lease",
    department: "Corporate Offices",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Secured premier office space meeting corporate standards while achieving substantial savings through aggressive lease negotiations.",
    reference: "",
    featured: false,
  },
  {
    title: "Farmers Insurance",
    transactionType: "Lease",
    department: "Regional Operations",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Identified and secured strategic regional office space that aligned with the company's operational requirements and growth plans.",
    reference: "",
    featured: false,
  },
  {
    title: "Morgan Stanley",
    transactionType: "Lease",
    department: "Branch Office",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Delivered a comprehensive market analysis and secured optimal branch office space through strategic negotiations.",
    reference: "",
    featured: false,
  },
  {
    title: "Turner Broadcasting",
    transactionType: "Lease",
    department: "West Coast Operations",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Managed the entire site selection and lease negotiation process for the west coast operations center.",
    reference: "",
    featured: false,
  },
  {
    title: "City of Los Angeles",
    transactionType: "Lease",
    department: "Government Offices",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Successfully represented the city's interests in a complex lease transaction, ensuring compliance with public procurement requirements.",
    reference: "",
    featured: false,
  },
  {
    title: "University of Phoenix",
    transactionType: "Lease",
    department: "Campus Facility",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Identified and negotiated favorable terms for a campus facility meeting the university's educational and operational needs.",
    reference: "",
    featured: false,
  },
  {
    title: "Countrywide",
    transactionType: "Lease",
    department: "Regional Offices",
    size: "",
    location: "Los Angeles, CA",
    accomplishments:
      "Managed multiple lease transactions to support the company's rapid regional expansion strategy.",
    reference: "",
    featured: false,
  },
];

const additionalClients = [
  "Time Warner", "Worldcom", "Mass Mutual", "Sedgwick", "Detert, Moran & Arnold",
  "California Pizza Kitchen", "21st Century Insurance", "Technicolor",
  "Metrocities Mortgage", "Alfred Publishing", "MCI",
];

export default function CaseStudies() {
  usePageTitle("Case Studies - Guardian Commercial Realty", "Real results for real clients. See how Guardian has helped organizations reduce costs and secure ideal commercial spaces.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-case-studies-title">
              Real Results for Real Clients
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Since 1984, Robert has completed transactions in excess of $1 billion for a broad range of clients. Below are representative examples of how Guardian delivers exceptional outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground font-serif mb-8">Featured Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {caseStudies.filter(s => s.featured).map((study, i) => (
              <Card key={i} className="border-border/50 border-l-4 border-l-primary" data-testid={`card-featured-study-${i}`}>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">{study.title}</h3>
                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm"><span className="font-medium text-foreground">Transaction Type:</span> <span className="text-muted-foreground">{study.transactionType}</span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm"><span className="font-medium text-foreground">Department:</span> <span className="text-muted-foreground">{study.department}</span></span>
                    </div>
                    {study.size && (
                      <div className="flex items-start gap-2">
                        <Ruler className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm"><span className="font-medium text-foreground">Size:</span> <span className="text-muted-foreground">{study.size}</span></span>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm"><span className="font-medium text-foreground">Location:</span> <span className="text-muted-foreground">{study.location}</span></span>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-md p-4 mb-4">
                    <p className="text-sm font-medium text-foreground mb-1">Accomplishments</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.accomplishments}</p>
                  </div>
                  {study.reference && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Reference:</span> {study.reference}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground font-serif mb-8">Additional Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {caseStudies.filter(s => !s.featured).map((study, i) => (
              <Card key={i} className="border-border/50" data-testid={`card-client-study-${i}`}>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{study.title}</h3>
                  <p className="text-xs text-primary font-medium mb-1">{study.transactionType}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.accomplishments}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-muted/20">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Additional Representative Clients</h3>
              <div className="flex flex-wrap gap-2">
                {additionalClients.map((client) => (
                  <span key={client} className="px-3 py-1.5 bg-background text-sm text-muted-foreground rounded-md border border-border/30">
                    {client}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Contact us for a confidential discussion about how Guardian can help your organization.
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
