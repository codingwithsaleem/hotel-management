"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QrCode, ChevronDown } from "lucide-react"

interface Booking {
  id: string
  guest: string
  room: string
  checkIn: string
  checkOut: string
  status: "confirmed" | "cancelled"
  created: string
}

const sampleBookings: Booking[] = [
  {
    id: "246",
    guest: "Dzupuntaga mamadzuba",
    room: "(Room: 777)",
    checkIn: "Sept. 15, 2025",
    checkOut: "Dec. 12, 2025",
    status: "confirmed",
    created: "Sep 15, 2025"
  },
  {
    id: "245",
    guest: "guesttest@top.com",
    room: "(Room: 777)",
    checkIn: "Sept. 15, 2025",
    checkOut: "Dec. 12, 2025",
    status: "confirmed",
    created: "Sep 15, 2025"
  },
  {
    id: "244",
    guest: "David Gagua",
    room: "(Room: 777)",
    checkIn: "April 27, 2025",
    checkOut: "June 30, 2025",
    status: "cancelled",
    created: "Apr 28, 2025"
  },
  {
    id: "243",
    guest: "David Gagua",
    room: "(Room: 777)",
    checkIn: "April 13, 2025",
    checkOut: "June 30, 2025",
    status: "cancelled",
    created: "Apr 13, 2025"
  },
  {
    id: "242",
    guest: "jbaguest@jba.com",
    room: "(Room: 777)",
    checkIn: "April 1, 2025",
    checkOut: "June 30, 2025",
    status: "confirmed",
    created: "Apr 08, 2025"
  }
]

const statusColors = {
  confirmed: "bg-green-50 text-green-700 border-green-200",
  cancelled: "bg-red-50 text-red-700 border-red-200"
}

interface AllBookingsTableProps {
  bookings?: Booking[]
}

export function AllBookingsTable({ bookings = sampleBookings }: AllBookingsTableProps) {
  const handleQRAction = (bookingId: string, action: string) => {
    console.log(`${action} for booking: ${bookingId}`)
  }

  return (
    <div className="p-6">
      <div className="py-10">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
                <TableRow>
                  <TableHead className="text-foreground font-semibold">ID</TableHead>
                  <TableHead className="text-foreground font-semibold">Guest</TableHead>
                  <TableHead className="text-foreground font-semibold">Room</TableHead>
                  <TableHead className="text-foreground font-semibold">Check-in</TableHead>
                  <TableHead className="text-foreground font-semibold">Check-out</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold">Created</TableHead>
                  <TableHead className="text-foreground font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking, index) => (
                  <TableRow 
                    key={booking.id} 
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                  >
                    <TableCell className="font-medium text-foreground">{booking.id}</TableCell>
                    <TableCell className="text-foreground">{booking.guest}</TableCell>
                    <TableCell className="text-foreground">{booking.room}</TableCell>
                    <TableCell className="text-foreground">{booking.checkIn}</TableCell>
                    <TableCell className="text-foreground">{booking.checkOut}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusColors[booking.status]}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-foreground">{booking.created}</TableCell>
                    <TableCell>
                      <Select onValueChange={(value) => handleQRAction(booking.id, value)}>
                        <SelectTrigger className="h-10 w-32 bg-primary text-white border-primary hover:bg-primary/90">
                          <div className="flex items-center gap-2 text-white">
                            <QrCode className="h-4 w-4 text-white" />
                            <span className="text-sm text-white">QR Code</span>
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="view-details" className="focus:bg-primary/10 focus:text-primary">
                            View Details
                          </SelectItem>
                          <SelectItem value="edit-booking" className="focus:bg-primary/10 focus:text-primary">
                            Edit Booking
                          </SelectItem>
                          <SelectItem value="cancel-booking" className="focus:bg-primary/10 focus:text-primary">
                            Cancel Booking
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllBookingsTable