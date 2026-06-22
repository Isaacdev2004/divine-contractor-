import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { CONTACT, contactLinks } from "@/lib/contact";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

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
              Have a question or need a consultation? Contact {CONTACT.person} directly by phone, email, or visit our office.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Contact Person</h4>
                  <p className="text-gray-600">{CONTACT.person}</p>
                  <p className="text-gray-500 text-sm mt-1">{CONTACT.company}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Office Address</h4>
                  <p className="text-gray-600">
                    {CONTACT.address.line1}<br />
                    {CONTACT.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600">
                    <a href={contactLinks.tel} className="hover:text-primary transition-colors">
                      {CONTACT.phoneDisplay}
                    </a>
                    <br />
                    <a
                      href={contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp: {CONTACT.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href={contactLinks.email} className="hover:text-primary transition-colors break-all">
                      {CONTACT.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    {CONTACT.hours.weekdays}<br />
                    {CONTACT.hours.saturday}
                  </p>
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] lg:h-auto min-h-[500px] relative border-4 border-white shadow-xl overflow-hidden"
          >
            <MapContainer
              center={CONTACT.mapPosition}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", minHeight: "500px" }}
              data-testid="map-contact"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={CONTACT.mapPosition} icon={markerIcon}>
                <Popup>
                  <div className="text-center">
                    <strong className="block text-sm font-bold">{CONTACT.companyLegal}</strong>
                    <span className="text-xs text-gray-600 block mt-1">{CONTACT.person}</span>
                    <span className="text-xs text-gray-600">
                      {CONTACT.address.line1}<br />
                      {CONTACT.address.line2}
                    </span>
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
