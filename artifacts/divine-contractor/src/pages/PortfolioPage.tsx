import { Portfolio } from "@/components/Portfolio";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioStats } from "@/components/PortfolioStats";
import { CTABanner } from "@/components/CTABanner";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Our Portfolio"
        subtitle="A showcase of completed projects — from residential builds to large-scale commercial developments."
        breadcrumb="Portfolio"
      />
      <PortfolioStats />
      <Portfolio />
      <CTABanner
        title="Inspired by what you see?"
        subtitle="Contact us today to bring your vision to life."
        primaryLabel="Get Free Quote"
        primaryHref="/contact"
      />
    </div>
  );
}
