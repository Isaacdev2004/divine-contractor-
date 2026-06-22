import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { contactLinks } from "@/lib/contact";
import heroBg from "@assets/hero-bg.png";

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Construction site"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm md:text-base">
              Divine Contractor Services Ltd
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6"
          >
            Reliable Construction & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Property Services
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light"
          >
            Residential & Commercial Contractor Solutions You Can Trust. Building landmarks for decades with precision and weight.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-lg w-full sm:w-auto"
              onClick={() => handleNavClick("#quote")}
              data-testid="button-hero-quote"
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg w-full sm:w-auto bg-transparent"
              onClick={() => { window.location.href = contactLinks.tel; }}
              data-testid="button-hero-call"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-none h-14 px-8 text-lg w-full sm:w-auto"
              onClick={() => window.open(contactLinks.whatsapp, "_blank")}
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
