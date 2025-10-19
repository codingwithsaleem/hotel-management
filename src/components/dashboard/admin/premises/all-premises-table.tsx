"use client"

import { Eye, Pencil, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Premise {
  id: string
  name: string
  type: string
  location: string
  capacity: string
  status: "Active" | "Inactive"
  notifications: string
}

const mockPremises: Premise[] = [
  {
    id: "1",
    name: "Meeting Room",
    type: "Meeting Room",
    location: "Sevsamora Hotel Building",
    capacity: "200 people",
    status: "Active",
    notifications: "No Notifications",
  },
  {
    id: "2",
    name: "Outdoor Pool",
    type: "Outdoor Swimming pool",
    location: "Sevsamora Outdoor",
    capacity: "150 people",
    status: "Active",
    notifications: "No Notifications",
  },
  {
    id: "3",
    name: "Restaurant",
    type: "Restaurant",
    location: "Sevsamora Restaurant Building",
    capacity: "350 people",
    status: "Active",
    notifications: "No Notifications",
  },
  {
    id: "4",
    name: "Sevsamera Cafe",
    type: "Cafe",
    location: "Sevsamora Hotel Building",
    capacity: "50 people",
    status: "Active",
    notifications: "No Notifications",
  },
  {
    id: "5",
    name: "Spa",
    type: "Spa",
    location: "Sevsamora Main building",
    capacity: "10 people",
    status: "Active",
    notifications: "No Notifications",
  },
  {
    id: "6",
    name: "Tennis Court",
    type: "Tennis Court",
    location: "Sevsamora Stadium",
    capacity: "Not specified",
    status: "Active",
    notifications: "No Notifications",
  },
]

export function AllPremisesTable() {
  const handleView = (id: string) => {
    console.log("View premise:", id)
  }

  const handleEdit = (id: string) => {
    console.log("Edit premise:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Delete premise:", id)
  }

  return (
    <div className="py-10">
     {/* Header with title and total count */}
      <div className=" flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">All Premises</h2>
        <span className="text-primary font-semibold">0{mockPremises.length} Total</span>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
            <TableRow>
              <TableHead className="text-foreground font-semibold">Name</TableHead>
              <TableHead className="text-foreground font-semibold">Type</TableHead>
              <TableHead className="text-foreground font-semibold">Location</TableHead>
              <TableHead className="text-foreground font-semibold">Capacity</TableHead>
              <TableHead className="text-foreground font-semibold">Status</TableHead>
              <TableHead className="text-foreground font-semibold">Notifications</TableHead>
              <TableHead className="text-foreground font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPremises.map((premise, index) => (
              <TableRow key={premise.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <TableCell className="font-medium text-foreground">{premise.name}</TableCell>
                <TableCell className="text-foreground">{premise.type}</TableCell>
                <TableCell className="text-foreground">{premise.location}</TableCell>
                <TableCell className="text-foreground">{premise.capacity}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {premise.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{premise.notifications}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleView(premise.id)} className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(premise.id)} className="h-8 w-8 p-0">
                      <Pencil className="h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(premise.id)} className="h-8 w-8 p-0">
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
