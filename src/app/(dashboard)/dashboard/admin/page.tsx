import Charts from "@/components/dashboard/admin/charts";
import { HotelInformation } from "@/components/dashboard/admin/hotel-information";
import { MyAssignments } from "@/components/dashboard/admin/my-assignments";
import { Notifications } from "@/components/dashboard/admin/notifications";
import { QuickLinks } from "@/components/dashboard/admin/quick-links";
import TaskOverview from "@/components/dashboard/admin/task-overview";
import { TeamTasksOverview } from "@/components/dashboard/admin/team-tasks-overview";
import { RecentOrdersAndServices } from "@/components/dashboard/admin/recent-orders-and-services";
import { RecentActivities } from "@/components/dashboard/admin/recent-activities";
import React from "react";

const page = () => {

    const links =[
    { label: "Premises", href: "/premises" },
    { label: "Staff", href: "/staff" },
    { label: "Hotel Profile", href: "/hotel-profile" },
    { label: "Services", href: "/services" },
  ]
  return (
    <>
      <TaskOverview />
      <Charts />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <QuickLinks links={links} />
        <Notifications />
        <HotelInformation />
      </div>
      <div className="grid gap-6 lg:grid-cols-2 py-10">
        <MyAssignments />
        <TeamTasksOverview />
        <RecentOrdersAndServices />
        <RecentActivities />
      </div>
    </>
  );
};

export default page;
