"use client";

import { useState } from "react";
import BrokerPieChart from "../charts/BrokerPieChart";
import MFSIPPieChart from "../charts/MFSIPPieChart";

export default function PieChartComponent() {
  const [activeTab, setActiveTab] = useState<"broker" | "mf">("broker");

  return (
    <div className="bg-white rounded-2xl p-6 w-[420px]">
      {/* Toggle Buttons */}
      <div className="flex bg-[#F5F7FB] rounded-lg overflow-hidden w-fit mb-4">
        <button
          onClick={() => setActiveTab("broker")}
          className={`px-6 py-2 text-sm rounded-lg ${
            activeTab === "broker"
              ? "bg-[#0063F5] text-white"
              : "text-[#023E7A]"
          }`}
        >
          Broker
        </button>

        <button
          onClick={() => setActiveTab("mf")}
          className={`px-6 py-2 text-sm rounded-lg ${
            activeTab === "mf"
              ? "bg-[#0063F5] text-white"
              : "text-[#023E7A]"
          }`}
        >
          M/F & SIP
        </button>
      </div>

      {/* Render Correct Chart */}
      {activeTab === "broker" ? <BrokerPieChart /> : <MFSIPPieChart />}
    </div>
  );
}
