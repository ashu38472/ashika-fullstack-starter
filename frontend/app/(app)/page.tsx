import RevenueSummary from "@/components/dashboard/RevenueSummary";
import ClientActivityCard from "@/components/dashboard/ClientActivityCard";
import PortfolioSection from "@/components/dashboard/PortfolioSection";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[22px] font-semibold text-[#023E7A]">
        Dashboard Overview
      </h1>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          <RevenueSummary />
          <PortfolioSection />
        </div>

        <ClientActivityCard />
      </div>
    </div>
  );
}
