import { ledgerData } from "@/data/ledger";

export default function RevenueTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[14px] text-[#6C757D] border-b border-[#E3ECFF]">
            {[
              "Sl No",
              "Date",
              "Document",
              "Particular",
              "Debit",
              "Credit",
              "Balance",
            ].map((h) => (
              <th
                key={h}
                className="text-left font-medium px-4 py-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ledgerData.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-[#F0F3F8] text-[13px] text-[#6C757D]"
            >
              <td className="px-4 py-3">{row.sl}</td>
              <td className="px-4 py-3">{row.date}</td>
              <td className="px-4 py-3">{row.document}</td>
              <td className="px-4 py-3 max-w-[420px]">
                {row.particular}
              </td>
              <td className="px-4 py-3">{row.debit}</td>
              <td className="px-4 py-3">{row.credit}</td>
              <td className="px-4 py-3">{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
