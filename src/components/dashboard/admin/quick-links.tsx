"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuickLinks() {
  const links = [
    { label: "Premises", href: "#" },
    { label: "Staff", href: "#" },
    { label: "Hotel Profile", href: "#" },
    { label: "Services", href: "#" },
  ]

  return (
    <Card className="bg-background border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold border-b-2 border-primary pb-3">Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {links.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
