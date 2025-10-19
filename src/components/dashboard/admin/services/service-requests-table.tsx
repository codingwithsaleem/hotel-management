"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye } from "lucide-react"

interface ServiceRequest {
  id: string
  service: string
  room: string
  requestedBy: string
  status: "processing" | "completed" | "cancelled" | "pending"
  createdAt: string
}

const sampleServiceRequests: ServiceRequest[] = [
  {
    id: "#25486",
    service: "Housekeeping",
    room: "101",
    requestedBy: "John Smith",
    status: "processing",
    createdAt: "22-12-2023"
  },
  {
    id: "#25487",
    service: "Room Maintenance",
    room: "102",
    requestedBy: "Sarah Johnson",
    status: "completed",
    createdAt: "22-12-2023"
  },
  {
    id: "#25488",
    service: "Spa Services",
    room: "103",
    requestedBy: "Mike Wilson",
    status: "pending",
    createdAt: "22-12-2023"
  },
  {
    id: "#25489",
    service: "Concierge",
    room: "104",
    requestedBy: "Emma Davis",
    status: "processing",
    createdAt: "22-12-2023"
  },
  {
    id: "#25490",
    service: "Laundry Service",
    room: "105",
    requestedBy: "David Brown",
    status: "cancelled",
    createdAt: "22-12-2023"
  },
  {
    id: "#25491",
    service: "Housekeeping",
    room: "106",
    requestedBy: "Lisa Anderson",
    status: "completed",
    createdAt: "22-12-2023"
  },
  {
    id: "#25492",
    service: "Technical Support",
    room: "107",
    requestedBy: "Robert Taylor",
    status: "processing",
    createdAt: "22-12-2023"
  }
]

const statusColors = {
  processing: "bg-orange-100 text-orange-800 hover:bg-orange-100",
  completed: "bg-green-100 text-green-800 hover:bg-green-100",
  cancelled: "bg-red-100 text-red-800 hover:bg-red-100",
  pending: "bg-blue-100 text-blue-800 hover:bg-blue-100"
}

interface ServiceRequestsTableProps {
  serviceRequests?: ServiceRequest[]
}

export function ServiceRequestsTable({ serviceRequests = sampleServiceRequests }: ServiceRequestsTableProps) {
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)

  const handleStatusUpdate = async (requestId: string, newStatus: string) => {
    setUpdatingStatus(requestId)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setUpdatingStatus(null)
    console.log(`Updated request ${requestId} status to ${newStatus}`)
  }

  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead className="text-white font-semibold">ID</TableHead>
            <TableHead className="text-white font-semibold">Service</TableHead>
            <TableHead className="text-white font-semibold">Room</TableHead>
            <TableHead className="text-white font-semibold">Requested By</TableHead>
            <TableHead className="text-white font-semibold">Status</TableHead>
            <TableHead className="text-white font-semibold">Created At</TableHead>
            <TableHead className="text-white font-semibold text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {serviceRequests.map((request, index) => (
            <TableRow 
              key={request.id} 
              className={index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}
            >
              <TableCell className="font-medium text-primary">{request.id}</TableCell>
              <TableCell>{request.service}</TableCell>
              <TableCell>{request.room}</TableCell>
              <TableCell>{request.requestedBy}</TableCell>
              <TableCell>
                <Badge className={statusColors[request.status]}>
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>{request.createdAt}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Select 
                    onValueChange={(value) => handleStatusUpdate(request.id, value)}
                    disabled={updatingStatus === request.id}
                  >
                    <SelectTrigger className="w-32 h-8">
                      <SelectValue placeholder="Update Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}