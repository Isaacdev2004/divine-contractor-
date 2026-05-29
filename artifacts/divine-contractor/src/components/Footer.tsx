import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A1520] text-gray-300 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-bold text-xl rounded">
                DC
              </div>
              <span className="text-white font-heading font-bold text-xl tracking-tight">
                DIVINE CONTRACTOR
              </span>
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Premium construction and property services. Building durable, aesthetic, and functional structures that stand the test of time.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded bg-white/5 text-gray-400 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['Building Construction', 'Renovation Services', 'Electrical Installation', 'Plumbing Services', 'Painting & Finishing'].map((item) => (
                <li key={item}>
                  <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                    <ChevronRight size={14} className="mr-1 text-primary/50" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Portfolio', href: '#portfolio' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Get a Quote', href: '#quote' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                    <ChevronRight size={14} className="mr-1 text-primary/50" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to receive updates and insights on our latest projects.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none h-12 focus-visible:ring-primary focus-visible:border-primary" 
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 font-bold w-full">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Divine Contractor Services Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
