"use client"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface FoodOrder {
  orderId: string
  room: string
  customer: string
  date: string
  status: "delivered" | "pending"
  amount: string
}

const sampleFoodOrders: FoodOrder[] = [
  {
    orderId: "78",
    room: "777",
    customer: "guesttest@top.com",
    date: "16 Sep 2025, 02:53",
    status: "delivered",
    amount: "63.25"
  },
  {
    orderId: "77", 
    room: "777",
    customer: "guesttest@top.com",
    date: "15 Sep 2025, 04:33",
    status: "delivered",
    amount: "74.75"
  },
  {
    orderId: "75",
    room: "205",
    customer: "guesttest@top.com", 
    date: "10 Sep 2025, 17:46",
    status: "pending",
    amount: "46.00"
  },
  {
    orderId: "74",
    room: "205",
    customer: "guesttest@top.com",
    date: "10 Sep 2025, 00:28", 
    status: "delivered",
    amount: "46.00"
  },
  {
    orderId: "73",
    room: "2025",
    customer: "guesttest@top.com",
    date: "09 Sep 2025, 18:53",
    status: "delivered", 
    amount: "46.00"
  },
  {
    orderId: "72",
    room: "555",
    customer: "მაყვალი ღეშია",
    date: "09 Sep 2025, 02:59",
    status: "pending",
    amount: "28.75"
  }
]

const statusColors = {
  delivered: "bg-green-50 text-green-700 border-green-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200"
}

const totalAmount = "304.75"

export function FoodAndServiceOrdersTable() {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Food & Service Orders</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Order ID</TableHead>
                <TableHead className="text-foreground font-semibold">Room</TableHead>
                <TableHead className="text-foreground font-semibold">Customer</TableHead>
                <TableHead className="text-foreground font-semibold">Date</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleFoodOrders.map((order, index) => (
                <TableRow 
                  key={order.orderId} 
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <TableCell className="font-medium text-foreground">{order.orderId}</TableCell>
                  <TableCell className="text-foreground">{order.room}</TableCell>
                  <TableCell className="text-foreground">{order.customer}</TableCell>
                  <TableCell className="text-foreground">{order.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[order.status]}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">{order.amount}</TableCell>
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

export default FoodAndServiceOrdersTable