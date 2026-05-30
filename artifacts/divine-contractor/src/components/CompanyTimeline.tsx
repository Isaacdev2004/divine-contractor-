import { motion } from "framer-motion";

const milestones = [
  { year: "2009", title: "Company Founded", desc: "Started with 3 employees and a passion for quality construction" },
  { year: "2012", title: "First Commercial Project", desc: "Secured our first major commercial contract worth $2M" },
  { year: "2015", title: "Regional Expansion", desc: "Expanded operations across 3 states" },
  { year: "2018", title: "Award Recognition", desc: "Won Best Contractor Award from the Regional Construction Board" },
  { year: "2021", title: "500 Projects Milestone", desc: "Completed our 500th project — a luxury residential complex" },
  { year: "2024", title: "Going Digital", desc: "Launched digital project tracking for all clients" },
];

export function CompanyTimeline() {
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our History</span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            A Journey of Growth
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
          
          {milestones.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative mb-12 flex flex-col md:flex-row items-start md:items-center"
              >
                <div className={`md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? 'md:text-right' : 'md:order-2 md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 bg-primary text-white font-bold rounded-sm text-sm mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 border-white bg-primary md:-translate-x-1/2 mt-1 md:mt-0 flex items-center justify-center shadow-md z-10" />
                
                <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}