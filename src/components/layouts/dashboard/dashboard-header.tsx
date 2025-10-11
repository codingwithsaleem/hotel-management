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
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#8898f0] h-5 w-5 sm:h-6 sm:w-6" />
            <Input
              type="text"
              placeholder="Search here..."
              className="pl-8 sm:pl-10 h-10 sm:h-12 text-lg sm:text-2xl text-[#8898f0] placeholder:text-sm sm:placeholder:text-xl bg-primary/20 placeholder:text-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 gap-4">
          {/* Notification Icon */}
          <div className="relative cursor-pointer hover:bg-accent rounded-full">
            <svg
              width="40"
              height="40"
              className="md:w-[60px] md:h-[60px]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.3"
                cx="30"
                cy="30"
                r="29.25"
                stroke="#8F8DEB"
                strokeWidth="1.5"
              />
              <path
                d="M42.3964 28.6024C41.712 28.6024 41.1568 28.0426 41.1568 27.3525C41.1568 23.8463 39.803 20.5513 37.3447 18.0711C36.8601 17.5825 36.8601 16.7926 37.3447 16.3037C37.8294 15.815 38.6129 15.815 39.0976 16.3037C42.0246 19.2549 43.636 23.1789 43.636 27.3525C43.636 28.0426 43.0808 28.6024 42.3964 28.6024Z"
                fill="#8F8DEB"
              />
              <path
                d="M17.6029 28.6024C16.9187 28.6024 16.3633 28.0426 16.3633 27.3525C16.3633 23.1789 17.9749 19.2549 20.9017 16.3037C21.3864 15.815 22.1699 15.815 22.6546 16.3037C23.1394 16.7926 23.1394 17.5825 22.6546 18.0711C20.1962 20.5499 18.8427 23.8463 18.8427 27.3525C18.8427 28.0426 18.2873 28.6024 17.6029 28.6024Z"
                fill="#8F8DEB"
              />
              <path
                d="M41.6267 36.1414C39.7522 34.5438 38.6774 32.2087 38.6774 29.735V26.25C38.6774 21.8513 35.4369 18.2101 31.2394 17.6001V16.2499C31.2394 15.5587 30.6839 15 29.9998 15C29.3154 15 28.7599 15.5587 28.7599 16.2499V17.6001C24.5613 18.2101 21.3219 21.8513 21.3219 26.25V29.735C21.3219 32.2087 20.2471 34.5438 18.3617 36.1512C17.8794 36.5675 17.6029 37.1725 17.6029 37.8124C17.6029 39.0189 18.576 40.0001 19.7725 40.0001H40.2271C41.4233 40.0001 42.3964 39.0189 42.3964 37.8124C42.3964 37.1725 42.1199 36.5675 41.6267 36.1414Z"
                fill="#8F8DEB"
              />
              <path
                d="M29.9998 45C32.2447 45 34.1228 43.3862 34.5543 41.25H25.4452C25.8765 43.3862 27.7546 45 29.9998 45Z"
                fill="#8F8DEB"
              />
            </svg>

            <span className="absolute top-0 left-5 h-3 w-3 md:h-4 md:w-4 bg-red-500 rounded-full text-[8px] md:text-[10px] text-white flex justify-center items-center">
              9
            </span>
          </div>

          {/* User Profile - Original Desktop Design */}
          <div className="flex items-center border rounded-2xl md:rounded-3xl  md:pr-6 relative h-8 md:h-10 px-4 md:px-12 py-3 md:py-6 md:border-[#8F8DEB]">
            <Avatar className="h-8 w-8 md:h-12 md:w-12 absolute right-0 md:right-36">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xs md:text-lg font-medium text-[#8F8DEB] hidden sm:block">
              {user ? user.fullName : "Guest User"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
