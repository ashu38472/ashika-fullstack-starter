"use client";

import { brokerDistribution } from "@/data/chartData";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

export default function BrokerPieChart() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Donut Chart with Center Label */}
      <div
        className="relative flex justify-center"
        style={{ width: "300px", height: "300px" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={brokerDistribution}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={450}
              label={({ value }) => `${value}%`} // Shows percentage on segments
              labelLine={false}
            >
              {brokerDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                value="Value/Unit"
                position="center"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fill: "#023E7A",
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend - 2 Column Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-3 mt-6">
        {brokerDistribution.map((item) => (
          <div key={item.name} className="flex items-center gap-2.5">
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
