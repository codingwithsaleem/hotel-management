"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Building2,
  Settings,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "@/lib/services/auth.service";
import { logout, setError, setLoading } from "@/store/slices/userSlice";
import type { AppDispatch } from "@/store/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ApiErrorHandler from "@/lib/utils/error-handler";
import Image from "next/image";

const sideBarItems = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/dashboard",
    isMainItem: true,
  },
  {
    icon: Building2,
    label: "Hotel Management",
    href: "/hotel-management",
    isExpandable: true,
    dropdown: [
      {
        label: "Premises",
        href: "/dashboard/admin/premises",
      },
      {
        label: "Premise Reservations",
        href: "/dashboard/admin/premise-reservations",
      },
      {
        label: "Events",
        href: "/dashboard/admin/events",
      },
      {
        label: "Services",
        href: "/dashboard/admin/services",
      },
      { label: "Tour Operators", href: "/dashboard/admin/tour-operators" },
      { label: "Staff Management", href: "/dashboard/admin/staff-management" },
      { label: "Finance Statement", href: "/dashboard/admin/finance-statement" },
      { label: "Guest Bookings & QR", href: "/dashboard/admin/guest-bookings" },
    ],
  },
  {
    icon: Settings,
    label: "Configuration",
    href: "/configuration",
    isExpandable: true,
    dropdown: [
      { label: "Premise Types", href: "/premise-types" },
      { label: "Hotel Profile", href: "/hotel-profile" },
      { label: "Assign Hotels to Users", href: "/assign-hotels" },
    ],
  },
  {
    icon: Users,
    label: "Guest Features",
    href: "/guest-features",
    isExpandable: true,
    dropdown: [
      { label: "Reservations", href: "/reservations" },
      { label: "Hotel Services", href: "/hotel-services" },
      { label: "Loyalty Programs", href: "/loyalty-programs" },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const { state } = useSidebar();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Hotel Management']);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const handleSignOut = async () => {
    try {
      // Set loading state
      dispatch(setLoading(true));

      // Call auth service directly
      const response = await authService.logout();

      if (response.success) {
        // Dispatch logout action to clear Redux state
        dispatch(logout());

        toast.success("Logged out successfully!");
        router.push("/login");
      } else {
        dispatch(setError(response.message || "Logout failed"));
      }
    } catch (error) {
      const errorMessage = ApiErrorHandler.getErrorMessage(error);
      dispatch(setError(errorMessage));
      toast.error("Logout failed. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Sidebar collapsible="offcanvas" className="border-r-1 border-gray-200 bg-white">
      <SidebarHeader className="border-b-1 border-gray-200 p-6 bg-white">
        <div className="flex items-center">
          <Image
            src="/images/logo1.svg"
            alt="Hotel Management Logo"
            width={200}
            height={40}
            className="w-100 h-10"
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white py-10 pl-4">
        <div className="space-y-0">
          {sideBarItems.map((item) => {
            const isExpanded = expandedItems.includes(item.label);
            const isActive = pathname === item.href;
            
            return (
              <div key={item.label} className="w-full">
                {/* Main Item */}
                <div 
                  className={cn(
                    "w-full transition-all duration-200 text-lg mb-2",
                    item.isMainItem && "bg-primary/15"
                  )}
                >
                  {item.isExpandable ? (
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-6 text-left transition-all duration-200",
                        "hover:bg-primary/15 text-gray-700 font-medium"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "w-full flex items-center space-x-3 px-4 py-6 transition-all duration-200",
                        item.isMainItem 
                          ? "text-black font-semibold" 
                          : "text-gray-700 hover:bg-blue-50 font-medium"
                      )}
                    >
                      <item.icon className={cn(
                        "h-5 w-5",
                        item.isMainItem ? "text-primary" : "text-primary"
                      )} />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  )}
                </div>

                {/* Dropdown Items */}
                {item.isExpandable && isExpanded && item.dropdown && (
                  <div className="bg-white border-l-2 border-blue-200 ml-4">
                    <ul className="py-2">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="block px-6 py-2 text-sm text-primary/80 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
                          >
                            • {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
