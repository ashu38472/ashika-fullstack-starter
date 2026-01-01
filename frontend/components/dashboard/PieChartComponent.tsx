"use client";

import { useState } from "react";
import BrokerPieChart from "../charts/BrokerPieChart";
import MFSIPPieChart from "../charts/MFSIPPieChart";

export default function PieChartComponent() {
  const [activeChart, setActiveChart] = useState("broker");

  return (
    <div className="w-[420px] h-[500px] mx-auto p-6 bg-white rounded-lg">
      {/* Button Group */}
      <div className="flex justify-between px-8 mb-8">
        <button
          onClick={() => setActiveChart("broker")}
          className={`px-8 py-2 rounded-lg font-medium transition-all ${
            activeChart === "broker"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Broker
        </button>
        <button
          onClick={() => setActiveChart("mfsip")}
          className={`px-8 py-2 rounded-lg font-medium transition-all ${
            activeChart === "mfsip"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          M/F & SIP
        </button>
      </div>

      {/* Chart Display */}
      <div className="flex justify-center">
        {activeChart === "broker" ? <BrokerPieChart /> : <MFSIPPieChart />}
      </div>
    </div>
  );
}
