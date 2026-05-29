import { motion } from "framer-motion";
import { ShieldCheck, Users, PiggyBank, Rocket, Gem, Smile } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "Full compliance with all local regulations and complete liability coverage for your peace of mind." },
  { icon: Users, title: "Experienced Professionals", text: "Our team consists of master tradesmen, certified engineers, and seasoned project managers." },
  { icon: PiggyBank, title: "Affordable Pricing", text: "Transparent quoting with no hidden fees, providing exceptional value without compromising quality." },
  { icon: Rocket, title: "Fast Project Delivery", text: "Strict adherence to timelines and efficient workflows to ensure your project is completed on schedule." },
  { icon: Gem, title: "Quality Workmanship", text: "Premium materials and meticulous attention to detail result in structures that stand the test of time." },
  { icon: Smile, title: "Customer Satisfaction", text: "A client-first approach with open communication at every stage of the construction process." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-primary"></div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                The Divine Contractor Advantage
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just build structures; we build trust. Our commitment to excellence, integrity, and innovation sets us apart in a crowded industry. Discover why hundreds of clients choose us for their most critical projects.
              </p>
              
              <div className="hidden lg:block w-32 h-32 border-4 border-white/10 rounded-full relative">
                <div className="absolute inset-2 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full rotate-45"></div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
