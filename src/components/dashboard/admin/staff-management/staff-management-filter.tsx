"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"

const filterSchema = z.object({
  search: z.string().default("all"),
  status: z.string().default("all"),
  role: z.string().default("all"),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface StaffManagementFilterProps {
  onFilter?: (values: FilterFormValues) => void
}

export function StaffManagementFilter({ onFilter }: StaffManagementFilterProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      search: "all",
      status: "all", 
      role: "all",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
    console.log("Staff Management filter:", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-end bg-white/70 rounded-lg p-4">
          
          {/* Search Dropdown */}
          <div className="md:col-span-2">
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
                      <SelectItem value="david" className="focus:bg-primary/10 focus:text-primary">David Gagua</SelectItem>
                      <SelectItem value="admins" className="focus:bg-primary/10 focus:text-primary">Admins Testing</SelectItem>
                      <SelectItem value="jba" className="focus:bg-primary/10 focus:text-primary">jba@jba.com</SelectItem>
                      <SelectItem value="staff" className="focus:bg-primary/10 focus:text-primary">სტაფოლო დეშია</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          {/* Status Dropdown */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      <SelectItem value="all" className="focus:bg-primary/10 focus:text-primary">All Status</SelectItem>
                      <SelectItem value="active" className="focus:bg-primary/10 focus:text-primary">Active</SelectItem>
                      <SelectItem value="inactive" className="focus:bg-primary/10 focus:text-primary">Inactive</SelectItem>
                      <SelectItem value="suspended" className="focus:bg-primary/10 focus:text-primary">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          {/* Role Dropdown */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                        <SelectValue placeholder="All Roles" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      <SelectItem value="all" className="focus:bg-primary/10 focus:text-primary">All Roles</SelectItem>
                      <SelectItem value="hotel-admin" className="focus:bg-primary/10 focus:text-primary">Hotel Admin</SelectItem>
                      <SelectItem value="staff" className="focus:bg-primary/10 focus:text-primary">Staff</SelectItem>
                      <SelectItem value="manager" className="focus:bg-primary/10 focus:text-primary">Manager</SelectItem>
                      <SelectItem value="supervisor" className="focus:bg-primary/10 focus:text-primary">Supervisor</SelectItem>
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
  )
}

export default StaffManagementFilter