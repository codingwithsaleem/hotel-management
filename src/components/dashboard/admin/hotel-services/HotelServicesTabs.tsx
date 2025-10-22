'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Clock, Plus } from 'lucide-react';

export function HotelServicesTabs() {
  return (
    <div className="py-4">
      {/* Header */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Hotel Services</h1>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <Tabs defaultValue="cleaning" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-primary/10 p-1 h-14 rounded-lg cursor-pointer">
            <TabsTrigger 
              value="cleaning" 
              className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-md"
            >
              Cleaning Service
            </TabsTrigger>
            <TabsTrigger 
              value="room" 
              className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-md"
            >
              Room Service
            </TabsTrigger>
            <TabsTrigger 
              value="custom" 
              className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-md"
            >
              Custom Request
            </TabsTrigger>
          </TabsList>

          {/* Cleaning Service Tab */}
          <TabsContent value="cleaning">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Professional Cleaners Service Card */}
              <Card className="overflow-hidden border border-gray-200 shadow-sm p-0 h-100">
                <div className="h-50 relative">
                  <Image
                    src="/images/dashboard/services/service-4.png"
                    alt="Professional Cleaners"
                    
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                    width={300}
                    height={200}
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Cleaners</h3>
                  <p className="text-gray-600 mb-4">Professional Cleaners</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">Price: $30.00</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    Request Service
                  </Button>
                </CardContent>
              </Card>

              {/* Duplicate cards for demonstration */}
              <Card className="overflow-hidden border border-gray-200 shadow-sm p-0 h-100">
                <div className="h-50 relative">
                  <Image
                    src="/images/dashboard/services/service-4.png"
                    alt="Professional Cleaners"
                    
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                    width={300}
                    height={200}
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Cleaners</h3>
                  <p className="text-gray-600 mb-4">Professional Cleaners</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">Price: $30.00</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    Request Service
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-gray-200 shadow-sm p-0 h-100">
                <div className="h-50 relative">
                  <Image
                    src="/images/dashboard/services/service-4.png"
                    alt="Professional Cleaners"
                    
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                    width={300}
                    height={200}
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Cleaners</h3>
                  <p className="text-gray-600 mb-4">Professional Cleaners</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">Price: $30.00</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Room Service Tab */}
          <TabsContent value="room" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Room Massage Service Card */}
              <Card className="overflow-hidden border border-gray-200 shadow-sm p-0 h-100">
                <div className="h-48 relative">
                  <Image
                    src="/images/dashboard/services/service-4.png"
                    alt="Room Massage Service"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Room Massage Service</h3>
                  <p className="text-gray-600 mb-2">Room Massage Service</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">30</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    View Menu
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Custom Request Tab */}
          <TabsContent value="custom" className="space-y-6">
            <div className="flex flex-col items-center justify-center py-20 px-6">
              {/* Service Icon */}
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-8 bg-primary rounded-lg relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-white rounded-sm"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Service Request</h2>
              <p className="text-gray-600 text-center mb-8 max-w-md">
                Don&apos;t see what you&apos;re looking for? Make a custom service request and our staff will assist you.
              </p>

              {/* Action Button */}
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Make Custom Request
              </Button>
            </div>
          </TabsContent>

          
        </Tabs>
      </div>
    </div>
  );
}