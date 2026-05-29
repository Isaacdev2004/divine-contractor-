import { Portfolio } from "@/components/Portfolio";
import { PageHeader } from "@/components/PageHeader";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHeader
        title="Our Portfolio"
        subtitle="A showcase of completed projects — from residential builds to large-scale commercial developments."
        breadcrumb="Portfolio"
      />
      <Portfolio />
    </div>
  );
}
