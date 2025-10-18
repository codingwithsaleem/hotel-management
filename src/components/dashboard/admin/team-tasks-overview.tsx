import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TeamTasksOverview() {
  const tasks = [
    {
      id: "F054",
      title: "Food Order - Room 205",
      status: "Pending",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Food",
      actionColor: "bg-green-500 hover:bg-green-600 text-white",
    },
    {
      id: "F053",
      title: "Food Order - Room 205",
      status: "Pending",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Food",
      actionColor: "bg-green-500 hover:bg-green-600 text-white",
    },
    {
      id: "F052",
      title: "Food Order - Room 205",
      status: "Pending",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Food",
      actionColor: "bg-green-500 hover:bg-green-600 text-white",
    },
    {
      id: "S033",
      title: "Professional Cleaners - Room 505",
      status: "Normal",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Service",
      actionColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: "S032",
      title: "Professional Cleaners - Room 505",
      status: "Normal",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Service",
      actionColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: "S031",
      title: "Professional Cleaners - Room 505",
      status: "Normal",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Service",
      actionColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: "S030",
      title: "Professional Cleaners - Room 505",
      status: "Normal",
      statusColor: "bg-blue-100 text-blue-600",
      action: "Service",
      actionColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ]

  return (
    <Card className="bg-background border-0 shadow-sm py-0">
      <CardHeader className="px-0 bg-primary/5  border-0 rounded-t-lg border-b-2 border-b-primary">
        <div className="flex items-center justify-between p-4">
          <CardTitle className="text-lg font-semibold">Team Tasks Overview</CardTitle>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            Tasks Dashboard
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="border-b-1 border-b-primary/60 pb-3">
          <span className="font-semibold text-gray-900 px-4 md:px-6">David Gagua</span>
        </div>
        <a href="#" className="inline-block text-sm font-medium text-primary hover:underline px-4 md:px-6">
          Unassigned Tasks (14)
        </a>

        <div className="space-y-0 max-h-120 overflow-y-auto px-2 md:px-4">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className={` bg-primary/10 my-2 rounded-xl flex items-center justify-between gap-4 px-4 py-3 ${
                index !== tasks.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  [{task.id}] {task.title}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className={`text-xs font-medium ${task.statusColor}`}>{task.status}</p>
                <Button size="sm" className={`text-xs font-medium ${task.actionColor}`}>
                  {task.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
