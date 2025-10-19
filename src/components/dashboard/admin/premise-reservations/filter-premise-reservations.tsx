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
  premise: z.string().default("all"),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  additionalFilter: z.string().optional(),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface FilterPremiseReservationsProps {
  onFilter?: (values: FilterFormValues) => void
  onClear?: () => void
}

export function FilterPremiseReservations({ onFilter, onClear }: FilterPremiseReservationsProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      status: "all",
      premise: "all",
      startDate: undefined,
      endDate: undefined,
      additionalFilter: "",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
  }

  const handleClear = () => {
    form.reset({
      status: "all",
      premise: "all",
      startDate: undefined,
      endDate: undefined,
      additionalFilter: "",
    })
    onClear?.()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-white/70 rounded-lg p-6 space-y-4">
          {/* First Row - Status and Premises Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status Dropdown */}
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

            {/* Premises Dropdown */}
            <FormField
              control={form.control}
              name="premise"
              render={({ field }) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                        <SelectValue placeholder="All Premises" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      <SelectItem value="all">All Premises</SelectItem>
                      <SelectItem value="meeting-room-1">Meeting Room 1</SelectItem>
                      <SelectItem value="meeting-room-2">Meeting Room 2</SelectItem>
                      <SelectItem value="conference-hall">Conference Hall</SelectItem>
                      <SelectItem value="tennis-court">Tennis Court</SelectItem>
                      <SelectItem value="swimming-pool">Swimming Pool</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          {/* Second Row - Date Pickers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start Date */}
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
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

            {/* End Date */}
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
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
          </div>

          {/* Third Row - Additional Filter Input */}
          <div className="w-full">
            <FormField
              control={form.control}
              name="additionalFilter"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="None"
                      {...field}
                      className="border border-primary px-4 py-6 w-full rounded-lg bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-semibold"
            >
              Apply Filter
            </Button>
            <Button 
              type="button"
              onClick={handleClear}
              variant="outline"
              className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600 px-8 py-6 rounded-lg text-lg font-semibold"
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}