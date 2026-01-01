export default function RevenueSummary() {
  return (
    <div className="bg-white rounded-2xl p-6 flex gap-6">
      {/* Left Big Card */}
      <div className="flex-1 rounded-xl bg-gradient-to-br from-[#CFE9FF] to-[#B7E3FF] p-6">
        <p className="text-sm font-semibold text-[#023E7A]">Account</p>
        <p className="text-sm text-[#023E7A] mt-1">Total Revenue</p>

        <p className="text-2xl font-bold text-[#023E7A] mt-4">
          ₹ 10,00,00,000 Cr
        </p>
      </div>

      {/* Right Breakdown */}
      <div className="flex flex-col gap-4 w-[380px]">
        <BreakdownItem
          label="including brokerage fees"
          value="₹50,000.00"
          bg="#E6E1FF"
          text="#4F46E5"
        />
        <BreakdownItem
          label="Commissions"
          value="₹50,000.00"
          bg="#FFE9B5"
          text="#B45309"
        />
        <BreakdownItem
          label="Other sources"
          value="₹50,000.00"
          bg="#DFFBEA"
          text="#047857"
        />
      </div>
    </div>
  );
}

function BreakdownItem({
  label,
  value,
  bg,
  text,
}: {
  label: string;
  value: string;
  bg: string;
  text: string;
}) {
  return (
    <div
      className="flex items-center justify-between rounded-xl px-4 py-3"
      style={{ backgroundColor: bg }}
    >
      <span className="text-sm font-medium text-[#023E7A]">{label}</span>
      <span
        className="bg-white rounded-lg px-3 py-1 text-sm font-semibold"
        style={{ color: text }}
      >
        {value}
      </span>
    </div>
  );
}
