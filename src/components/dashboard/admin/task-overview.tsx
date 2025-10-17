'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


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
    title: "Total Active Tasks",
    count: "01",
  },
  {
    title: "Premises",
    count: "06",
  },
  {
    title: "Active Premises",
    count: "06",
  },
  {
    title: "Upcoming Events",
    count: "01",
  },
  {
    title: "Services",
    count: "03",
  },
];

const bgImage = "/images/dashboard/bg-3.png";

export default function TaskOverview() {

  const user = useSelector((state : RootState) => state.user.user);
  return (
    <div
      className="px-10 py-10 md:py-6 space-y-8 rounded-3xl overflow-hidden shadow-lg bg-black/10"
      style={{
      backgroundImage: `linear-gradient(90deg, #B7D9FC 0%, #B7D9FC00 20%, #FFFFFF33 100%), url('${bgImage}')`,
      backgroundSize: "cover, cover",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "center, center",
      }}
    >
      {/* Welcome Section */}
      <div className="mb-8 flex items-center justify-between">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
        Task Overview
      </h1>
      <div className="flex gap-2">
            <Button  className="cursor-pointer font-semibold">
              + New Task
            </Button>
            <Button className="cursor-pointer font-semibold">
              All Task
            </Button>
            <Button className="cursor-pointer font-semibold">
              View Hotel Page
            </Button>
          </div>
      </div>

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
            <div className={`text-4xl sm:text-5xl font-bold text-primary`}>
            {stat.count}
            </div>
            <h3 className="text-base sm:text-lg font-bold">{stat.title}</h3>
          </div>
          </div>
        </CardContent>
        {/* <div className="flex items-center justify-between p-1 border-0 rounded-2xl bg-accent absolute bottom-0 left-0 right-0">
        </div> */}
        </Card>
      ))}
      </div>
    </div>
  );
}
