import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  ShieldCheck,
  ArrowRight,
  Users,
  Briefcase,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

export default function About() {
  usePageTitle("About - Guardian Commercial Realty", "Learn about Guardian Commercial Realty, founded by Robert F. Chavez to exclusively represent tenants and buyers.");

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Company Profile
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-about-title">
              About Guardian
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Guardian Commercial Realty is a leading commercial realty advisory firm that exclusively represents the interests of commercial office and industrial tenants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground font-serif mb-6">Introduction</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Robert is President and Founder of Guardian Commercial Realty, a leading commercial realty advisory firm that exclusively represents the interests of commercial office and industrial tenants. In this role, he manages operations of the firm's transaction services in major markets throughout the United States.
                </p>
                <p>
                  A noted commercial real estate expert, Robert has been interviewed by numerous media outlets and is a recognized expert on commercial real estate issues. Since 1984, he has completed transactions in excess of $1 billion for a broad range of clients, including The City of Los Angeles, Time Warner, University of Phoenix, Turner Broadcasting, Farmers Insurance, Countrywide, CNN, Technicolor, Metrocities Mortgage, Morgan Stanley, Worldcom, Mass Mutual, Sedgwick, Detert, Moran & Arnold, California Pizza Kitchen, Korn/Ferry International, and 21st Century Insurance.
                </p>
                <p>
                  Before assuming his current role as President and Founder of Guardian, Robert most recently served as President and Chief Executive Officer of The Staubach Company's Los Angeles franchise. During his tenure there, Robert managed and grew the operation from zero to 22 brokers with offices in West Los Angeles and downtown Los Angeles in six years. Prior to Staubach, he was Executive Vice President and Partner at CRESA Partners. In addition to being one of the CRESA founding principals, he developed and implemented the company's core practice and procedure strategies. Robert began his career with Travers Realty and has exclusively represented commercial office tenants for over 21 years.
                </p>
                <p>
                  In 2002, Governor Gray Davis appointed Robert to the California State Parks and Recreation Commission. In 2003, fellow Commissioners elected him Vice Chairman of the Off-Highway Motor Vehicle Recreation Division. The Commission institutes policy and administers a $25 million budget to balance off-highway recreation and environmental preservation in California. Robert is also a member of Bel Air Country Club, where he has served on the Board of Directors, Membership, Practice Area, Finance, Green, Sports and Activities Committees.
                </p>
                <p>
                  Robert was awarded academic scholarships for his undergraduate and postgraduate education. He holds a Bachelor of Science degree in Business Administration from the University of Southern California, and attended Loyola Law School in Los Angeles.
                </p>
                <p>
                  Robert is an avid outdoorsman and motor sports fan. He lives in Encino, California with his wife and daughter.
                </p>
              </div>
            </div>
            <div>
              <Card className="border-border/50 sticky top-24" data-testid="card-executive-profile">
                <CardContent className="p-6 text-center">
                  <img
                    src="/images/robert-chavez.jpg"
                    alt="Robert F. Chavez"
                    className="w-48 h-48 mx-auto rounded-md object-cover object-top mb-4"
                  />
                  <h3 className="text-lg font-bold text-foreground">Robert F. Chavez</h3>
                  <p className="text-sm text-primary font-medium mb-1">President & CEO</p>
                  <p className="text-sm text-muted-foreground">310.882.2050</p>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 justify-center mb-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">40+ years in CRE</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">$1B+ in transactions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border/50" data-testid="card-mission">
              <CardContent className="p-6 lg:p-8">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guardian strives to make each client feel as though they are our only customer. Our tenacity, experience, and creative problem-solving abilities create a competitive advantage for our clients by reducing their overhead, maximizing efficiency, and enhancing corporate image.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50" data-testid="card-vision">
              <CardContent className="p-6 lg:p-8">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To establish trust, credibility, and long-term relationships with our clients by consistently exceeding their goals and expectations. Guardian strives to grow its reputation grounded in a powerful blend of integrity, strong character, and aggressive representation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50" data-testid="card-core-competency">
              <CardContent className="p-6 lg:p-8">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Core Competency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guardian understands that each client is unique. Accordingly, we listen carefully to understand each client's direction and objectives. Then we perform, diligently and completely, often protecting our clients from problems they don't even know exist.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="border-border/50 border-l-4 border-l-primary" data-testid="card-mbe">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Minority Business Enterprise (MBE)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Guardian Commercial Realty is a certified Minority Business Enterprise (MBE) as certified by the Southern California Minority Business Development Council. This certification reflects our commitment to diversity and our ability to serve as a qualified diverse supplier partner for organizations with supplier diversity objectives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 border-l-4 border-l-primary" data-testid="card-guaranty">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Our Guaranty</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Guardian safeguards against any conflicts of interest by guaranteeing that we will not represent more than one client with a similarly situated requirement in the same target market. Moreover, if a client is not reasonably satisfied with our services, the client may, at its sole and absolute discretion, access all or part of our fee.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 bg-muted/20" data-testid="card-conflict-of-interest">
            <CardContent className="p-6 lg:p-10">
              <h2 className="text-2xl font-bold text-foreground font-serif mb-6">A New Conflict of Interest</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-4xl">
                <p>
                  The vast majority of commercial real estate brokerage firms represent both landlords and tenants. This inherent conflict of interest places the tenant at a distinct disadvantage. When a brokerage firm has a listing relationship with a landlord, its primary allegiance is to that landlord, regardless of whether it is also representing a prospective tenant for space in that building.
                </p>
                <p>
                  Guardian was founded on the principle that tenants deserve exclusive, unconflicted representation. We will never represent a landlord. This means our interests are always fully aligned with our clients' interests. When we negotiate a lease or purchase on your behalf, we are solely focused on achieving the best possible outcome for you.
                </p>
                <p>
                  This distinction is critical. Traditional brokerage firms that represent both landlords and tenants face an unavoidable conflict: they cannot simultaneously advocate for the lowest possible rent on behalf of a tenant while also being obligated to achieve the highest possible rent for a landlord. At Guardian, we have eliminated this conflict entirely.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Contact us for a confidential conversation about how Guardian can help your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-about-cta">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
