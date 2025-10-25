"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";


interface QuickLinksProps {
  links: { label: string; href: string }[]
}

export function QuickLinks({links}: QuickLinksProps) {


  return (
    <Card className="bg-background border-0 shadow-sm py-0">
      <CardHeader className="px-0 bg-primary/5  border-0 rounded-t-lg border-b-2 border-b-primary">
        <CardTitle className="text-lg font-semibold  p-4">Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-primary/10 w-full"
              >
              {link.label}
            </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
