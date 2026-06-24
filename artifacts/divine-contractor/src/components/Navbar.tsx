import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  const solidNav = !isHome || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidNav ? "bg-foreground shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <img
              src="/logo.png"
              alt="Divine Contractor Services"
              className="h-11 sm:h-12 w-auto max-w-[200px] object-contain rounded-md bg-white px-2 py-1"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`font-medium text-sm transition-colors ${
                        isActive
                          ? "text-primary border-b-2 border-primary pb-0.5"
                          : "text-white hover:text-primary"
                      }`}
                      data-testid={`link-nav-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-none"
                data-testid="button-nav-quote"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-foreground/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-2xl font-heading font-semibold transition-colors ${
                    isActive ? "text-primary" : "text-white hover:text-primary"
                  }`}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="pt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-none w-full"
                data-testid="button-mobile-nav-quote"
              >
                Get Free Quote
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
