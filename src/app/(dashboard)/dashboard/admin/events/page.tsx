"use client";

import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover";
import AllBookings from "@/components/dashboard/admin/events/all-bookings";
import EventListTable from "@/components/dashboard/admin/events/event-list-table";
import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const statsData = [
  {
    title: "Total Events",
    count: "03",
  },
  {
    title: "Published Events",
    count: "0",
  },
  {
    title: "Upcoming Events",
    count: "0",
  },
  {
    title: "Total Reservations",
    count: "0",
  },
];

const heading = "Event Management";
const buttonsData = [
  { label: "Calendar View" },
  { label: "+ Create New Event" },
];

export default function page() {
  const user = useSelector((state: RootState) => state.user.user);
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
            </Card>
          ))}
        </div>
        <AllBookings />
      </DashboardHeroCover>
      <EventListTable />
    </div>
  );
}
