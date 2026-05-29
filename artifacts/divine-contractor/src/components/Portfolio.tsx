import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import port1 from "@assets/portfolio-1.png";
import port2 from "@assets/portfolio-2.png";
import port3 from "@assets/portfolio-3.png";
import port4 from "@assets/portfolio-4.png";
import port5 from "@assets/portfolio-5.png";
import port6 from "@assets/portfolio-6.png";

const projects = [
  { id: 1, title: "Modern Luxury Villa", category: "Residential", img: port1 },
  { id: 2, title: "Nexus Office Tower", category: "Commercial", img: port2 },
  { id: 3, title: "Premium Kitchen Fitout", category: "Interior", img: port3 },
  { id: 4, title: "Facility Corridors", category: "Maintenance", img: port4 },
  { id: 5, title: "Suburban Home Extension", category: "Renovation", img: port5 },
  { id: 6, title: "Tech Hub Open Plan", category: "Interior", img: port6 },
];

const categories = ["All", "Residential", "Commercial", "Interior", "Renovation", "Maintenance"];

export function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Our Recent Projects
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-none ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                data-testid={`button-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden aspect-4/3 bg-gray-100"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-bold text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-heading font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
