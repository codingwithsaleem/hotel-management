"use client";

import { Card, CardContent } from "@/components/ui/card";
import DashboardHeroCover from "../admin/dashboard-hero-cover";


const statsData = [
  {
    title: "My Pending Tasks",
    count: "03",
  },
  {
    title: "In Progress",
    count: "01",
  },
  {
    title: "Completed Today",
    count: "0",
  },
  {
    title: "Overdue Tasks",
    count: "02",
  }
];

const heading = "Task Overview";
const buttonsData = [
  { label: "+ New Task" },
  { label: "All Task" },
  { label: "View Hotel Page" },
];

export default function TaskOverviewStaff() {
  // const user = useSelector((state: RootState) => state.user.user);
  return (
    <div>
      <DashboardHeroCover heading={heading} buttonsData={buttonsData}>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-b-4 border-primary border-x-0 border-t-0 pb-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl relative"
            >
              <CardContent className="pb-3">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div
                      className={`text-4xl sm:text-5xl font-bold text-primary`}
                    >
                      {stat.count}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">
                      {stat.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
              {/* <div className="flex items-center justify-between p-1 border-0 rounded-2xl bg-accent absolute bottom-0 left-0 right-0">
        </div> */}
            </Card>
          ))}
        </div>
      </DashboardHeroCover>
    </div>
  );
}
