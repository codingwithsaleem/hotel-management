"use client"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ServiceRequest {
  requestId: string
  customer: string
  service: string
  date: string
  status: "completed"
  amount: string
}

const sampleServiceRequests: ServiceRequest[] = [
  {
    requestId: "65",
    customer: "guesttest@top.com",
    service: "Professional Cleaners",
    date: "16 Sep 2025, 03:07",
    status: "completed",
    amount: "30.00"
  }
]

const statusColors = {
  completed: "bg-green-50 text-green-700 border-green-200"
}

const totalAmount = "30.00"

export function ServiceRequestTable() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Service Requests</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Request ID</TableHead>
                <TableHead className="text-foreground font-semibold">Customer</TableHead>
                <TableHead className="text-foreground font-semibold">Service</TableHead>
                <TableHead className="text-foreground font-semibold">Date</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleServiceRequests.map((request, index) => (
                <TableRow 
                  key={request.requestId} 
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <TableCell className="font-medium text-foreground">{request.requestId}</TableCell>
                  <TableCell className="text-foreground">{request.customer}</TableCell>
                  <TableCell className="text-foreground">{request.service}</TableCell>
                  <TableCell className="text-foreground">{request.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[request.status]}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">{request.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Total Amount Footer */}
        <div className="bg-primary px-6 py-4 flex justify-end">
          <div className="text-white text-lg font-semibold">
            Total Amount: {totalAmount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceRequestTable