"use client"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TourCommission {
  bookingId: string
  customer: string
  tour: string
  participants: string
  date: string
  status: "confirmed"
  totalAmount: string
  commissionPercent: string
  amount: string
}

const sampleTourCommissions: TourCommission[] = [
  {
    bookingId: "66",
    customer: "guesttest@top.com",
    tour: "Space Travel",
    participants: "1",
    date: "16 Sep 2025, 02:53",
    status: "confirmed",
    totalAmount: "150000.00",
    commissionPercent: "15.0%",
    amount: "22500.00"
  },
  {
    bookingId: "14",
    customer: "guesttest@top.com", 
    tour: "Space Travel",
    participants: "2",
    date: "10 Sep 2025, 04:33",
    status: "confirmed",
    totalAmount: "300000.00",
    commissionPercent: "15.0%",
    amount: "45000.00"
  }
]

const statusColors = {
  confirmed: "bg-green-50 text-green-700 border-green-200"
}

const totalCommission = "67500.00"

export function TourCommissionsTable() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tour Commissions</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Booking ID</TableHead>
                <TableHead className="text-foreground font-semibold">Customer</TableHead>
                <TableHead className="text-foreground font-semibold">Tour</TableHead>
                <TableHead className="text-foreground font-semibold">Participants</TableHead>
                <TableHead className="text-foreground font-semibold">Date</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Total Amount</TableHead>
                <TableHead className="text-foreground font-semibold">Commission %</TableHead>
                <TableHead className="text-foreground font-semibold">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleTourCommissions.map((commission, index) => (
                <TableRow 
                  key={commission.bookingId} 
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <TableCell className="font-medium text-foreground">{commission.bookingId}</TableCell>
                  <TableCell className="text-foreground">{commission.customer}</TableCell>
                  <TableCell className="text-foreground">{commission.tour}</TableCell>
                  <TableCell className="text-foreground">{commission.participants}</TableCell>
                  <TableCell className="text-foreground">{commission.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[commission.status]}>
                      {commission.status.charAt(0).toUpperCase() + commission.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">{commission.totalAmount}</TableCell>
                  <TableCell className="font-semibold text-foreground">{commission.commissionPercent}</TableCell>
                  <TableCell className="font-semibold text-foreground">{commission.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Total Commission Footer */}
        <div className="bg-primary px-6 py-4 flex justify-end">
          <div className="text-white text-lg font-semibold">
            Total Commission: {totalCommission}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourCommissionsTable