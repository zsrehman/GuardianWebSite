import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5 no-underline" data-testid="link-home-logo">
            <Building2 className="h-8 w-8 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="text-xl lg:text-2xl font-bold text-primary tracking-wide font-serif uppercase">
                Guardian
              </span>
              <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em] uppercase">
                The Tenant's Advocate
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="ml-3" data-testid="button-nav-cta">
                Get in Touch
              </Button>
            </Link>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav-menu" className="lg:hidden border-t border-border bg-background" data-testid="mobile-menu">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                <span
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="sm" data-testid="button-mobile-cta">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
