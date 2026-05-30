import { Testimonials } from "@/components/Testimonials";
import { PageHeader } from "@/components/PageHeader";
import { RatingSummary } from "@/components/RatingSummary";
import { CTABanner } from "@/components/CTABanner";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Testimonials"
        subtitle="Hear what our clients say about working with Divine Contractor Services Ltd."
        breadcrumb="Testimonials"
      />
      <RatingSummary />
      <Testimonials />
      <CTABanner
        title="Experience the Difference"
        subtitle="Join hundreds of satisfied clients today."
        primaryLabel="Get Free Quote"
        primaryHref="/contact"
      />
    </div>
  );
}
