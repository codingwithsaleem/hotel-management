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
  FileText,
  Files,
  User,
  Users,
  MessageCircle,
  HelpCircle,
  LogOut,
  NotebookText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoSvg from "@/utils/svgs/LogoSvg";
import { useDispatch } from "react-redux";
import authService from "@/lib/services/auth.service";
import { logout, setError, setLoading } from "@/store/slices/userSlice";
import type { AppDispatch } from "@/store/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ApiErrorHandler from "@/lib/utils/error-handler";

// sender sidebar items
const senderSideBarItems = [
  { icon: Home, label: "Dashboard", href: "/sender" },
  { icon: FileText, label: "Create Contract", href: "/sender/create-contract" },
  { icon: Files, label: "Contracts", href: "/sender/contracts" },
  {
    icon: User,
    label: "Account Information",
    href: "/sender/account-information",
  },
  { icon: Users, label: "Contacts", href: "/sender/contacts" },
  { icon: MessageCircle, label: "Contact Us", href: "/sender/contact-us" },
  { icon: NotebookText, label: "Invoices", href: "/sender/invoices" },
  { icon: HelpCircle, label: "Help", href: "/sender/help" },
];

// receiver sidebar items
const receiverSideBarItems = [
  { icon: Home, label: "Dashboard", href: "/receiver" },
  { icon: Files, label: "Contracts", href: "/receiver/contracts" },
  {
    icon: User,
    label: "Account Information",
    href: "/receiver/account-information",
  },
  { icon: MessageCircle, label: "Contact Us", href: "/receiver/contact-us" },
  { icon: HelpCircle, label: "Help", href: "/receiver/help" },
];

// admin sidebar items
const adminSideBarItems = [
  { icon: Home, label: "Dashboard", href: "/admin" },
  { icon: Files, label: "Contract", href: "/admin/contract" },
  { icon: FileText, label: "Reports", href: "/admin/reports" },
  {
    icon: User,
    label: "Account Information",
    href: "/admin/account-information",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const { state } = useSidebar();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Check if current path is dashboard or if we're on the main sender page
  const isActive = (href: string) => {
    return pathname === href || pathname === `/dashboard${href}`;
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
    <Sidebar collapsible="offcanvas" className="border-r-0 bg-[#f8f9ff]">
      <SidebarHeader className="border-b-1 p-6 bg-white">
        <div className="flex items-center">
          {state === "expanded" && (
            //   <h2 className="text-2xl font-bold">fynyl.</h2>
            <LogoSvg />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#f8f9ff] py-10">
        <SidebarMenu className="space-y-0 gap-0">
          {paths.includes("sender") &&
            senderSideBarItems.map((item) => {
              const active = isActive(item.href);
              return (
                <SidebarMenuItem key={item.label} className="rounded-none">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "py-6 lg:py-10 h-14 text-[#64748b] hover:bg-[#8898f0]/10 hover:text-[#8898f0] transition-all duration-200 border-b border-[#e5e7eb] rounded-none",
                      active && "bg-[#8898f0]/10"
                    )}
                  >
                    <Link
                      href={`/dashboard${item.href}`}
                      className="flex items-center space-x-4 px-4 md:px-8"
                    >
                      <item.icon
                        className="h-10 w-10 shrink-0"
                        color={active ? "#8898f0" : "#64748b"}
                      />
                      <span
                        className={cn(
                          "font-medium text-base",
                          active && "font-bold text-black"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          {paths.includes("receiver") &&
            receiverSideBarItems.map((item) => {
              const active = isActive(item.href);
              return (
                <SidebarMenuItem key={item.label} className="rounded-none">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "py-6 lg:py-10 h-14 text-[#64748b] hover:bg-[#8898f0]/10 hover:text-[#8898f0] transition-all duration-200 border-b border-[#e5e7eb] rounded-none",
                      active && "bg-[#8898f0]/10"
                    )}
                  >
                    <Link
                      href={`/dashboard${item.href}`}
                      className="flex items-center space-x-4 px-4 md:px-8"
                    >
                      <item.icon
                        className="h-10 w-10 shrink-0"
                        color={active ? "#8898f0" : "#64748b"}
                      />
                      <span
                        className={cn(
                          "font-medium text-base",
                          active && "font-bold text-black"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          {paths.includes("admin") &&
            adminSideBarItems.map((item) => {
              const active = isActive(item.href);
              return (
                <SidebarMenuItem key={item.label} className="rounded-none">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "py-6 lg:py-10 h-14 text-[#64748b] hover:bg-[#8898f0]/10 hover:text-[#8898f0] transition-all duration-200 border-b border-[#e5e7eb] rounded-none",
                      active && "bg-[#8898f0]/10"
                    )}
                  >
                    <Link
                      href={`/dashboard${item.href}`}
                      className="flex items-center space-x-4 px-4 md:px-8"
                    >
                      <item.icon
                        className="h-10 w-10 shrink-0"
                        color={active ? "#8898f0" : "#64748b"}
                      />
                      <span
                        className={cn(
                          "font-medium text-base",
                          active && "font-bold text-black"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="rounded-none text-white hover:bg-[#7c86e8] transition-all duration-200 bg-[#8898f0] h-17 cursor-pointer"
              onClick={handleSignOut}
            >
              <div className="flex items-center space-x-4 px-4">
                <LogOut className="h-4 w-5 shrink-0" />
                <span className="font-medium text-base">Logout</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
