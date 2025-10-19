 "use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"

const filterSchema = z.object({
  searchServices: z.string().default("all"),
  category: z.string().default("all"),
  type: z.string().default("all"),
  status: z.string().default("all"),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface ServiceFilterProps {
  onFilter?: (values: FilterFormValues) => void
}

export function ServiceFilter({ onFilter }: ServiceFilterProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      searchServices: "all",
      category: "all",
      type: "all",
      status: "all",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
    console.log("Service filter:", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center bg-white/70 rounded-lg p-4">
          
          {/* Search Services Dropdown */}
          <FormField
            control={form.control}
            name="searchServices"
            render={({ field }) => (
              <FormItem className="w-full md:w-48">
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                      <SelectValue placeholder="Search Services" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border border-primary">
                    <SelectItem value="all">Search Services</SelectItem>
                    <SelectItem value="housekeeping">Housekeeping</SelectItem>
                    <SelectItem value="spa">Spa & Wellness</SelectItem>
                    <SelectItem value="dining">Dining</SelectItem>
                    <SelectItem value="concierge">Concierge</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Category Dropdown */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full md:w-48">
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border border-primary">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="room-service">Room Service</SelectItem>
                    <SelectItem value="wellness">Wellness</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="business">Business Services</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Type Dropdown */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full md:w-48">
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="border border-primary px-4 py-6 w-full rounded-lg">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border border-primary">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
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
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
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