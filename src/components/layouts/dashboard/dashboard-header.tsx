"use client";

import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {  Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function DashboardHeader() {
  const user = useSelector((state : RootState) => state.user.user);
  console.log("User in header:", user);
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-white/20">
      <div className="flex items-center justify-between px-3 sm:px-6 py-4">
        <div className="flex items-center space-x-2 sm:space-x-6">
          <SidebarTrigger className="-ml-1 mx-2 md:mx-0" />
          <Separator orientation="vertical" className="mr-2 h-4 hidden sm:block" />
          <h3 className="text-lg sm:text-xl font-semibold text-[#383838] hidden sm:block">Dashboard</h3>
        </div>

        {/* Search - Hidden on mobile, shown on tablet+ */}
        <div className="flex-1 max-w-md mx-4 sm:mx-8 hidden lg:block">
          <div className="relative flex justify-center items-center">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 sm:h-6 sm:w-6" />
            <Input
              type="text"
              placeholder="Search here..."
              className="pl-8 sm:pl-10 h-10 sm:h-12 text-lg sm:text-2xl text-primary placeholder:text-sm sm:placeholder:text-xl bg-primary/20 placeholder:text-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 gap-4">
          {/* Notification Icon */}
          <div className="relative cursor-pointer hover:bg-accent rounded-full">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.3" cx="30" cy="30" r="29.25" stroke="#006CE4" stroke-width="1.5"/>
<path d="M42.3969 28.6024C41.7125 28.6024 41.1573 28.0426 41.1573 27.3525C41.1573 23.8463 39.8035 20.5513 37.3452 18.0711C36.8606 17.5825 36.8606 16.7926 37.3452 16.3037C37.8298 15.815 38.6134 15.815 39.098 16.3037C42.0251 19.2549 43.6365 23.1789 43.6365 27.3525C43.6365 28.0426 43.0813 28.6024 42.3969 28.6024Z" fill="#006CE4"/>
<path d="M17.6034 28.6024C16.9192 28.6024 16.3638 28.0426 16.3638 27.3525C16.3638 23.1789 17.9754 19.2549 20.9022 16.3037C21.3869 15.815 22.1704 15.815 22.655 16.3037C23.1399 16.7926 23.1399 17.5825 22.655 18.0711C20.1967 20.5499 18.8432 23.8463 18.8432 27.3525C18.8432 28.0426 18.2877 28.6024 17.6034 28.6024Z" fill="#006CE4"/>
<path d="M41.6272 36.1414C39.7527 34.5438 38.6779 32.2087 38.6779 29.735V26.25C38.6779 21.8513 35.4374 18.2101 31.2398 17.6001V16.2499C31.2398 15.5587 30.6844 15 30.0002 15C29.3159 15 28.7604 15.5587 28.7604 16.2499V17.6001C24.5618 18.2101 21.3224 21.8513 21.3224 26.25V29.735C21.3224 32.2087 20.2476 34.5438 18.3622 36.1512C17.8798 36.5675 17.6034 37.1725 17.6034 37.8124C17.6034 39.0189 18.5765 40.0001 19.7729 40.0001H40.2275C41.4238 40.0001 42.3969 39.0189 42.3969 37.8124C42.3969 37.1725 42.1204 36.5675 41.6272 36.1414Z" fill="#006CE4"/>
<path d="M30.0002 45C32.2452 45 34.1233 43.3862 34.5548 41.25H25.4457C25.877 43.3862 27.7551 45 30.0002 45Z" fill="#006CE4"/>
</svg>

            <span className="absolute top-0 left-5 h-3 w-3 md:h-4 md:w-4 bg-red-500 rounded-full text-[8px] md:text-[10px] text-white flex justify-center items-center">
              9
            </span>
          </div>

          {/* User Profile - Original Desktop Design */}
          <div className="flex items-center border rounded-lg  md:pr-6 relative h-8 md:h-10 px-4 py-3 md:py-6 md:border-primary gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xs md:text-lg font-medium text-primary hidden sm:block">
              {user ? user.fullName : "Guest User"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
