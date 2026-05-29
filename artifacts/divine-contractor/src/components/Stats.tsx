import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, label: "Projects Completed", prefix: "", suffix: "+" },
  { value: 15, label: "Years Experience", prefix: "", suffix: "+" },
  { value: 1200, label: "Happy Clients", prefix: "", suffix: "+" },
  { value: 80, label: "Skilled Workers", prefix: "", suffix: "+" },
];

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const step = end / totalSteps;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-primary">
      {prefix}{count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-foreground py-16 border-y border-white/5 relative z-20 -mt-1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
