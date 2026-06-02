import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "wouter";

export function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-foreground text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-all duration-300 ${
            showTopBtn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
          }`}
          data-testid="button-scroll-top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        <a
          href="https://wa.me/447716472008"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          data-testid="button-floating-whatsapp"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 flex gap-3 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href="tel:+447716472008"
          className="flex-1 bg-foreground text-white text-center py-3 rounded-none font-bold text-sm"
        >
          Call Now
        </a>
        <button
          onClick={() => setLocation("/contact")}
          className="flex-1 bg-primary text-white text-center py-3 rounded-none font-bold text-sm"
        >
          Get Quote
        </button>
      </div>
    </>
  );
}
