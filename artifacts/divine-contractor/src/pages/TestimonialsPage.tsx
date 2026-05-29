import { Testimonials } from "@/components/Testimonials";
import { PageHeader } from "@/components/PageHeader";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Testimonials"
        subtitle="Hear what our clients say about working with Divine Contractor Services Ltd."
        breadcrumb="Testimonials"
      />
      <Testimonials />
    </div>
  );
}
