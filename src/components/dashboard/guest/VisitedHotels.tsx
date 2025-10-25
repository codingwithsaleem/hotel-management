"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const VisitedHotels = () => {
  const visitedHotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New York, USA",
    },
    {
      id: 2,
      name: "Oceanview Resort",
      location: "Miami, USA",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, USA",
    },
    {
      id: 4,
      name: "City Lights Hotel",
      location: "Los Angeles, USA",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Visited Hotels</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-white rounded-lg shadow-sm">
      {/* Professional Cleaners Service Card */}
      {visitedHotels.map((hotel) => (
        <Card
          key={hotel.id}
          className="overflow-hidden border-0 p-0"
        >
          <div className="h-50 relative">
            <Image
              src="/images/dashboard/services/service-4.png"
              alt="Professional Cleaners"
              className="object-cover w-full h-full"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              }}
              width={300}
              height={200}
            />
          </div>
          <CardContent>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {hotel.name}
            </h3>
            <p className="text-gray-600 mb-4">{hotel.location}</p>
            {/* <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">Price: $30.00</span>
                  </div> */}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 mb-4">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default VisitedHotels;
