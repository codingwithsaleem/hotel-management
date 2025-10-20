'use client'

import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover"
import EventReservationsTable from "@/components/dashboard/admin/finance-statement/EventReservationsTable"
import FoodAndServiceOrdersTable from "@/components/dashboard/admin/finance-statement/FoodAndServiceOrdersTable"
import MonthlyStatement from "@/components/dashboard/admin/finance-statement/MonthlyStatement"
import ServiceRequestTable from "@/components/dashboard/admin/finance-statement/ServiceRequestTable"
import StatementFilter from "@/components/dashboard/admin/finance-statement/StatementFilter"
import TourCommisionsTable from "@/components/dashboard/admin/finance-statement/TourCommisionsTable"
// import { useState } from "react"


// interface FilterValues {
//   search?: string
//   status: string
//   type: string
// }


const FinanceStatementPage = () => {

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
      <DashboardHeroCover heading={"Monthly Statement (Sep 2025)"} buttonsData={[{label: "Calendar View"}, { label: "+ Add New Statement" }]}>
       <MonthlyStatement />
       <StatementFilter />
      </DashboardHeroCover>
      <FoodAndServiceOrdersTable />
      <ServiceRequestTable />
      <EventReservationsTable />
      <TourCommisionsTable />
    </>
  )
}

export default FinanceStatementPage