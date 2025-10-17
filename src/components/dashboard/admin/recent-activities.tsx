import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import React from "react";

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      title: "Cancelled premise reservation for Meeting Room",
      subtitle: "guesttest@top.com 1 day, 6 hours ago",
      tag: "Cancelled",
      tagColor: "text-red-600",
    },
    {
      id: 2,
      title: "Cancelled premise reservation for Tennis Court",
      subtitle: "guesttest@top.com 1 day, 6 hours ago",
      tag: "Cancelled",
      tagColor: "text-red-600",
    },
    {
      id: 3,
      title: "Approved premise reservation [R118] for Tennis Court",
      subtitle: "David Gagua 1 day, 6 hours ago",
      tag: "Approved",
      tagColor: "text-green-600",
    },
    {
      id: 4,
      title: "New premise reservation for Tennis Court",
      subtitle: "guesttest@top.com 1 day, 6 hours ago",
      tag: "New",
      tagColor: "text-blue-600",
    },
    {
      id: 5,
      title: "Rejected premise reservation [R117] for Tennis Court",
      subtitle: "David Gagua 1 day, 6 hours ago",
      tag: "Rejected",
      tagColor: "text-red-600",
    },
  ];

  return (
    <Card className="rounded-2xl border-0">
      <CardHeader className="border-b-2 border-b-[#0079FF] pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">Recent Activities</CardTitle>
          <a href="#" className="text-sm font-medium text-[#0079FF] hover:underline">View All</a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-6">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start justify-between gap-4 rounded-lg bg-primary/10 p-4 shadow-sm">
            <div className="flex-1">
              <div className={`font-semibold text-sm ${act.tagColor}`}>{act.title}</div>
              <div className="text-xs text-gray-500">{act.subtitle}</div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Eye className="h-5 w-5 text-blue-400" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
