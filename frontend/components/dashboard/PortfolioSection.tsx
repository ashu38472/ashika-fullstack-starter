export default function PortfolioSection() {
  return (
    <div className="bg-white rounded-2xl p-6 h-[360px]">
      <p className="text-2xl font-bold text-[#41414E]">
        ₹10,00,00,00
      </p>

      <p className="text-sm text-[#6C757D] mt-2">
        Your Profit is{" "}
        <span className="text-[#0063F5] font-semibold">
          ₹10,000.00
        </span>
      </p>

      {/* Chart placeholder */}
      <div className="mt-6 h-[220px] rounded-xl bg-[#EEF7FF] flex items-center justify-center text-sm text-[#6C757D]">
        Chart will go here
      </div>
    </div>
  );
}
