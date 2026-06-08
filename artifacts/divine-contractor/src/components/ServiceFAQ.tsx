import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you offer rubbish removal and waste clearance?", a: "Yes — rubbish removal, house clearance, office clearance, and waste collection are core services we offer across London. We handle everything from single-item collections to full property clearances, with same-day availability in most cases." },
  { q: "What types of waste do you collect?", a: "We collect non-hazardous household and commercial waste including furniture, appliances, garden waste, construction debris, and general rubbish. We dispose responsibly, maximising recycling wherever possible." },
  { q: "Can you do same-day rubbish removal?", a: "In most cases, yes. Contact us in the morning and we can often arrange a same-day collection. We serve Lewisham and across London — call or WhatsApp us to check availability." },
  { q: "How long does a typical construction project take?", a: "Project timelines vary based on scope and complexity. A standard home renovation might take 4–8 weeks, while new builds can span several months. We always provide a detailed schedule upfront." },
  { q: "Are you licensed and insured?", a: "Yes, we are fully licensed and hold comprehensive liability insurance. Your property and our workers are completely protected throughout every project." },
  { q: "Do you offer free consultations?", a: "Absolutely. We offer no-obligation consultations for both construction and clearance jobs — to assess the scope, give you a clear estimate, and answer any questions before you commit." },
  { q: "What areas do you serve?", a: "We are based in SE14 (New Cross / Lewisham) and serve clients across London. For larger construction projects we travel further — get in touch and we'll confirm coverage for your area." },
  { q: "Do you provide warranties on your work?", a: "Yes. All our workmanship carries a guarantee — typically 1 to 5 years depending on the service type — plus all manufacturer material warranties are passed on to you." },
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