import HotelClients from '@/components/dashboard/guest/HotelClients'
import RecentReservationsTable from '@/components/dashboard/guest/RecentReservationsTable'
import VisitedHotels from '@/components/dashboard/guest/VisitedHotels'
import React from 'react'

const page = () => {
  return (
    <>
    <HotelClients />
    <RecentReservationsTable />
    <VisitedHotels />
    </>
  )
}

export default page