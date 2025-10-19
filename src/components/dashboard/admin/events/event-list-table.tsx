"use client"

import { Eye, Pencil, Trash2, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

interface Event {
  id: string
  image: string
  title: string
  category: string
  tours: string
  bookings: string
  status: "Published" | "Draft" | "Cancelled"
  reservations: number
}

const mockEvents: Event[] = [
  {
    id: "1",
    image: "/images/dashboard/event1.jpg",
    title: "42342cwerwer2344234",
    category: "Electronic Music Event",
    tours: "Sep 21, 2025\n11:59 PM - 3:04 AM",
    bookings: "Restaurant",
    status: "Published",
    reservations: 0,
  },
  {
    id: "2", 
    image: "/images/dashboard/event2.jpg",
    title: "Foam Party Dj GujubaFace",
    category: "Electronic Music Event",
    tours: "May 31, 2025\n12:00 AM - 3:59 AM",
    bookings: "Outdoor Pool",
    status: "Published",
    reservations: 1,
  },
  {
    id: "3",
    image: "/images/dashboard/event3.jpg", 
    title: "Test Event",
    category: "Electronic Music Event",
    tours: "May 29, 2025\n12:00 AM - 9:00 AM",
    bookings: "Restaurant",
    status: "Published",
    reservations: 0,
  },
]

export default function EventListTable() {
  const handleView = (id: string) => {
    console.log("View event:", id)
  }

  const handleEdit = (id: string) => {
    console.log("Edit event:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Delete event:", id)
  }

  const handleManageUsers = (id: string) => {
    console.log("Manage users for event:", id)
  }

  return (
    <div className="py-10">
      {/* Header with title and total count */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">Events List</h2>
        <span className="text-primary font-semibold">{mockEvents.length} events found</span>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Image</TableHead>
                <TableHead className="text-foreground font-semibold">Title</TableHead>
                <TableHead className="text-foreground font-semibold">Tours</TableHead>
                <TableHead className="text-foreground font-semibold">Bookings</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Reservations</TableHead>
                <TableHead className="text-foreground font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEvents.map((event, index) => (
                <TableRow key={event.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <TableCell>
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">No Image</div>';
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-foreground">{event.title}</div>
                      <div className="text-sm text-gray-500">{event.category}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-foreground whitespace-pre-line">{event.tours}</div>
                  </TableCell>
                  <TableCell className="text-foreground">{event.bookings}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground text-center">{event.reservations}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleView(event.id)} className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4 text-primary" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(event.id)} className="h-8 w-8 p-0">
                        <Pencil className="h-4 w-4 text-primary" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleManageUsers(event.id)} className="h-8 w-8 p-0">
                        <Users className="h-4 w-4 text-primary" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(event.id)} className="h-8 w-8 p-0">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}