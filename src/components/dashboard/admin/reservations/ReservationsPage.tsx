'use client';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import HotelBookingsTable from "./HotelBookingsTable";
import PremisesReservationsTable from "./PremisesReservationsTable";

const ReservationsPage = () => {
  const [showCancelled, setShowCancelled] = useState(false);
  const bgImage = "/images/dashboard/bg-3.png";
  return (
    <>
    <div
      className="px-10 py-10 md:py-6 space-y-8 rounded-3xl overflow-hidden shadow-lg bg-black/10"
      style={{
        backgroundImage: `linear-gradient(90deg, #B7D9FC 0%, #B7D9FC00 20%, #FFFFFF33 100%), url('${bgImage}')`,
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
      }}
    >
      <div className="py-4 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          My Reservations
        </h1>
        <div className="flex items-center space-x-3 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-md transition-all duration-200">
          <Switch
            id="show-cancelled-toggle"
            checked={showCancelled}
            onCheckedChange={setShowCancelled}
            className="data-[state=checked]:bg-black data-[state=unchecked]:bg-white/30 
                     h-5 w-9 transition-all duration-300 ease-in-out"
          />
          <Label 
            htmlFor="show-cancelled-toggle" 
            className="text-white font-semibold cursor-pointer select-none"
          >
            Show Cancelled
          </Label>
          
        </div>
      </div>
    </div>
    <HotelBookingsTable />
    <PremisesReservationsTable />
    </>
  );
};

export default ReservationsPage;
