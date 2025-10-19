import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export function RecentOrdersAndServices() {
  const items = [
    {
      id: "F86",
      title: "Order - Room 777",
      subtitle: "Italian Menu Room service - 2 items4 days, 1 hour ago",
      status: "Confirmed",
      type: "Food",
      statusColor: "bg-[#28A745] text-white",
    },
    {
      id: "S99",
      title: "Service Request",
      subtitle: "Room 777 - eqrwerwere6 days, 1 hour ago",
      status: "Cancelled",
      type: "Service",
      statusColor: "bg-primary ",
    },
    {
      id: "F74",
      title: "Order - Room 205",
      subtitle: "Italian Menu Room service - 1 items4 days, 3 hours ago $4",
      status: "Pending",
      type: "Food",
      statusColor: "bg-[#28A745] text-white",
    },
    {
      id: "S97",
      title: "Professional Cleaners",
      subtitle: "Room 777 - Service request: Professional ...1 week, 6 days ago",
      status: "Delivered",
      type: "Service",
      statusColor: "bg-primary",
    },
  ];

  return (
    <Card className="bg-background border-0 shadow-sm py-0">
      <CardHeader className="px-0 bg-primary/5  border-0 rounded-t-lg border-b-2 border-b-primary">
        <div className="flex items-center justify-between p-4">
          <CardTitle className="text-lg font-semibold">Recent Orders & Services</CardTitle>
          <a href="#" className="text-sm font-medium text-[#0079FF] hover:underline">View All</a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 py-6">
        {items.map((it) => (
          <div key={it.id} className="flex items-start justify-between gap-4 rounded-lg bg-primary/10 p-4 shadow-sm">
            <div className="flex-1">
              <div className="font-semibold text-gray-900">[{it.id}] {it.title}</div>
              <div className="text-sm text-gray-600">{it.subtitle}</div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <Eye className="h-5 w-5 text-primary/70" />
              <p className={`text-xs font-medium text-primary/70`}>{it.status}</p>
               <Button size="sm" className={`text-xs font-medium ${it.statusColor} w-16`}>
                  {it.type}
                </Button>
              {/* <span className="text-xs text-gray-500">{it.type}</span> */}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
