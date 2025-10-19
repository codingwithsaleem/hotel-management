"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Edit, Trash2 } from "lucide-react"

interface Service {
  id: string
  name: string
  category: string
  type: string
  price: string
  estimatedTime: string
  status: "active" | "inactive" | "maintenance"
}

const sampleServices: Service[] = [
  {
    id: "SRV001",
    name: "Room Cleaning",
    category: "Housekeeping",
    type: "Standard",
    price: "$25.00",
    estimatedTime: "45 mins",
    status: "active"
  },
  {
    id: "SRV002",
    name: "Spa Treatment",
    category: "Wellness",
    type: "Premium",
    price: "$120.00",
    estimatedTime: "90 mins",
    status: "active"
  },
  {
    id: "SRV003",
    name: "Room Service",
    category: "Dining",
    type: "Standard",
    price: "$15.00",
    estimatedTime: "30 mins",
    status: "active"
  },
  {
    id: "SRV004",
    name: "Laundry Service",
    category: "Housekeeping",
    type: "Standard",
    price: "$18.00",
    estimatedTime: "4 hours",
    status: "inactive"
  },
  {
    id: "SRV005",
    name: "Concierge Service",
    category: "Guest Services",
    type: "Premium",
    price: "$50.00",
    estimatedTime: "Variable",
    status: "active"
  },
  {
    id: "SRV006",
    name: "Airport Transfer",
    category: "Transportation",
    type: "Luxury",
    price: "$85.00",
    estimatedTime: "60 mins",
    status: "maintenance"
  },
  {
    id: "SRV007",
    name: "Fitness Training",
    category: "Wellness",
    type: "Premium",
    price: "$75.00",
    estimatedTime: "60 mins",
    status: "active"
  }
]

const statusColors = {
  active: "bg-green-100 text-green-800 hover:bg-green-100",
  inactive: "bg-red-100 text-red-800 hover:bg-red-100",
  maintenance: "bg-orange-100 text-orange-800 hover:bg-orange-100"
}

interface ServiceTableProps {
  services?: Service[]
}

export function ServiceTable({ services = sampleServices }: ServiceTableProps) {
  const handleView = (serviceId: string) => {
    console.log(`View service: ${serviceId}`)
  }

  const handleEdit = (serviceId: string) => {
    console.log(`Edit service: ${serviceId}`)
  }

  const handleDelete = (serviceId: string) => {
    console.log(`Delete service: ${serviceId}`)
  }

  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead className="text-white font-semibold">Name</TableHead>
            <TableHead className="text-white font-semibold">Category</TableHead>
            <TableHead className="text-white font-semibold">Type</TableHead>
            <TableHead className="text-white font-semibold">Price</TableHead>
            <TableHead className="text-white font-semibold">Estimated Time</TableHead>
            <TableHead className="text-white font-semibold">Status</TableHead>
            <TableHead className="text-white font-semibold text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service, index) => (
            <TableRow 
              key={service.id} 
              className={index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}
            >
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.category}</TableCell>
              <TableCell>{service.type}</TableCell>
              <TableCell className="font-semibold text-primary">{service.price}</TableCell>
              <TableCell>{service.estimatedTime}</TableCell>
              <TableCell>
                <Badge className={statusColors[service.status]}>
                  {service.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleView(service.id)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleEdit(service.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDelete(service.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}