import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ChevronRight, MapPin, Phone, Mail, User } from "lucide-react";
import { Link } from "wouter";
import { CONTACT, contactLinks } from "@/lib/contact";

const serviceLinks = [
  "Building Construction",
  "Renovation Services",
  "Rubbish Removal",
  "House & Office Clearance",
  "Waste Collection & Disposal",
  "Painting & Finishing",
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
  { name: "Get a Quote", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1520] text-gray-300 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Divine Construction Services"
                className="h-20 w-auto max-w-[240px] object-contain rounded-md bg-white px-2 py-1"
              />
            </Link>
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

          {/* Services Col */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                    <ChevronRight size={14} className="mr-1 text-primary/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                    <ChevronRight size={14} className="mr-1 text-primary/50" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <User size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{CONTACT.person}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>
                  {CONTACT.address.line1}<br />
                  {CONTACT.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={contactLinks.tel} className="text-gray-400 hover:text-primary transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">Director</p>
                    <a href={contactLinks.directorEmail} className="text-gray-400 hover:text-primary transition-colors break-all">
                      {CONTACT.directorEmail}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">Support</p>
                    <a href={contactLinks.supportEmail} className="text-gray-400 hover:text-primary transition-colors break-all">
                      {CONTACT.supportEmail}
                    </a>
                  </div>
                </div>
              </li>
            </ul>
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
