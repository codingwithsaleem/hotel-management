"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Search } from "lucide-react"

const filterSchema = z.object({
  search: z.string().optional(),
  status: z.string().default("all"),
  type: z.string().default("all"),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface PremisesFilterProps {
  onFilter?: (values: FilterFormValues) => void
}

export function PremisesFilter({ onFilter }: PremisesFilterProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      search: "",
      status: "all",
      type: "all",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center bg-white/70 rounded-lg p-4">
          {/* Search Field */}
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="flex-1 relative w-full">
                <FormControl>
                    <Input
                        placeholder="Search..."
                        {...field}
                        className="pl-4 pr-12 py-6 border border-primary bg-transparent focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
                    />
                </FormControl>

                {/* Search Icon inside input (click to submit) */}
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

          {/* Mobile: Stack dropdowns in row, Desktop: Keep inline */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
            {/* Status Dropdown */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full md:w-48">
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="border border-primary px-4 py-6 w-full">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
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
                      <SelectTrigger className="border border-primary px-4 py-6 w-full">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="room">Room</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          {/* Filter Button */}
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 w-full md:w-auto md:min-w-[120px] text-xl">
            Filter
          </Button>
        </div>
      </form>
    </Form>
  )
}
