import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HardHat, Hammer, Zap, Droplets, ArrowRight, CheckCircle2, Award, Shield, Clock, Phone } from "lucide-react";
import aboutTeam from "@assets/about-team.png";

const featuredServices = [
  {
    icon: HardHat,
    title: "Building Construction",
    description: "Full-scale construction from foundation to roof, executing complex blueprints with precision.",
  },
  {
    icon: Hammer,
    title: "Renovation Services",
    description: "Transform existing spaces with our expert renovation team. Quality results, on time.",
  },
  {
    icon: Zap,
    title: "Electrical Installation",
    description: "Safe, code-compliant electrical work for residential and commercial properties.",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Full plumbing installation, repair, and maintenance for any project size.",
  },
];

const trustBadges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: CheckCircle2, text: "Certified Professionals" },
  { icon: Award, text: "Award-Winning" },
  { icon: Clock, text: "24/7 Support" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero />
      <Stats />

      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Building Trust, One Project at a Time
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Divine Contractor Services Ltd has been delivering exceptional construction and property services for over 15 years. Our team of certified professionals is committed to quality workmanship, transparent communication, and results that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {trustBadges.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8 font-semibold" data-testid="button-home-about-cta">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={aboutTeam}
                alt="Divine Contractor team"
                className="w-full h-[450px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-xl">
                <p className="text-4xl font-heading font-extrabold">15+</p>
                <p className="text-sm font-medium opacity-90">Years of Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Do</span>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From ground-up construction to precision renovation, we deliver results that last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white border border-gray-100 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="text-primary group-hover:text-white w-7 h-7 transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none h-12 px-8 font-semibold" data-testid="button-home-services-cta">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 text-lg">Get a free, no-obligation quote from our team today.</p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-none h-14 px-8 font-bold text-lg" data-testid="button-home-cta-quote">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-14 px-8 font-bold text-lg bg-transparent" data-testid="button-home-cta-call">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
