import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import React from "react";

export function RecentOrdersAndServices() {
  const items = [
    {
      id: "F86",
      title: "Order - Room 777",
      subtitle: "Italian Menu Room service - 2 items4 days, 1 hour ago",
      status: "Confirmed",
      type: "Food",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "S99",
      title: "Service Request",
      subtitle: "Room 777 - eqrwerwere6 days, 1 hour ago",
      status: "Cancelled",
      type: "Service",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "F74",
      title: "Order - Room 205",
      subtitle: "Italian Menu Room service - 1 items4 days, 3 hours ago $4",
      status: "Pending",
      type: "Food",
      statusColor: "bg-orange-100 text-orange-700",
    },
    {
      id: "S97",
      title: "Professional Cleaners",
      subtitle: "Room 777 - Service request: Professional ...1 week, 6 days ago",
      status: "Delivered",
      type: "Service",
      statusColor: "bg-sky-100 text-sky-700",
    },
  ];

  return (
    <Card className="rounded-2xl border-0">
      <CardHeader className="border-b-2 border-b-[#0079FF] pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">Recent Orders & Services</CardTitle>
          <a href="#" className="text-sm font-medium text-[#0079FF] hover:underline">View All</a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-6">
        {items.map((it) => (
          <div key={it.id} className="flex items-start justify-between gap-4 rounded-lg bg-primary/10 p-4 shadow-sm">
            <div className="flex-1">
              <div className="font-semibold text-gray-900">[{it.id}] {it.title}</div>
              <div className="text-sm text-gray-600">{it.subtitle}</div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Eye className="h-5 w-5 text-blue-400" />
              <Badge className={`text-xs font-medium ${it.statusColor}`}>{it.status}</Badge>
              <span className="text-xs text-gray-500">{it.type}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
