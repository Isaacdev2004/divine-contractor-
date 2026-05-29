import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="About Us"
        subtitle="15+ years of building excellence, trust, and lasting structures across the region."
        breadcrumb="About"
      />
      <About />
      <WhyChooseUs />
    </div>
  );
}
