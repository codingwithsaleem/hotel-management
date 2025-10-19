'use client'

import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FoodOrdersFilter } from "@/components/dashboard/admin/services/food-orders-filter"
import { FoodOrdersTable } from "@/components/dashboard/admin/services/food-orders-table"
import { ServiceRequestsFilter } from "@/components/dashboard/admin/services/service-requests-filter"
import { ServiceRequestsTable } from "@/components/dashboard/admin/services/service-requests-table"
import { ServiceFilter } from "@/components/dashboard/admin/services/service-filter"
import { ServiceTable } from "@/components/dashboard/admin/services/service-table"

const AdminServicesPage = () => {
  return (
    <>
      <DashboardHeroCover heading={"Services Management"} buttonsData={[{ label: "+ Add New Service" }, { label: "Create Service Order" }, { label: "Create Service Request" }]}>
       <></>
      </DashboardHeroCover>
      
      <div className="p-6">
        <Tabs defaultValue="food-orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="food-orders" className="text-lg font-medium">Food Orders</TabsTrigger>
            <TabsTrigger value="service-requests" className="text-lg font-medium">Service Requests</TabsTrigger>
            <TabsTrigger value="service" className="text-lg font-medium">Service</TabsTrigger>
          </TabsList>

          <TabsContent value="food-orders" className="space-y-6">
            <FoodOrdersFilter />
            <FoodOrdersTable />
          </TabsContent>

          <TabsContent value="service-requests" className="space-y-6">
            <ServiceRequestsFilter />
            <ServiceRequestsTable />
          </TabsContent>

          <TabsContent value="service" className="space-y-6">
            <ServiceFilter />
            <ServiceTable />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default AdminServicesPage