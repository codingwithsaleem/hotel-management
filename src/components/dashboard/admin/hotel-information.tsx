"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HotelInformation() {
  const hotelData = [
    { label: "Name", value: "Sevsamora" },
    { label: "Address", value: "Sevsamora ST 10" },
    { label: "Contact", value: "+995571112277" },
    { label: "Email", value: "sevsa@sevsa.com" },
  ]

  return (
    <Card className="bg-background border-0 shadow-sm py-0">
      <CardHeader className="px-0 bg-primary/5  border-0 rounded-t-lg border-b-2 border-b-primary">
        <CardTitle className="text-lg font-semibold  p-4">Hotel Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {hotelData.map((item) => (
            <div key={item.label} className="flex justify-start gap-4 items-center">
              <span className="text-primary font-medium">{item.label}:</span>
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
          <div className="py-4 flex justify-end">
            <Button className="bg-primary hover:bg-transparent hover:border-primary hover:text-primary hover:border cursor-pointer">Edit Hotel Profile</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
