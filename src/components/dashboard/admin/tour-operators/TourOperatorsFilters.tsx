'use client'

import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"

const filterSchema = z.object({
  verificationStatus: z.string().default("all"),
  search: z.string().default("all"),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface TourOperatorsFiltersProps {
  onFilter?: (values: FilterFormValues) => void
}

export function TourOperatorsFilters({ onFilter }: TourOperatorsFiltersProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      verificationStatus: "all",
      search: "all",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
    console.log("Tour Operators filter:", values)
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Filter Tour Operators</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-white/70 rounded-lg p-4">
            
            {/* Verification Status Dropdown */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Verification Status</label>
              <FormField
                control={form.control}
                name="verificationStatus"
                render={({ field }) => (
                  <FormItem>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                          <SelectValue placeholder="All Statuses" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border border-primary">
                        <SelectItem value="all" className="focus:bg-primary/10 focus:text-primary">All Statuses</SelectItem>
                        <SelectItem value="approved" className="focus:bg-primary/10 focus:text-primary">Approved</SelectItem>
                        <SelectItem value="pending" className="focus:bg-primary/10 focus:text-primary">Pending</SelectItem>
                        <SelectItem value="rejected" className="focus:bg-primary/10 focus:text-primary">Rejected</SelectItem>
                        <SelectItem value="suspended" className="focus:bg-primary/10 focus:text-primary">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Search Dropdown */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                          <SelectValue placeholder="Search by name, contact, email" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border border-primary">
                        <SelectItem value="all" className="focus:bg-primary/10 focus:text-primary">Search by name, contact, email</SelectItem>
                        <SelectItem value="georgicus" className="focus:bg-primary/10 focus:text-primary">Georgicus</SelectItem>
                        <SelectItem value="touroperatortest" className="focus:bg-primary/10 focus:text-primary">Touroperatortest</SelectItem>
                        <SelectItem value="dzupuntaga" className="focus:bg-primary/10 focus:text-primary">Dzupuntaga</SelectItem>
                        <SelectItem value="zgublin" className="focus:bg-primary/10 focus:text-primary">zgublin@zgublin.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Filter Button */}
            <div className="md:col-span-1">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 w-full text-lg">
                Filter
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default TourOperatorsFilters