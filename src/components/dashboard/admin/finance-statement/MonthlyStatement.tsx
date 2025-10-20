"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const revenueData = [
  {
    title: "Food & Service Orders",
    amount: "304.75",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Service Requests", 
    amount: "30.00",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    title: "Premise Reservations",
    amount: "890.00", 
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200"
  },
  {
    title: "Event Reservations",
    amount: "0.00",
    color: "text-green-600", 
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    title: "Tour Commissions",
    amount: "67500.00",
    color: "text-red-600",
    bgColor: "bg-red-50", 
    borderColor: "border-red-200"
  }
]

const totalRevenue = "67834.75"

export function MonthlyStatement() {
  return (
    <div className="space-y-6">
      {/* Revenue Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {revenueData.map((item, index) => (
          <Card
            key={index}
            className={`${item.bgColor} backdrop-blur-sm border-b-4 ${item.borderColor} border-x-0 border-t-0 pb-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl relative`}
          >
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${item.color}`}>
                  {item.amount}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-700 leading-tight">
                    {item.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-blue-600 hover:text-blue-800 p-0 h-auto font-medium"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Total Revenue Card */}
      <Card className="bg-white border-b-4 border-primary border-x-0 border-t-0 shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Total Revenue</h2>
            <div className="text-4xl font-bold text-blue-600">
              {totalRevenue}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MonthlyStatement