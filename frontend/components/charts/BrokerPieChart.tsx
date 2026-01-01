"use client";

import { brokerDistribution } from "@/data/chartData";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function BrokerPieChart() {
  return (
    <div className="w-[380px]">
      {/* Donut Chart */}
      <div className="w-full h-64 flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={brokerDistribution}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {brokerDistribution.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-y-2 mt-4 text-sm">
        {brokerDistribution.map((item) => (
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
