"use client"

import { Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FoodOrder {
  id: string
  room: string
  total: string
  status: "Delivered" | "Cancelled" | "Pending" | "Preparing"
  createdAt: string
}

const mockFoodOrders: FoodOrder[] = [
  {
    id: "77",
    room: "777",
    total: "$74.75",
    status: "Delivered",
    createdAt: "Sep 15, 2025 04:33",
  },
  {
    id: "76",
    room: "205",
    total: "$46.00",
    status: "Cancelled",
    createdAt: "Sep 10, 2025 17:46",
  },
  {
    id: "75",
    room: "205",
    total: "$46.00",
    status: "Delivered",
    createdAt: "Sep 10, 2025 00:28",
  },
  {
    id: "74",
    room: "205",
    total: "$46.00",
    status: "Delivered",
    createdAt: "Sep 09, 2025 18:53",
  },
  {
    id: "73",
    room: "5050",
    total: "$28.75",
    status: "Delivered",
    createdAt: "Sep 09, 2025 02:59",
  },
]

const getStatusBadgeStyles = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-50 text-green-700 border-green-200"
    case "Cancelled":
      return "bg-red-50 text-red-700 border-red-200"
    case "Pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "Preparing":
      return "bg-blue-50 text-blue-700 border-blue-200"
    default:
      return "bg-gray-50 text-gray-700 border-gray-200"
  }
}

export function FoodOrdersTable() {
  const handleView = (id: string) => {
    console.log("View food order:", id)
  }

  const handleStatusUpdate = (id: string, newStatus: string) => {
    console.log("Update food order status:", id, newStatus)
  }

  return (
    <div className="py-10">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">ID</TableHead>
                <TableHead className="text-foreground font-semibold">Room</TableHead>
                <TableHead className="text-foreground font-semibold">Total</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Created At</TableHead>
                <TableHead className="text-foreground font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFoodOrders.map((order, index) => (
                <TableRow key={order.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <TableCell className="font-medium text-foreground">{order.id}</TableCell>
                  <TableCell className="text-foreground">{order.room}</TableCell>
                  <TableCell className="text-foreground">{order.total}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadgeStyles(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground">{order.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleView(order.id)} className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4 text-primary" />
                      </Button>
                      <Select onValueChange={(value) => handleStatusUpdate(order.id, value)}>
                        <SelectTrigger className="h-8 w-32 text-xs">
                          <SelectValue placeholder="Update Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="preparing">Preparing</SelectItem>
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