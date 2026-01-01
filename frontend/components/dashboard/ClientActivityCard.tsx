export default function ClientActivityCard() {
  return (
    <div className="bg-white rounded-2xl p-6 space-y-4 w-[320px]">
      <h2 className="text-base font-semibold text-[#023E7A]">
        Client Activity
      </h2>

      <ActivityRow label="Total client active" value="1.5Lakh" />
      <ActivityRow label="Dormant Clients" value="50k" />
    </div>
  );
}

function ActivityRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between bg-[#E3ECFF] rounded-xl px-4 py-3">
      <span className="text-sm text-[#023E7A]">{label}</span>
      <span className="bg-white rounded-lg px-3 py-1 text-sm font-semibold text-[#0063F5]">
        {value}
      </span>
    </div>
  );
}
