import { motion } from "framer-motion";
import { CheckCircle2, Award, Shield, Clock } from "lucide-react";
import aboutTeam from "@assets/about-team.png";

const badges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: CheckCircle2, text: "Certified Professionals" },
  { icon: Award, text: "Award-Winning" },
  { icon: Clock, text: "24/7 Support" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 border-4 border-white shadow-2xl">
              <img
                src={aboutTeam}
                alt="Our professional team"
                className="w-full h-auto object-cover object-center grayscale-[20%]"
              />
            </div>
            {/* Decorative background block */}
            <div className="absolute top-8 -left-8 w-full h-full bg-primary -z-0"></div>
            
            <div className="absolute -bottom-8 -right-8 bg-foreground p-8 border-l-4 border-primary z-20 shadow-xl hidden md:block">
              <p className="text-4xl font-heading font-bold text-white mb-1">15+</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Years of<br/>Excellence</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">About The Company</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Building Foundations For A Better Future
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Divine Contractor Services Ltd is a premier construction and property maintenance firm dedicated to delivering uncompromising quality. We specialize in both residential and commercial projects, bringing decades of combined experience to every site we step on.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our mission is to construct spaces that inspire, endure, and exceed our clients' expectations. We believe in transparency, structural integrity, and architectural excellence. When you build with us, you are building a legacy.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-sm md:text-base">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
