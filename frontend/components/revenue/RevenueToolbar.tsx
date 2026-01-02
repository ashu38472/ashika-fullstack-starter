"use client";

import { Search, Calendar } from "lucide-react";

export default function RevenueToolbar() {
  return (
    <div className="bg-[#DCEBFF] rounded-t-xl px-5 py-3 flex items-center justify-between gap-4">
      {/* Left */}
      <div className="flex items-center gap-3 flex-1">
        <div className="relative w-[340px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C757D]" />
          <input
            type="text"
            placeholder="Search By client name & idnumber..."
            className="
              w-full h-[38px] pl-9 pr-3
              rounded-lg border border-[#E3ECFF]
              text-sm text-[#41414E]
              placeholder:text-[#6C757D]
              focus:outline-none focus:ring-2 focus:ring-[#0063F5]
            "
          />
        </div>

        <button className="h-[38px] w-[38px] rounded-lg bg-white border border-[#E3ECFF] flex items-center justify-center">
          <Calendar className="h-4 w-4 text-[#0063F5]" />
        </button>
      </div>

      {/* Right */}
      <button
        className="
          h-[38px]
          px-4
          rounded-lg
          bg-white
          border border-[#E3ECFF]
          text-sm
          font-medium
          text-[#0063F5]
          flex items-center gap-2
        "
      >
        Commission Ledger
        <span className="text-xs">▼</span>
      </button>
    </div>
  );
}
