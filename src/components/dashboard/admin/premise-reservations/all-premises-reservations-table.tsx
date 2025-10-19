"use client"

import { Eye, Pencil, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PremiseReservation {
  id: string
  premise: string
  user: string
  startTime: string
  endTime: string
  status: "Confirmed" | "Cancelled" | "Pending" | "Completed"
}

const mockReservations: PremiseReservation[] = [
  {
    id: "20",
    premise: "Meeting Room",
    user: "guesttest@top.com",
    startTime: "April 23, 2342, 3:04 a.m.",
    endTime: "April 23, 2342, 5:04 a.m.",
    status: "Cancelled",
  },
  {
    id: "116",
    premise: "Tennis Court",
    user: "guesttest@top.com",
    startTime: "Sept. 27, 2025, 8:50 p.m.",
    endTime: "Sept. 27, 2025, 10:50 p.m.",
    status: "Cancelled",
  },
  {
    id: "118",
    premise: "Tennis Court",
    user: "guesttest@top.com",
    startTime: "Sept. 15, 2025, 8:20 p.m.",
    endTime: "Sept. 15, 2025, 10:20 p.m.",
    status: "Confirmed",
  },
]

const getStatusBadgeStyles = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "bg-green-50 text-green-700 border-green-200"
    case "Cancelled":
      return "bg-red-50 text-red-700 border-red-200"
    case "Pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "Completed":
      return "bg-blue-50 text-blue-700 border-blue-200"
    default:
      return "bg-gray-50 text-gray-700 border-gray-200"
  }
}

export function AllPremisesReservationsTable() {
  const handleView = (id: string) => {
    console.log("View reservation:", id)
  }

  const handleEdit = (id: string) => {
    console.log("Edit reservation:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Delete reservation:", id)
  }

  return (
    <div className="py-10">
     {/* Header with title and total count */}
      <div className=" flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">All Premise Reservations</h2>
        <span className="text-primary font-semibold">0{mockReservations.length} Total</span>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
            <TableRow>
              <TableHead className="text-foreground font-semibold">ID</TableHead>
              <TableHead className="text-foreground font-semibold">Premise</TableHead>
              <TableHead className="text-foreground font-semibold">User</TableHead>
              <TableHead className="text-foreground font-semibold">Start Time</TableHead>
              <TableHead className="text-foreground font-semibold">End Time</TableHead>
              <TableHead className="text-foreground font-semibold">Status</TableHead>
              <TableHead className="text-foreground font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockReservations.map((reservation, index) => (
              <TableRow key={reservation.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <TableCell className="font-medium text-foreground">{reservation.id}</TableCell>
                <TableCell className="text-foreground">{reservation.premise}</TableCell>
                <TableCell className="text-foreground">{reservation.user}</TableCell>
                <TableCell className="text-foreground">{reservation.startTime}</TableCell>
                <TableCell className="text-foreground">{reservation.endTime}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusBadgeStyles(reservation.status)}>
                    {reservation.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleView(reservation.id)} className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(reservation.id)} className="h-8 w-8 p-0">
                      <Pencil className="h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(reservation.id)} className="h-8 w-8 p-0">
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