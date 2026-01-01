import RevenueSummary from "@/components/dashboard/RevenueSummary";
import ClientActivityCard from "@/components/dashboard/ClientActivityCard";
import PortfolioSection from "@/components/dashboard/PortfolioSection";
import PieChartComponent from "@/components/dashboard/PieChartComponent";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[22px] font-semibold text-[#023E7A]">
        Dashboard Overview
      </h1>

      {/* ROW 1 */}
      <div className="flex gap-6 items-start">
        <div className="flex-1">
          <RevenueSummary />
        </div>

        <ClientActivityCard />
      </div>

      {/* ROW 2 */}
      <h2 className="text-[22px] font-semibold text-[#023E7A]">
        Portfolio Value
      </h2>

      <div className="flex gap-6 items-start">
        <div className="flex-1">
          <PortfolioSection />
        </div>

        <PieChartComponent />
      </div>
    </div>
  );
}
