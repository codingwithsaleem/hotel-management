import React from "react";
import { HotelInformation } from "@/components/dashboard/admin/hotel-information";
import { MyAssignments } from "@/components/dashboard/admin/my-assignments";
import { Notifications } from "@/components/dashboard/admin/notifications";
import { QuickLinks } from "@/components/dashboard/admin/quick-links";
import { TeamTasksOverview } from "@/components/dashboard/admin/team-tasks-overview";
import { RecentOrdersAndServices } from "@/components/dashboard/admin/recent-orders-and-services";
import { RecentActivities } from "@/components/dashboard/admin/recent-activities";
import TaskOverviewStaff from "@/components/dashboard/staff/TaskOverviewStaff";

const page = () => {

    const links =[
    { label: "Premises Types", href: "/dashboard/staff/premise-types" },
    { label: "Staff", href: "/dashboard/staff" },
    { label: "Hotel Profile", href: "/dashboard/staff/hotel-profile" },
    { label: "Assign Hotels to Users", href: "/dashboard/staff/assign-hotels" },
  ]
  return (
    <>
      <TaskOverviewStaff />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
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
