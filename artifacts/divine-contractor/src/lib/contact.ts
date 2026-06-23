export const CONTACT = {
  person: "Mr Tunde Ariyo",
  company: "Divine Construction Services",
  companyLegal: "Divine Contractor Services Ltd",
  directorEmail: "tunde.ariyo@divinecontractorservices.co.uk",
  supportEmail: "contact@divinecontractorservices.co.uk",
  phoneDisplay: "07716 472008",
  phoneTel: "+447716472008",
  whatsapp: "447716472008",
  address: {
    line1: "5 Edmund House, 75 St Donatts Road",
    line2: "London, SE14 6PL",
    full: "5 Edmund House, 75 St Donatts Road, London, SE14 6PL",
  },
  mapPosition: [51.4633, -0.0375] as [number, number],
  hours: {
    weekdays: "Mon - Fri: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
  },
} as const;

export const contactLinks = {
  tel: `tel:${CONTACT.phoneTel}`,
  directorEmail: `mailto:${CONTACT.directorEmail}`,
  supportEmail: `mailto:${CONTACT.supportEmail}`,
  whatsapp: `https://wa.me/${CONTACT.whatsapp}`,
};
