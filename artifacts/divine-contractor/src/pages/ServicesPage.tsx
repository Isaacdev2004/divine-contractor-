import { Services } from "@/components/Services";
import { PageHeader } from "@/components/PageHeader";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { CTABanner } from "@/components/CTABanner";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Our Services"
        subtitle="From building construction and renovation to rubbish removal and full property clearances — London's trusted contractor."
        breadcrumb="Services"
      />
      <Services />
      <ServiceProcess />
      <ServiceFAQ />
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Let's build something great together."
        primaryLabel="Get Free Quote"
        primaryHref="/contact"
      />
    </div>
  );
}
