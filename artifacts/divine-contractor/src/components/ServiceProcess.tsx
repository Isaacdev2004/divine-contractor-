import { motion } from "framer-motion";
import { MessageSquare, ClipboardSignature, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Free Consultation", desc: "Submit your project details for a no-cost assessment" },
  { icon: ClipboardSignature, title: "Custom Proposal", desc: "We prepare a detailed scope, timeline and fixed-price quote" },
  { icon: Wrench, title: "Execution", desc: "Our certified team begins work with regular progress updates" },
  { icon: CheckCircle, title: "Final Inspection", desc: "We conduct quality checks before handing over the keys" },
];

export function ServiceProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-primary font-bold tracking-wider uppercase text-sm">How We Work</span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Service Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-primary flex items-center justify-center mb-6 relative bg-white z-10 text-primary">
                <step.icon size={32} />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-[2px] bg-gray-200 -z-0 hidden lg:block last:hidden" />
              <div className="absolute top-0 right-0 -mr-3 -mt-3 text-6xl font-bold text-gray-100 opacity-50 z-0">
                0{i + 1}
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}