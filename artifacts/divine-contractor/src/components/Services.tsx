import { motion } from "framer-motion";
import { HardHat, Hammer, Zap, Droplets, Paintbrush, Wrench, Building2, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Building Construction",
    description: "Full-scale construction from foundation to roof, executing complex blueprints with precision and safety."
  },
  {
    icon: Hammer,
    title: "Renovation Services",
    description: "Transforming existing spaces with modern designs, structural upgrades, and premium materials."
  },
  {
    icon: Zap,
    title: "Electrical Installation",
    description: "Safe, code-compliant electrical systems for residential and commercial properties by certified technicians."
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Comprehensive plumbing solutions, from pipe laying to fixture installation and emergency repairs."
  },
  {
    icon: Paintbrush,
    title: "Painting & Finishing",
    description: "Flawless interior and exterior finishing, utilizing high-grade paints and protective coatings."
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description: "Ongoing structural and functional maintenance to preserve property value and ensure tenant safety."
  },
  {
    icon: Building2,
    title: "Commercial Contracting",
    description: "Large-scale commercial projects tailored to business operations, including offices and retail spaces."
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "Custom home building and extensions crafted to meet your family's unique lifestyle and aesthetic."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  const handleLearnMore = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <div className="w-12 h-1 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Contractor Services
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver end-to-end solutions for projects of any scale, combining skilled craftsmanship with rigorous project management.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-primary shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-gray-50 group-hover:bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
              
              <button 
                onClick={handleLearnMore}
                className="flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors"
                data-testid={`button-service-learnmore-${index}`}
              >
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
