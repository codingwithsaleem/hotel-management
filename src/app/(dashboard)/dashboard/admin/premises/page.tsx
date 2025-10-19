'use client'

import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover"
import { AllPremisesTable } from "@/components/dashboard/admin/premises/all-premises-table"
import { PremisesFilter } from "@/components/dashboard/admin/premises/premises-filter"
import { useState } from "react"


interface FilterValues {
  search?: string
  status: string
  type: string
}


const page = () => {

    const [filters, setFilters] = useState<FilterValues>({
    search: "",
    status: "all",
    type: "all",
  })

  const handleFilter = (values: FilterValues) => {
    setFilters(values)
    console.log("Filtering with:", values)
    // Add your filtering logic here
  }

  const handleAddNew = () => {
    console.log("Add new premise clicked")
    // Add your modal or navigation logic here
  }


  return (
    <>
      <DashboardHeroCover heading={"Premises"} buttonsData={[{ label: "+ Add New Premises" }]}>
       <PremisesFilter onFilter={handleFilter} />
      </DashboardHeroCover>
      <AllPremisesTable />
    </>
  )
}

export default page