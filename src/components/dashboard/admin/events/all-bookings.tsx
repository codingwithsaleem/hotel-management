"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Search } from "lucide-react"

const filterSchema = z.object({
  status: z.string().default("all"),
  dateRange: z.string().default("all"),
  category: z.string().default("all"),
  search: z.string().optional(),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface AllBookingsProps {
  onFilter?: (values: FilterFormValues) => void
}

export default function AllBookings({ onFilter }: AllBookingsProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      status: "all",
      dateRange: "all",
      category: "all",
      search: "",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
    console.log("All Bookings filter:", values)
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-primary mb-4">All Bookings</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
          <div className="bg-white/70 rounded-lg p-6 space-y-4">
            {/* First Row - Status and Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Status Dropdown */}
              <div className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">Status</FormLabel>
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                            <SelectValue placeholder="All Statuses" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border border-primary">
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              {/* Date Range Dropdown */}
              <div className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">Date Range</FormLabel>
                <FormField
                  control={form.control}
                  name="dateRange"
                  render={({ field }) => (
                    <FormItem>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                            <SelectValue placeholder="All Events" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border border-primary">
                          <SelectItem value="all">All Events</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="this-month">This Month</SelectItem>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Second Row - Category and Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Dropdown */}
              <div className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">Category</FormLabel>
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                            <SelectValue placeholder="All Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border border-primary">
                          <SelectItem value="all">All Category</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="meeting">Meeting</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="seminar">Seminar</SelectItem>
                          <SelectItem value="party">Party</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              {/* Search Field */}
              <div className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">Search</FormLabel>
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          placeholder="Search Events..."
                          {...field}
                          className="pl-4 pr-12 py-6 border border-primary bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-full rounded-lg"
                        />
                      </FormControl>

                      {/* Search Icon inside input */}
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white"
                        aria-label="Search"
                      >
                        <Search className="h-4 w-4" />
                      </button>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}