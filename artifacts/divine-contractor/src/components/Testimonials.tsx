import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Robert Harrison",
    role: "Property Developer",
    text: "Divine Contractor Services delivered our 12-unit residential complex two weeks ahead of schedule and under budget. Their attention to structural detail and communication throughout the build was extraordinary.",
    initials: "RH",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "We hired them for a complete home renovation. They respected our space, kept the site clean, and the final finish on the carpentry and painting is flawless. Highly recommend.",
    initials: "SJ",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CEO, TechFlow",
    text: "When outfitting our new commercial office space, we needed a contractor who understood modern infrastructure. Divine executed perfectly. The electrical and network routing is immaculate.",
    initials: "MC",
  },
  {
    id: 4,
    name: "Eleanor Davis",
    role: "Facility Manager",
    text: "Their ongoing maintenance team is responsive and highly capable. Whether it's emergency plumbing or routine roof inspections, they handle it all with utmost professionalism.",
    initials: "ED",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Client Reviews</span>
            <div className="w-12 h-1 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            What People Say About Us
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -ml-4 -mt-4 md:-ml-12 md:-mt-8 text-primary/20 z-0">
            <Quote size={120} />
          </div>

          <div className="bg-white p-8 md:p-12 shadow-xl relative z-10 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 font-medium italic mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 border-2 border-primary">
                    <AvatarFallback className="bg-foreground text-white font-bold">
                      {testimonials[current].initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-foreground text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-primary text-sm font-semibold">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white text-foreground hover:bg-primary hover:text-white flex items-center justify-center transition-colors shadow-md"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white text-foreground hover:bg-primary hover:text-white flex items-center justify-center transition-colors shadow-md"
              data-testid="button-testimonial-next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
