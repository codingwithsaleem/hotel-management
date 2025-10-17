"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Notifications() {
  return (
    <Card className="bg-background border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold border-b-2 border-primary pb-3">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-8">
          <p className="text-muted-foreground">No Unread Notifications</p>
        </div>
      </CardContent>
    </Card>
  )
}
