import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Bell } from 'lucide-react';

export function MyOrdersAndRequests() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">My Orders & Requests</h1>
      </div>

      {/* Cards Container */}
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm">
          {/* Recent Food Orders Card */}
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary/90 to-primary/70 text-white shadow-lg">
            <CardContent className="p-8 relative">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Recent Food Orders</h2>
                  <p className="text-blue-100 text-lg">
                    You don&apos;t have any recent food orders.
                  </p>
                </div>
                <div className="opacity-20">
                  <Utensils className="w-20 h-20" strokeWidth={1} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Service Requests Card */}
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary/90 to-primary/70 text-white shadow-lg">
            <CardContent className="p-8 relative">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Recent Service Requests</h2>
                  <p className="text-blue-100 text-lg">
                    You don&apos;t have any recent service requests.
                  </p>
                </div>
                <div className="opacity-20">
                  <Bell className="w-20 h-20" strokeWidth={1} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}