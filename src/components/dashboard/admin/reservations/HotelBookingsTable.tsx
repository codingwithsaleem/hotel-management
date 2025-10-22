import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

// Sample data for hotel bookings
const hotelBookingsData = [
  {
    id: 'HB001',
    guestName: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1234567890',
    roomType: 'Deluxe Suite',
    roomNumber: '205',
    checkIn: '2024-01-15',
    checkOut: '2024-01-20',
    guests: 2,
    totalAmount: 1250.00,
    paymentStatus: 'Paid',
    bookingStatus: 'Confirmed',
    bookingDate: '2024-01-10',
  },
  {
    id: 'HB002',
    guestName: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1234567891',
    roomType: 'Standard Room',
    roomNumber: '112',
    checkIn: '2024-01-18',
    checkOut: '2024-01-22',
    guests: 1,
    totalAmount: 800.00,
    paymentStatus: 'Pending',
    bookingStatus: 'Pending',
    bookingDate: '2024-01-12',
  },
  {
    id: 'HB003',
    guestName: 'Michael Brown',
    email: 'm.brown@email.com',
    phone: '+1234567892',
    roomType: 'Executive Suite',
    roomNumber: '301',
    checkIn: '2024-01-20',
    checkOut: '2024-01-25',
    guests: 3,
    totalAmount: 1800.00,
    paymentStatus: 'Paid',
    bookingStatus: 'Confirmed',
    bookingDate: '2024-01-08',
  },
  {
    id: 'HB004',
    guestName: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '+1234567893',
    roomType: 'Standard Room',
    roomNumber: '158',
    checkIn: '2024-01-22',
    checkOut: '2024-01-24',
    guests: 2,
    totalAmount: 600.00,
    paymentStatus: 'Paid',
    bookingStatus: 'Checked In',
    bookingDate: '2024-01-14',
  },
  {
    id: 'HB005',
    guestName: 'Robert Wilson',
    email: 'r.wilson@email.com',
    phone: '+1234567894',
    roomType: 'Presidential Suite',
    roomNumber: '401',
    checkIn: '2024-01-25',
    checkOut: '2024-01-30',
    guests: 4,
    totalAmount: 2500.00,
    paymentStatus: 'Paid',
    bookingStatus: 'Confirmed',
    bookingDate: '2024-01-05',
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'confirmed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'checked in':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'checked out':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'cancelled':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'paid':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'failed':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'refunded':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const HotelBookingsTable = () => {
  return (
    <div className="py-10">
      {/* Header with title and total count */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">Hotel Bookings</h2>
        <span className="text-primary font-semibold">0{hotelBookingsData.length} Total</span>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Booking ID</TableHead>
                <TableHead className="text-foreground font-semibold">Guest Details</TableHead>
                <TableHead className="text-foreground font-semibold">Room Info</TableHead>
                <TableHead className="text-foreground font-semibold">Stay Period</TableHead>
                <TableHead className="text-foreground font-semibold">Guests</TableHead>
                <TableHead className="text-foreground font-semibold">Amount</TableHead>
                <TableHead className="text-foreground font-semibold">Payment Status</TableHead>
                <TableHead className="text-foreground font-semibold">Booking Status</TableHead>
                <TableHead className="text-foreground font-semibold">Booking Date</TableHead>
                <TableHead className="text-foreground font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hotelBookingsData.map((booking, index) => (
                <TableRow key={booking.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <TableCell className="font-medium text-foreground">
                    {booking.id}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{booking.guestName}</div>
                      <div className="text-sm text-gray-600">{booking.email}</div>
                      <div className="text-sm text-gray-600">{booking.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{booking.roomType}</div>
                      <div className="text-sm text-gray-600">Room {booking.roomNumber}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Check-in:</span> {booking.checkIn}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Check-out:</span> {booking.checkOut}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-medium text-foreground">{booking.guests}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-green-600">
                      ${booking.totalAmount.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={getPaymentStatusColor(booking.paymentStatus)}
                    >
                      {booking.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={getStatusColor(booking.bookingStatus)}
                    >
                      {booking.bookingStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground">
                    {booking.bookingDate}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-2">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-white px-4 py-1 h-8 text-xs font-medium"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 h-8 text-xs font-medium"
                      >
                        Cancel
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
  );
};

export default HotelBookingsTable;