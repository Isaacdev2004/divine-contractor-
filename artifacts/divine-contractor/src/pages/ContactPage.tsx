import { QuoteForm } from "@/components/QuoteForm";
import { Contact } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for a free quote, site visit, or any enquiry about your project."
        breadcrumb="Contact"
      />
      <QuoteForm />
      <Contact />
    </div>
  );
}
