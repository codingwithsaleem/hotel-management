import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

export function MyAssignments() {
  const serviceRequests = [
    {
      id: "S011",
      title: "Service Request",
      subtitle: "Limousine To Airport",
      room: "Room 205",
      priority: "High Priority",
      priorityColor: "bg-red-100 text-red-600",
      timestamp: "2 months, 1 week ago",
    },
  ]

  const foodOrders = [
    {
      id: "059",
      title: "Order #059 - Professional Cleaners",
      subtitle: "Room 205 - 1 items",
      price: "$50.00",
      priority: "Pending",
      priorityColor: "bg-orange-100 text-orange-600",
      timestamp: "1 week ago",
    },
    {
      id: "058",
      title: "Order #058 - Professional Cleaners",
      subtitle: "Room 205 - 1 items",
      price: "$50.00",
      priority: "Pending",
      priorityColor: "bg-orange-100 text-orange-600",
      timestamp: "1 week ago",
    },
    {
      id: "020",
      title: "Order #020 - Professional Cleaners",
      subtitle: "Room 205 - 1 items",
      price: "$50.00",
      priority: "Pending",
      priorityColor: "bg-orange-100 text-orange-600",
      timestamp: "2 months, 2 week ago",
    },
  ]

  return (
    <Card className="rounded-2xl border-0">
      <CardHeader className="border-b-2 border-b-[#0079FF] pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">My Assignments</CardTitle>
          <a href="#" className="text-sm font-medium text-[#0079FF] hover:underline">
            All Tasks
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Service Requests Section */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-[#0079FF]">Service Requests</h3>
          <div className="space-y-3">
            {serviceRequests.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-4 rounded-lg bg-primary/10 p-4">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    [{item.id}] {item.title}
                  </div>
                  <div className="text-sm text-gray-600">{item.subtitle}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline" className="border-blue-300 bg-blue-50 text-xs text-blue-700">
                      📍 {item.room}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Eye className="h-5 w-5 text-blue-400" />
                  <Badge className={`text-xs font-medium ${item.priorityColor}`}>{item.priority}</Badge>
                  <span className="text-xs text-gray-500">{item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food Orders Section */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-green-600">Food Orders</h3>
          <div className="space-y-3">
            {foodOrders.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-4 rounded-lg bg-primary/10 p-4">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.subtitle}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-blue-600">💳 {item.price}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Eye className="h-5 w-5 text-blue-400" />
                  <Badge className={`text-xs font-medium ${item.priorityColor}`}>{item.priority}</Badge>
                  <span className="text-xs text-gray-500">{item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
