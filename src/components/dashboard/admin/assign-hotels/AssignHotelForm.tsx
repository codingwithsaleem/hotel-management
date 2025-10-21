"use client"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"

const assignHotelSchema = z.object({
  selectUser: z.string().min(1, "Please select a user"),
  selectHotel: z.string().min(1, "Please select a hotel"),
})

type AssignHotelFormValues = z.infer<typeof assignHotelSchema>

interface AssignHotelFormProps {
  onAssign?: (values: AssignHotelFormValues) => void
  onBack?: () => void
}

export function AssignHotelForm({ onAssign, onBack }: AssignHotelFormProps) {
  const form = useForm<AssignHotelFormValues>({
    resolver: zodResolver(assignHotelSchema) as unknown as Resolver<AssignHotelFormValues>,
    defaultValues: {
      selectUser: "",
      selectHotel: "",
    },
  })

  const onSubmit = (values: AssignHotelFormValues) => {
    onAssign?.(values)
    console.log("Assign Hotel:", values)
  }

  const handleBack = () => {
    onBack?.()
    console.log("Back to Staff List")
  }

  // Sample users without hotel assignments
  const availableUsers = [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
    { id: "3", name: "Mike Johnson", email: "mike@example.com" },
    { id: "4", name: "Sarah Wilson", email: "sarah@example.com" },
    { id: "5", name: "David Brown", email: "david@example.com" }
  ]

  // Sample hotels
  const availableHotels = [
    { id: "1", name: "Sevsamora Hotel", location: "Saguramo, Georgia" },
    { id: "2", name: "Grand Palace", location: "Tbilisi, Georgia" },
    { id: "3", name: "Mountain View Resort", location: "Gudauri, Georgia" },
    { id: "4", name: "City Center Hotel", location: "Batumi, Georgia" }
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-end bg-white/70 rounded-lg p-4">
          
          {/* Select User */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select User:
            </label>
            <FormField
              control={form.control}
              name="selectUser"
              render={({ field }) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                        <SelectValue placeholder="Select User" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      {availableUsers.map((user) => (
                        <SelectItem 
                          key={user.id} 
                          value={user.id}
                          className="focus:bg-primary/10 focus:text-primary"
                        >
                          {user.name} ({user.email})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          {/* Select Hotel */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Hotel:
            </label>
            <FormField
              control={form.control}
              name="selectHotel"
              render={({ field }) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="border border-primary focus:border-primary focus:ring-primary px-4 py-6 w-full rounded-lg">
                        <SelectValue placeholder="Select Hotel" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border border-primary">
                      {availableHotels.map((hotel) => (
                        <SelectItem 
                          key={hotel.id} 
                          value={hotel.id}
                          className="focus:bg-primary/10 focus:text-primary"
                        >
                          {hotel.name} - {hotel.location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          {/* Assign Hotel Button */}
          <div className="md:col-span-1">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 w-full text-lg"
            >
              Assign Hotel
            </Button>
          </div>

          {/* Back to Staff List Button */}
          <div className="md:col-span-1">
            <Button 
              type="button"
              onClick={handleBack}
              variant="outline"
              className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600 px-8 py-6 w-full text-lg"
            >
              Back to Staff List
            </Button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-4 px-4">
          <p className="text-sm text-gray-600">
            Only users without hotel assignments are shown
          </p>
        </div>
      </form>
    </Form>
  )
}

export default AssignHotelForm