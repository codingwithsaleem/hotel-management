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
    <Card className="bg-background border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold border-b-2 border-primary pb-3">Hotel Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {hotelData.map((item) => (
            <div key={item.label} className="flex justify-between items-center">
              <span className="text-primary font-medium">{item.label}:</span>
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
          <div className="pt-4">
            <Button className="bg-primary hover:bg-primary/90 w-full">Edit Hotel Profile</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
