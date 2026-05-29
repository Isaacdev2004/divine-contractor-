import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-foreground shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={(e) => handleNavClick(e as any, "#home")} className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl rounded">
              DC
            </div>
            <span className="text-white font-heading font-bold text-xl tracking-tight hidden sm:block">
              DIVINE CONTRACTOR
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-primary transition-colors font-medium text-sm"
                    data-testid={`link-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-none"
              onClick={(e) => handleNavClick(e as any, "#quote")}
              data-testid="button-nav-quote"
            >
              Get Free Quote
            </Button>
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
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-2xl font-heading font-semibold hover:text-primary transition-colors"
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-none w-full"
              onClick={(e) => handleNavClick(e as any, "#quote")}
              data-testid="button-mobile-nav-quote"
            >
              Get Free Quote
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
