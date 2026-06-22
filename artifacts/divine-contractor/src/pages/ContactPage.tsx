import { QuoteForm } from "@/components/QuoteForm";
import { Contact } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { CONTACT } from "@/lib/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Contact Us"
        subtitle={`Speak with ${CONTACT.person} for a free quote, site visit, or project enquiry.`}
        breadcrumb="Contact"
      />
      <QuoteForm />
      <Contact />
    </div>
  );
}
