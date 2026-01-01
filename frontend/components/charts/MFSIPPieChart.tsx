"use client";

import { mfSipDistribution } from "@/data/chartData";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function MFSIPPieChart() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Semi-Circle Donut Chart */}
      <div
        className="relative flex justify-center"
        style={{ width: "400px", height: "220px" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mfSipDistribution}
              cx="50%"
              cy="80%" // Move down slightly
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              label={({ value }) => `${value}%`}
              labelLine={false}
            >
              {mfSipDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend - Centered Below Chart */}
      <div className="flex flex-col gap-3 justify-start w-full px-4 mt-10">
        {mfSipDistribution.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-medium text-[#023E7A]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
