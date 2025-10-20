"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"

const filterSchema = z.object({
  period: z.string().default("monthly"),
})

type FilterFormValues = z.infer<typeof filterSchema>

interface StatementFilterProps {
  onFilter?: (values: FilterFormValues) => void
}

export function StatementFilter({ onFilter }: StatementFilterProps) {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema) as unknown as Resolver<FilterFormValues>,
    defaultValues: {
      period: "monthly",
    },
  })

  const onSubmit = (values: FilterFormValues) => {
    onFilter?.(values)
    console.log("Statement filter:", values)
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Statement</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
           <div className="bg-white/70 rounded-lg p-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end ">
            
           

            {/* Period Dropdown */}
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="period"
                render={({ field }) => (
                  <FormItem>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                          <SelectValue placeholder="Monthly" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border border-primary">
                        <SelectItem value="monthly" className="focus:bg-primary/10 focus:text-primary">Monthly</SelectItem>
                        <SelectItem value="weekly" className="focus:bg-primary/10 focus:text-primary">Weekly</SelectItem>
                        <SelectItem value="yearly" className="focus:bg-primary/10 focus:text-primary">Yearly</SelectItem>
                        <SelectItem value="custom" className="focus:bg-primary/10 focus:text-primary">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Apply Filter Button */}
            <div className="md:col-span-1">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 w-full text-lg">
                Apply Filter
              </Button>
            </div>
          </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default StatementFilter