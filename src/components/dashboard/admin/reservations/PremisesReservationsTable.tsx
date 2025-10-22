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
import { Eye, MapPin } from 'lucide-react';

// Sample data for premises reservations
const premisesReservationsData = [
  {
    id: 'PR001',
    customerName: 'Corporate Events Inc.',
    email: 'events@corporate.com',
    phone: '+1234567890',
    premiseType: 'Conference Hall A',
    eventType: 'Business Conference',
    date: '2024-01-25',
    startTime: '09:00 AM',
    endTime: '05:00 PM',
    duration: '8 hours',
    attendees: 150,
    totalAmount: 2800.00,
    paymentStatus: 'Paid',
    reservationStatus: 'Confirmed',
    bookingDate: '2024-01-10',
    specialRequests: 'Audio/Visual equipment needed',
  },
  {
    id: 'PR002',
    customerName: 'Sarah & Mike Wedding',
    email: 'sarah.mike@email.com',
    phone: '+1234567891',
    premiseType: 'Grand Ballroom',
    eventType: 'Wedding Reception',
    date: '2024-02-14',
    startTime: '06:00 PM',
    endTime: '11:00 PM',
    duration: '5 hours',
    attendees: 200,
    totalAmount: 4500.00,
    paymentStatus: 'Partial',
    reservationStatus: 'Confirmed',
    bookingDate: '2023-12-15',
    specialRequests: 'Decoration setup, Photography area',
  },
  {
    id: 'PR003',
    customerName: 'Tech Startup Meetup',
    email: 'info@techstartup.com',
    phone: '+1234567892',
    premiseType: 'Meeting Room B',
    eventType: 'Product Launch',
    date: '2024-01-30',
    startTime: '02:00 PM',
    endTime: '06:00 PM',
    duration: '4 hours',
    attendees: 50,
    totalAmount: 1200.00,
    paymentStatus: 'Pending',
    reservationStatus: 'Pending',
    bookingDate: '2024-01-18',
    specialRequests: 'Projector and screen setup',
  },
  {
    id: 'PR004',
    customerName: 'Birthday Celebration',
    email: 'party@birthday.com',
    phone: '+1234567893',
    premiseType: 'Garden Pavilion',
    eventType: 'Birthday Party',
    date: '2024-02-05',
    startTime: '03:00 PM',
    endTime: '08:00 PM',
    duration: '5 hours',
    attendees: 75,
    totalAmount: 1800.00,
    paymentStatus: 'Paid',
    reservationStatus: 'Confirmed',
    bookingDate: '2024-01-20',
    specialRequests: 'Outdoor lighting, Sound system',
  },
  {
    id: 'PR005',
    customerName: 'Annual Gala Committee',
    email: 'gala@committee.org',
    phone: '+1234567894',
    premiseType: 'Grand Ballroom',
    eventType: 'Charity Gala',
    date: '2024-03-15',
    startTime: '07:00 PM',
    endTime: '12:00 AM',
    duration: '5 hours',
    attendees: 300,
    totalAmount: 6000.00,
    paymentStatus: 'Paid',
    reservationStatus: 'Confirmed',
    bookingDate: '2024-01-05',
    specialRequests: 'Stage setup, Live band area, Auction display',
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'confirmed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'in progress':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'completed':
      return 'bg-purple-100 text-purple-800 border-purple-200';
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
    case 'partial':
      return 'bg-orange-100 text-orange-800 border-orange-200';
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

const PremisesReservationsTable = () => {
  return (
    <div className="py-10">
      {/* Header with title and total count */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">Premises Reservations</h2>
        <span className="text-primary font-semibold">0{premisesReservationsData.length} Total</span>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Reservation ID</TableHead>
                <TableHead className="text-foreground font-semibold">Customer Details</TableHead>
                <TableHead className="text-foreground font-semibold">Premise & Event</TableHead>
                <TableHead className="text-foreground font-semibold">Event Schedule</TableHead>
                <TableHead className="text-foreground font-semibold">Attendees</TableHead>
                <TableHead className="text-foreground font-semibold">Amount</TableHead>
                <TableHead className="text-foreground font-semibold">Payment Status</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
                <TableHead className="text-foreground font-semibold">Special Requests</TableHead>
                <TableHead className="text-foreground font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {premisesReservationsData.map((reservation, index) => (
                <TableRow key={reservation.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <TableCell className="font-medium text-foreground">
                    {reservation.id}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{reservation.customerName}</div>
                      <div className="text-sm text-gray-600">{reservation.email}</div>
                      <div className="text-sm text-gray-600">{reservation.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        {reservation.premiseType}
                      </div>
                      <div className="text-sm text-gray-600">{reservation.eventType}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Date:</span> {reservation.date}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Time:</span> {reservation.startTime} - {reservation.endTime}
                      </div>
                      <div className="text-sm text-gray-600">
                        Duration: {reservation.duration}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-medium text-foreground">{reservation.attendees}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-green-600">
                      ${reservation.totalAmount.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={getPaymentStatusColor(reservation.paymentStatus)}
                    >
                      {reservation.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={getStatusColor(reservation.reservationStatus)}
                    >
                      {reservation.reservationStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="text-sm text-gray-600 truncate" title={reservation.specialRequests}>
                      {reservation.specialRequests}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-white px-4 py-1 h-8 text-xs font-medium"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Details
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

export default PremisesReservationsTable;