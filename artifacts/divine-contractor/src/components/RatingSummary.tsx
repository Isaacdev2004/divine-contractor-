import { motion } from "framer-motion";
import { Star } from "lucide-react";

const platforms = [
  { name: "Google Reviews", score: "4.9" },
  { name: "Facebook", score: "4.8" },
  { name: "Houzz", score: "5.0" },
  { name: "Bark.com", score: "4.9" },
];

export function RatingSummary() {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1 text-primary mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={48} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-4">
            4.9 <span className="text-3xl md:text-5xl text-gray-400 font-normal">/ 5</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Based on 200+ verified client reviews
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white text-foreground px-6 py-3 rounded-full flex items-center gap-3 font-semibold shadow-lg"
              >
                <span>{p.name}: {p.score}</span>
                <Star size={16} className="text-primary" fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}