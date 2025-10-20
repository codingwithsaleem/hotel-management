'use client'

import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover"
import AllBookingsFilter from "@/components/dashboard/admin/guest-bookings/AllBookingsFilter"
import AllBookingsTable from "@/components/dashboard/admin/guest-bookings/AllBookingsTable"
// import { useState } from "react"


// interface FilterValues {
//   search?: string
//   status: string
//   type: string
// }


const GuestBookingPage = () => {

  //   const [filters, setFilters] = useState<FilterValues>({
  //   search: "",
  //   status: "all",
  //   type: "all",
  // })

  // const handleFilter = (values: FilterValues) => {
  //   setFilters(values)
  //   console.log("Filtering with:", values,)
  //   console.log("Filters:", filters)
  //   // Add your filtering logic here
  // }

//   const handleAddNew = () => {
//     console.log("Add new premise clicked")
//     // Add your modal or navigation logic here
//   }


  return (
    <>
      <DashboardHeroCover heading={"Bookings Management"} buttonsData={[{ label: "+ Create New Booking" }]}>
       <AllBookingsFilter />
      </DashboardHeroCover>
      <AllBookingsTable />
    </>
  )
}

export default GuestBookingPage