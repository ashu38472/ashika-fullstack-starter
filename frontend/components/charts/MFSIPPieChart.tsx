"use client";

import { mfSipDistribution } from "@/data/chartData";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function MFSIPPieChart() {
  return (
    <div className="w-[380px]">
      {/* Semi Donut */}
      <div className="w-full h-56 flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mfSipDistribution}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
            >
              {mfSipDistribution.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="space-y-2 mt-6 text-sm">
        {mfSipDistribution.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: item.color }}
            />
            <span className="text-[#023E7A]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
