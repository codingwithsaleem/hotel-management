"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { DatePicker } from "@/components/ui/date-picker"

const filterSchema = z.object({
  searchOrders: z.string().default("all"),
  status: z.string().default("all"),
  date: z.date().optional(),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface FoodOrdersFilterProps {
  onFilter?: (values: FilterFormValues) => void
}

export function FoodOrdersFilter({ onFilter }: FoodOrdersFilterProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      searchOrders: "all",
      status: "all",
      date: undefined,
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
    console.log("Food Orders filter:", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center bg-white/70 rounded-lg p-4">
          
          {/* Search Orders Dropdown */}
          <FormField
            control={form.control}
            name="searchOrders"
            render={({ field }) => (
              <FormItem className="w-full md:w-48">
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                      <SelectValue placeholder="Search Orders" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border border-primary">
                    <SelectItem value="all">Search Orders</SelectItem>
                    <SelectItem value="room-service">Room Service</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="bar">Bar</SelectItem>
                    <SelectItem value="delivery">Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Status Dropdown */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="w-full md:w-48">
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border border-primary">
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="preparing">Preparing</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Date Picker */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                <FormControl>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="MM / DD / YYYY"
                    className="border border-primary px-4 py-6 rounded-lg"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Filter Button */}
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 w-full md:w-auto md:min-w-[120px] text-lg">
            Filter
          </Button>
        </div>
      </form>
    </Form>
  )
}