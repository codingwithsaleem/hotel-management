"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { DatePicker } from "@/components/ui/date-picker"

const filterSchema = z.object({
  status: z.string().default("all"),
  search: z.string().optional(),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface AllBookingsFilterProps {
  onFilter?: (values: FilterFormValues) => void
  onReset?: () => void
}

export function AllBookingsFilter({ onFilter, onReset }: AllBookingsFilterProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      status: "all",
      search: "",
      fromDate: undefined,
      toDate: undefined,
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
  }

  const handleReset = () => {
    form.reset({
      status: "all",
      search: "",
      fromDate: undefined,
      toDate: undefined,
    })
    onReset?.()
  }

  return (
    <div className="p-6 mb-6">
      <h2 className="text-xl font-semibold text-primary mb-4">All Bookings</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="bg-white/70 rounded-lg p-6 space-y-4">
            {/* First Row - Status and Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Status Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <FormField
                  control={form.control}
                  name="status"
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
                          <SelectItem value="confirmed" className="focus:bg-primary/10 focus:text-primary">Confirmed</SelectItem>
                          <SelectItem value="cancelled" className="focus:bg-primary/10 focus:text-primary">Cancelled</SelectItem>
                          <SelectItem value="pending" className="focus:bg-primary/10 focus:text-primary">Pending</SelectItem>
                          <SelectItem value="completed" className="focus:bg-primary/10 focus:text-primary">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              {/* Search Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="None"
                          {...field}
                          className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Second Row - Date Pickers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* From Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
                <FormField
                  control={form.control}
                  name="fromDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="MM / DD / YYYY"
                          className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 rounded-lg"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* To Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
                <FormField
                  control={form.control}
                  name="toDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="MM / DD / YYYY"
                          className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 rounded-lg"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg font-semibold"
              >
                Apply Filter
              </Button>
              <Button 
                type="button"
                onClick={handleReset}
                variant="outline"
                className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600 px-8 py-6 rounded-lg text-lg font-semibold"
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AllBookingsFilter