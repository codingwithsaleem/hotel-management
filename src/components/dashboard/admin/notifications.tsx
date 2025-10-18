"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Notifications() {
  return (
    <Card className="bg-background border-0 shadow-sm py-0">
      <CardHeader className="px-0 bg-primary/5  border-0 rounded-t-lg border-b-2 border-b-primary">
        <CardTitle className="text-lg font-semibold  p-4">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-8">
          <p className="text-muted-foreground">No Unread Notifications</p>
        </div>
      </CardContent>
    </Card>
  )
}
