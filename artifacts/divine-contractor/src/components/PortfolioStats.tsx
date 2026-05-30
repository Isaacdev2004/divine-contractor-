import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50,000+", label: "Sq Ft Built" },
  { value: "15+", label: "Years in Business" },
];

export function PortfolioStats() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/90 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}