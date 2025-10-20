"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye } from "lucide-react"

interface TourOperator {
  id: string
  name: string
  website: string
  contact: string
  email: string
  phone: string
  tours: number
  bookings: number
  revenue: string
  status: "approved" | "pending" | "rejected" | "suspended"
  lastUpdated: string
  image: string
}

const sampleTourOperators: TourOperator[] = [
  {
    id: "1",
    name: "Georgicus",
    website: "http://testing.com",
    contact: "Dzupuntaga",
    email: "zgublin@zgublin.com",
    phone: "+9955555555",
    tours: 2,
    bookings: 0,
    revenue: "0.00 GEL",
    status: "approved",
    lastUpdated: "Sep 10, 2025",
    image: "/images/tour-operators/georgicus.jpg"
  },
  {
    id: "2",
    name: "Touroperatortest",
    website: "http://testing.com",
    contact: "Dzupuntaga",
    email: "zgublin@zgublin.com",
    phone: "+9955555555",
    tours: 1,
    bookings: 2,
    revenue: "300000.00 GEL",
    status: "approved",
    lastUpdated: "Sep 10, 2025",
    image: "/images/tour-operators/touroperatortest.jpg"
  }
]

const statusColors = {
  approved: "bg-green-50 text-green-700 border-green-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
  suspended: "bg-orange-50 text-orange-700 border-orange-200"
}

interface TourOperatorsTableProps {
  operators?: TourOperator[]
}

export function TourOperatorsTable({ operators = sampleTourOperators }: TourOperatorsTableProps) {
  const handleViewDetails = (operatorId: string) => {
    console.log(`View details for operator: ${operatorId}`)
  }

  const handleViewTours = (operatorId: string) => {
    console.log(`View tours for operator: ${operatorId}`)
  }

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tour Operators (2)</h2>
      
      <div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
                <TableRow>
                  <TableHead className="text-foreground font-semibold">Operator</TableHead>
                  <TableHead className="text-foreground font-semibold">Contact</TableHead>
                  <TableHead className="text-foreground font-semibold">Tours</TableHead>
                  <TableHead className="text-foreground font-semibold">Bookings</TableHead>
                  <TableHead className="text-foreground font-semibold">Revenue</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map((operator, index) => (
                  <TableRow 
                    key={operator.id} 
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                  >
                    <TableCell className="text-foreground">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {operator.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{operator.name}</div>
                          <div className="text-sm text-gray-500">{operator.website}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">
                      <div>
                        <div>{operator.contact} | {operator.email}</div>
                        <div className="text-sm text-gray-500">{operator.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground font-medium">{operator.tours}</TableCell>
                    <TableCell className="text-foreground font-medium">{operator.bookings}</TableCell>
                    <TableCell className="text-foreground font-medium">{operator.revenue}</TableCell>
                    <TableCell>
                      <div>
                        <Badge variant="outline" className={statusColors[operator.status]}>
                          {operator.status.charAt(0).toUpperCase() + operator.status.slice(1)}
                        </Badge>
                        <div className="text-xs text-gray-500 mt-1">Updated: {operator.lastUpdated}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3 text-xs"
                          onClick={() => handleViewDetails(operator.id)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="h-8 px-3 text-xs bg-primary hover:bg-primary/90"
                          onClick={() => handleViewTours(operator.id)}
                        >
                          Tours
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
    </div>
  )
}

export default TourOperatorsTable