import RevenueTable from "@/components/revenue/RevenueTable";
import RevenueToolbar from "@/components/revenue/RevenueToolbar";

export default function RevenueAnalysisPage() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-6">
        <h1 className="text-[18px] font-semibold text-[#023E7A]">
          Mutual Found
        </h1>
        <h2 className="text-[16px] font-medium text-[#6C757D]">Broking</h2>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-[#E3ECFF]">
        <RevenueToolbar />
        <RevenueTable />
      </div>

      <div className="flex justify-end px-4 py-3 gap-2 text-sm">
        <button className="h-8 w-8 rounded-full bg-[#0063F5] text-white">
          1
        </button>
        <button className="h-8 w-8 rounded-full bg-[#EEF7FF] text-[#6C757D]">2</button>
        <button className="h-8 w-8 rounded-full bg-[#EEF7FF] text-[#6C757D]">3</button>
      </div>
    </div>
  );
}
