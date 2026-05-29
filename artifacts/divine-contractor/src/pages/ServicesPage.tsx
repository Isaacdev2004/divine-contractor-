import { Services } from "@/components/Services";
import { PageHeader } from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and property solutions tailored to residential and commercial clients."
        breadcrumb="Services"
      />
      <Services />
    </div>
  );
}
