import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover";
import { HotelServicesTabs } from "@/components/dashboard/admin/hotel-services/HotelServicesTabs";
import { MyOrdersAndRequests } from "@/components/dashboard/admin/hotel-services/MyOrdersAndRequests";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardHeroCover
        heading={"Services at Sevsamora"}
        buttonsData={[{ label: "Food Order" }, { label: "Service Request" }]}
      >
        <MyOrdersAndRequests />
      </DashboardHeroCover>
      <HotelServicesTabs />
    </>
  );
};

export default page;
