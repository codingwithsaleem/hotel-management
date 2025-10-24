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

// Sample data for recent reservations based on the image
const recentReservationsData = [
  {
    id: 'RR001',
    hotel: 'Updated Test Hotel 1758072679.429674',
    service: 'Professional Cleaners',
    date: 'Sep 15, 2025 04:33',
    status: 'Cancelled',
  },
  {
    id: 'RR002',
    hotel: 'Updated Test Hotel 1758072679.429674',
    service: 'Professional Cleaners',
    date: 'Sep 10, 2025 17:46',
    status: 'Cancelled',
  },
  {
    id: 'RR003',
    hotel: 'Test Hotel 1758071195.593939',
    service: 'Professional Cleaners',
    date: 'Sep 10, 2025 00:28',
    status: 'Cancelled',
  },
  {
    id: 'RR004',
    hotel: 'Test Hotel 1758071195.593939',
    service: 'Professional Cleaners',
    date: 'Sep 09, 2025 18:53',
    status: 'Confirmed',
  },
  {
    id: 'RR005',
    hotel: 'Test Hotel 1758071195.593939',
    service: 'Professional Cleaners',
    date: 'Sep 09, 2025 02:59',
    status: 'Cancelled',
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'confirmed':
      return 'bg-green-500 text-white border-green-500';
    case 'cancelled':
      return 'bg-blue-500 text-white border-blue-500';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'completed':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const RecentReservationsTable = () => {
  return (
    <div className="py-10">
      {/* Header with title and total count */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">Recent Reservations</h2>
        <span className="text-primary font-semibold">0{recentReservationsData.length} Total</span>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
              <TableRow>
                <TableHead className="text-foreground font-semibold">Hotel</TableHead>
                <TableHead className="text-foreground font-semibold">Service</TableHead>
                <TableHead className="text-foreground font-semibold">Date</TableHead>
                <TableHead className="text-foreground font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentReservationsData.map((reservation, index) => (
                <TableRow key={reservation.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <TableCell className="font-medium text-foreground">
                    {reservation.hotel}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {reservation.service}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {reservation.date}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={getStatusColor(reservation.status)}
                    >
                      {reservation.status}
                    </Badge>
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

export default RecentReservationsTable;