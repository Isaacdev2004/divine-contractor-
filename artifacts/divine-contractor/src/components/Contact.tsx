import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const OFFICE_POSITION: [number, number] = [40.7128, -74.006];

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
            className="h-[500px] lg:h-auto min-h-[500px] relative border-4 border-white shadow-xl overflow-hidden"
          >
            <MapContainer
              center={OFFICE_POSITION}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", minHeight: "500px" }}
              data-testid="map-contact"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={OFFICE_POSITION} icon={markerIcon}>
                <Popup>
                  <div className="text-center">
                    <strong className="block text-sm font-bold">Divine Contractor Services Ltd</strong>
                    <span className="text-xs text-gray-600">123 Builder's Avenue, Suite 400<br/>Metropolis, NY 10001</span>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
