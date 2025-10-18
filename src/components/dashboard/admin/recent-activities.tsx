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
    <Card className="bg-background border-0 shadow-sm py-0">
      <CardHeader className="px-0 bg-primary/5  border-0 rounded-t-lg border-b-2 border-b-primary">
        <div className="flex items-center justify-between p-4">
          <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
          <a href="#" className="text-sm font-medium text-primary hover:underline">View All</a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 py-6">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start justify-between gap-4 rounded-lg bg-primary/10 p-4 shadow-sm">
            <div className="flex-1">
              <div className={`font-semibold text-sm ${act.tagColor}`}>{act.title}</div>
              <div className="text-xs text-gray-500">{act.subtitle}</div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Eye className="h-5 w-5 text-primary/70" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
