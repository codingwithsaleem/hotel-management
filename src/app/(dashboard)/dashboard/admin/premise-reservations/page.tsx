'use client'

import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover"
import { FilterPremiseReservations } from "@/components/dashboard/admin/premise-reservations/filter-premise-reservations"
import { AllPremisesReservationsTable } from "@/components/dashboard/admin/premise-reservations/all-premises-reservations-table"
import { useState } from "react"

interface FilterValues {
  status: string
  premise: string
  startDate?: Date
  endDate?: Date
  additionalFilter?: string
}

const PremiseReservationPage = () => {
  const [filters, setFilters] = useState<FilterValues>({
    status: "all",
    premise: "all",
    startDate: undefined,
    endDate: undefined,
    additionalFilter: "",
  })

  const handleFilter = (values: FilterValues) => {
    setFilters(values)
    console.log("Filtering premise reservations with:", values)
    // Add your filtering logic here
  }

  const handleClear = () => {
    setFilters({
      status: "all",
      premise: "all",
      startDate: undefined,
      endDate: undefined,
      additionalFilter: "",
    })
    console.log("Filters cleared",filters)
    // Add your clear logic here
  }

  return (
    <>
      <DashboardHeroCover heading={"Premise Reservations"} buttonsData={[{ label: "All Premises" }]}>
        <FilterPremiseReservations onFilter={handleFilter} onClear={handleClear} />
      </DashboardHeroCover>
      <AllPremisesReservationsTable />
    </>
  )
}

export default PremiseReservationPage