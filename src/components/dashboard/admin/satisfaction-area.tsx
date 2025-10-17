"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { x: 1, y: 12 },
  { x: 2, y: 18 },
  { x: 3, y: 10 },
  { x: 4, y: 20 },
  { x: 5, y: 16 },
  { x: 6, y: 22 },
  { x: 7, y: 14 },
]

export default function SatisfactionArea() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="satisfy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0079FF" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#0079FF" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Tooltip cursor={{ opacity: 0.1 }} contentStyle={{ borderRadius: 8 }} formatter={(v) => [`${v}`, "Score"]} />
          <Area type="monotone" dataKey="y" stroke="#0079FF" fill="url(#satisfy)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
