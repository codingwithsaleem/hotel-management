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
  processing: "bg-blue-50 text-blue-700 border-blue-200",
  completed: "bg-green-50 text-green-700 border-green-200",
  cancelled: "bg-red-50 text-red-700 border-red-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200"
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
    <div className="py-10">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">ID</TableHead>
                <TableHead className="text-foreground font-semibold">Service</TableHead>
                <TableHead className="text-foreground font-semibold">Room</TableHead>
                <TableHead className="text-foreground font-semibold">Requested By</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Created At</TableHead>
                <TableHead className="text-foreground font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serviceRequests.map((request, index) => (
                <TableRow 
                  key={request.id} 
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <TableCell className="font-medium text-foreground">{request.id}</TableCell>
                  <TableCell className="text-foreground">{request.service}</TableCell>
                  <TableCell className="text-foreground">{request.room}</TableCell>
                  <TableCell className="text-foreground">{request.requestedBy}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[request.status]}>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground">{request.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4 text-primary" />
                      </Button>
                      <Select 
                        onValueChange={(value) => handleStatusUpdate(request.id, value)}
                        disabled={updatingStatus === request.id}
                      >
                        <SelectTrigger className="h-8 w-32 text-xs">
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
      </div>
    </div>
  )
}