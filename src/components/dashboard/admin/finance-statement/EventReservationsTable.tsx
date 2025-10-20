"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const totalAmount = "0.00"

export function EventReservationsTable() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Reservations</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Reservation ID</TableHead>
                <TableHead className="text-foreground font-semibold">Customer</TableHead>
                <TableHead className="text-foreground font-semibold">Event</TableHead>
                <TableHead className="text-foreground font-semibold">Date</TableHead>
                <TableHead className="text-foreground font-semibold">Guests</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-white">
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  No paid event reservations found for this period.
                </TableCell>
              </TableRow>
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

export default EventReservationsTable