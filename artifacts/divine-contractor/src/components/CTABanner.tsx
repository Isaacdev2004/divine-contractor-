import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { contactLinks } from "@/lib/contact";

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
}

export function CTABanner({ title, subtitle, primaryLabel, primaryHref }: CTABannerProps) {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-3">
              {title}
            </h2>
            <p className="text-white/80 text-lg">{subtitle}</p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href={primaryHref}>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-none h-14 px-8 font-bold text-lg" data-testid="button-cta-primary">
                {primaryLabel}
              </Button>
            </Link>
            <a href={contactLinks.tel}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-14 px-8 font-bold text-lg bg-transparent" data-testid="button-cta-call">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}