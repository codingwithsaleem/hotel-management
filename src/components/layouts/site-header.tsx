"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Menu,
  Building2,
  ChevronDown,
  Home,
  LayoutDashboard,
  Settings,
  Map,
  CalendarClock,
  CalendarDays,
  Wrench,
  MapPinned,
  Users,
  LineChart,
  QrCode,
  Hotel,
  Tag,
  HotelIcon,
} from "lucide-react"

// Desktop Header Component
const DesktopHeader = () => {
  const NavLinks = () => (
    <nav className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20" aria-label="Main">
      <Link 
        href="/" 
        className="rounded-xl text-white px-4 py-2 text-sm font-medium"
      >
        Home
      </Link>
      <Link 
        href="/dashboard" 
        className="rounded-xl text-white px-4 py-2 text-sm font-medium"
      >
        Dashboard
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="rounded-xl text-white hover:!bg-transparent hover:!text-white focus:!outline-none focus:!ring-0 focus:!border-none active:!outline-none active:!ring-0 active:!border-none px-4 py-2 h-auto text-sm font-medium"
          >
            Hotel Management <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64 bg-white/95 backdrop-blur-md border-white/20">
          <DropdownMenuLabel className="text-sm font-semibold">Hotel Management</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <MapPinned className="h-4 w-4" />
            Premises
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <CalendarDays className="h-4 w-4" />
            Premise Reservations
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <CalendarDays className="h-4 w-4" />
            Events
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <Wrench className="h-4 w-4" />
            Services
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <Map className="h-4 w-4" />
            Tour Operators
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <Users className="h-4 w-4" />
            Staff Management
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <LineChart className="h-4 w-4" />
            Finance Statement
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <QrCode className="h-4 w-4" />
            Guest Bookings & QR
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="rounded-xl text-white hover:!bg-transparent hover:!text-white focus:!outline-none focus:!ring-0 focus:!border-none active:!outline-none active:!ring-0 active:!border-none px-4 py-2 h-auto text-sm font-medium"
          >
            Configuration <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64 bg-white/95 backdrop-blur-md border-white/20">
          <DropdownMenuLabel className="text-sm font-semibold">Configuration</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <Tag className="h-4 w-4" />
            Premise Types
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <Hotel className="h-4 w-4" />
            Hotel Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <Users className="h-4 w-4" />
           Assign Hotels to Users
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="rounded-xl text-white hover:!bg-transparent hover:!text-white focus:!outline-none focus:!ring-0 focus:!border-none active:!outline-none active:!ring-0 active:!border-none px-4 py-2 h-auto text-sm font-medium"
          >
            Guest Features <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72 bg-white/95 backdrop-blur-md border-white/20">
          <DropdownMenuLabel className="text-sm font-semibold">Guest Features</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <MapPinned className="h-4 w-4" />
            Reservations
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <HotelIcon className="h-4 w-4" />
            Hotel Services
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-blue-50">
            <CalendarDays className="h-4 w-4" />
           Loyalty Program (coming soon)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )

  const RightCluster = () => (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/20 backdrop-blur-sm text-white px-4 py-3 border text-sm font-medium">
        Managing: <span className="font-semibold">Sevsamora</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="rounded-xl bg-primary backdrop-blur-sm text-white hover:bg-primary/80 hover:text-white transition-colors h-auto p-2 pr-3 gap-2"
          >
            <Avatar className="h-8 w-8 border-2 border-white/20">
              <AvatarImage src="/placeholder-user.jpg" alt="David Gagua" />
              <AvatarFallback className="bg-blue-600 text-white text-sm font-semibold">DG</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">David Gagua</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-md border-white/20">
          <DropdownMenuLabel className="text-sm">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <Settings className="h-4 w-4" />
            Profile Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Users className="h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 text-red-600">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">MyHotel.space</span>
        </Link>
      </div>
      
      {/* Center: Navigation */}
      <div className="flex items-center justify-center flex-1">
        <NavLinks />
      </div>
      
      {/* Right: User Controls */}
      <div className="flex items-center">
        <RightCluster />
      </div>
    </div>
  )
}

// Mobile Header Component
const MobileHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">MyHotel.space</span>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 h-10 w-10"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-80 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-white/20 text-white p-0 overflow-hidden flex flex-col [&>button]:h-8 [&>button]:w-8 [&>button]:text-white [&>button>svg]:h-6 [&>button>svg]:w-6"
        >
          <div className="flex-shrink-0 p-6 pb-0">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">MyHotel.space</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6">
            <div className="grid gap-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </Link>

            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-4 text-sm font-semibold border-b border-white/20">Hotel Management</div>
              <div className="p-4 space-y-2">
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">Property Management</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Room Management</span>
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-4 text-sm font-semibold border-b border-white/20">Configuration</div>
              <div className="p-4 space-y-2">
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">General Settings</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Map className="h-4 w-4" />
                  <span className="text-sm">Locations & Maps</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <CalendarClock className="h-4 w-4" />
                  <span className="text-sm">Calendars</span>
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-4 text-sm font-semibold border-b border-white/20">Guest Features</div>
              <div className="p-4 space-y-2">
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <MapPinned className="h-4 w-4" />
                  <span className="text-sm">Premises</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm">Premise Reservations</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm">Events</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Wrench className="h-4 w-4" />
                  <span className="text-sm">Services</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Map className="h-4 w-4" />
                  <span className="text-sm">Tour Operators</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Staff Management</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <LineChart className="h-4 w-4" />
                  <span className="text-sm">Finance Statement</span>
                </button>
                <button className="w-full text-left flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <QrCode className="h-4 w-4" />
                  <span className="text-sm">Guest Bookings & QR</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12 border-2 border-white/20">
                  <AvatarImage src="/placeholder-user.jpg" alt="David Gagua" />
                  <AvatarFallback className="bg-blue-600 text-white font-semibold">DG</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white">David Gagua</div>
                  <div className="text-sm text-white/70">Managing: Sevsamora</div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-white hover:bg-white/10 rounded-xl"
                onClick={() => setOpen(false)}
              >
                Logout
              </Button>
            </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0" />
        <div className="absolute inset-0 opacity-20" />
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="flex h-20 items-center">
              {/* Desktop Header */}
              <div className="hidden lg:block w-full">
                <DesktopHeader />
              </div>
              
              {/* Mobile Header */}
              <div className="lg:hidden w-full">
                <MobileHeader />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
