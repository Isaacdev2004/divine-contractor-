import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical construction project take?", a: "Project timelines vary widely based on scope and complexity. A standard home renovation might take 4-8 weeks, while commercial builds can span several months. We always provide a detailed schedule upfront." },
  { q: "Are you licensed and insured?", a: "Yes, we are fully licensed and hold comprehensive liability insurance. Your property and our workers are completely protected throughout the entire project." },
  { q: "Do you offer free consultations?", a: "Absolutely. We offer no-obligation initial consultations to discuss your vision, assess the site, and provide preliminary estimates before any commitment." },
  { q: "Can you handle both residential and commercial projects?", a: "Yes, we have dedicated teams for both sectors. Our portfolio spans from bespoke residential extensions to large-scale commercial fit-outs." },
  { q: "What areas do you serve?", a: "We primarily operate within the greater metropolitan area but frequently take on significant projects in neighboring regions depending on the scope." },
  { q: "How do you handle project delays?", a: "We build buffer times into our schedules and maintain proactive communication. If unavoidable delays occur (e.g., weather or supply chain), we notify you immediately with updated timelines." },
  { q: "Do you provide warranties on your work?", a: "Yes, we provide a robust guarantee on all our workmanship, typically ranging from 1 to 5 years depending on the service, alongside passing on all manufacturer material warranties." },
];

export function ServiceFAQ() {
  return (
    <section className="py-24 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Got Questions?</span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}