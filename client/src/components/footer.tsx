import { Link } from "wouter";
import { Shield, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7" />
              <span className="text-xl font-bold font-serif">GuardianUSA</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Exclusively representing tenants and buyers in commercial real estate transactions. Your advocate in every negotiation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity no-underline text-primary-foreground" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">Services</h4>
            <ul className="space-y-2.5">
              {["Tenant Representation", "Strategic Planning", "Portfolio Services", "Transaction Services", "Market Analysis"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm opacity-70 hover:opacity-100 transition-opacity no-underline text-primary-foreground">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <span className="text-sm opacity-80">1200 Corporate Drive, Suite 400<br />Arlington, VA 22202</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 opacity-70" />
                <span className="text-sm opacity-80">(703) 555-0180</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 opacity-70" />
                <span className="text-sm opacity-80">info@guardianusa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-60" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} GuardianUSA. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs opacity-60 hover:opacity-100 transition-opacity no-underline text-primary-foreground" data-testid="link-footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs opacity-60 hover:opacity-100 transition-opacity no-underline text-primary-foreground">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
