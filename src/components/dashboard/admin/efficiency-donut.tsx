"use client"

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"

export default function EfficiencyDonut({ percentage = 75 }: { percentage?: number }) {
  const data = [
    { name: "completed", value: percentage },
    { name: "remaining", value: 100 - percentage },
  ]
  const COLORS = ["#0079FF", "rgba(0,121,255,0.15)"]

  return (
    <div className="h-40 w-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="90%"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none -mt-28 flex h-28 items-center justify-center">
        <span className="text-xl font-semibold">{percentage.toFixed(1)}%</span>
      </div>
    </div>
  )
}
