import EfficiencyDonut from "@/components/dashboard/admin/efficiency-donut";
import SatisfactionArea from "@/components/dashboard/admin/satisfaction-area";
import { Card, CardContent } from "@/components/ui/card";


const Charts = () => {
  return (
    <>
    {/* charts row */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 py-10">
        <Card className="shadow-sm border-0 flex flex-col justify-center">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Operational Efficiency</h3>
              <div className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                •
              </div>
            </div>
            <div className="grid grid-cols-[160px_1fr] items-center gap-6 sm:grid-cols-[200px_1fr]">
              <EfficiencyDonut percentage={75} />
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Tasks Completed
                  </p>
                  <p className="text-2xl font-semibold">12</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Tasks</p>
                  <p className="text-2xl font-semibold">15</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 flex flex-col justify-center">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Guest Satisfaction Indicator
              </h3>
              <div className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                •
              </div>
            </div>
            <SatisfactionArea />
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-col gap-2">
                <p className="">
                  0.00%
                </p>
                <p className="">
                  Service requests resolved within 1 hour
                </p>
              </div>
              <div className=" gap-2">
                <p>0.00%</p>
                <p className="ml-1">Hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Charts