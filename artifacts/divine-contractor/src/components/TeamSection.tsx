import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { name: "James Okafor", role: "Founder & CEO", bio: "With 20+ years in construction, James built Divine Contractor on trust." },
  { name: "Sarah Mitchell", role: "Project Manager", bio: "Ensures every project is delivered on time and within budget." },
  { name: "David Chen", role: "Lead Architect", bio: "Designs functional, beautiful, and sustainable structures." },
  { name: "Maria Santos", role: "Site Supervisor", bio: "Oversees daily operations with strict attention to safety." },
  { name: "Kevin Brown", role: "Electrical Engineer", bio: "Master electrician ensuring modern, code-compliant systems." },
  { name: "Priya Patel", role: "Interior Specialist", bio: "Transforms empty spaces into stunning environments." },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our People</span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Meet the Experts
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            The skilled professionals driving our success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, i) => {
            const initials = member.name.split(" ").map((n) => n[0]).join("");
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-foreground rounded-full flex items-center justify-center mb-4 text-primary font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  {initials}
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                <a href="#" className="inline-flex text-gray-400 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}