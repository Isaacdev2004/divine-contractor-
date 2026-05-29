import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Contact Us Today
            </h2>
            
            <p className="text-gray-600 mb-10 text-lg">
              Have a question or need a consultation? Our team is ready to assist you. Reach out via phone, email, or visit our office.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Head Office</h4>
                  <p className="text-gray-600">123 Builder's Avenue, Suite 400<br/>Metropolis, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600">Main: +1 (555) 123-4567<br/>WhatsApp: +1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Email Address</h4>
                  <p className="text-gray-600">info@divinecontractor.com<br/>estimates@divinecontractor.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <h4 className="font-heading font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-gray-100 text-foreground hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] lg:h-auto min-h-[500px] bg-gray-200 relative border-4 border-white shadow-xl"
          >
            {/* Maps iframe placeholder - styled to look like a map */}
            <div className="absolute inset-0 bg-[#e5e3df] flex flex-col items-center justify-center text-gray-500 overflow-hidden">
              <div className="w-full h-full opacity-30" style={{
                backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <MapPin size={48} className="text-primary mb-4" />
                <span className="font-heading font-bold text-xl text-gray-700 bg-white/80 px-4 py-2">
                  Interactive Map Placeholder
                </span>
                <span className="text-sm mt-2 text-gray-600">123 Builder's Avenue</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
