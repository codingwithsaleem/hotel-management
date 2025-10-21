"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Upload } from "lucide-react"
import Image from "next/image"

export function HotelProfileInfo() {
  return (
    <div className="p-6">
      <Tabs defaultValue="information" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-primary/10 p-0 h-12">
          <TabsTrigger value="information" className="text-lg font-medium data-[state=active]:bg-primary data-[state=active]:text-white">
            Information
          </TabsTrigger>
          <TabsTrigger value="premises" className="text-lg font-medium data-[state=active]:bg-primary data-[state=active]:text-white">
            Premises
          </TabsTrigger>
          <TabsTrigger value="services" className="text-lg font-medium data-[state=active]:bg-primary data-[state=active]:text-white">
            Services
          </TabsTrigger>
          <TabsTrigger value="gallery" className="text-lg font-medium data-[state=active]:bg-primary data-[state=active]:text-white">
            Gallery
          </TabsTrigger>
        </TabsList>

        {/* Information Tab */}
        <TabsContent value="information" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">About</h2>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Edit Hotel Information
                </Button>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Hotel in Saguramo, overlooking river Aragvi Valley, with sights of Kazbegi in clear weather.
              </p>

              {/* Check-in & Check-out */}
              <h3 className="text-xl font-bold mb-4">Check-in & Check-out</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="text-blue-600 font-semibold mb-1">Check-in Time</div>
                    <div className="text-2xl font-bold">14:00</div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="text-blue-600 font-semibold mb-1">Check-out Time</div>
                    <div className="text-2xl font-bold">16:00</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="overflow-hidden shadow-sm p-0 border-0">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="space-y-4">
                    <div className="flex">
                      <span className="text-primary font-semibold w-20 flex-shrink-0">Name:</span>
                      <span className="text-gray-800">Sevsamora</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-20 flex-shrink-0">Address:</span>
                      <span className="text-gray-800">Sevsamora ST 10 Saguramo, Tbilisi Georgia 0179</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-20 flex-shrink-0">Phone:</span>
                      <span className="text-gray-800">+995577112277</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-20 flex-shrink-0">Email:</span>
                      <span className="text-gray-800">sevsa@sevsa.com</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-20 flex-shrink-0">URL:</span>
                      <span className="text-gray-800">http://sevsamora.ge</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hotel Settings */}
              <Card className="overflow-hidden shadow-sm p-0 border-0">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">Hotel Settings</h3>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="space-y-4">
                    <div className="flex">
                      <span className="text-primary font-semibold w-32 flex-shrink-0">Status:</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-32 flex-shrink-0">Star Rating:</span>
                      <span className="text-gray-800">5.0 stars</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-32 flex-shrink-0">Created:</span>
                      <span className="text-gray-800">March 14, 2025</span>
                    </div>
                    <div className="flex">
                      <span className="text-primary font-semibold w-32 flex-shrink-0">Last Updated:</span>
                      <span className="text-gray-800">September 16, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Premises Tab */}
        <TabsContent value="premises" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Premises
            </h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              + Add Premise
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/20 border-b-4 border-b-primary">
                  <tr>
                    <th className="text-left p-4 font-semibold">Name</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Cinema", type: "Cinema", status: "active" },
                    { name: "Indoor Swimming Pool", type: "Swimming Pool", status: "active" },
                    { name: "Outdoor Swimming Pool", type: "Swimming Pool", status: "active" },
                    { name: "Sevsamora Cafe", type: "Cafe", status: "active" },
                    { name: "Sevsamora Restaurant", type: "Restaurant", status: "active" }
                  ].map((premise, index) => (
                    <tr key={premise.name} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                      <td className="p-4">{premise.name}</td>
                      <td className="p-4">{premise.type}</td>
                      <td className="p-4">
                        <Badge className="bg-green-50 text-green-700 border-green-200">
                          Active
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                            View
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-blue-600">⚠</span>
              Services
            </h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              + Add Service
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Room Dining */}
            <Card className="overflow-hidden border-0 p-0">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500">
                <Image
                  src="/images/dashboard/services/service-1.jpg"
                  alt="Room Dining"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Room Dining</h3>
                <p className="text-gray-600 text-sm mb-3">Room Dining</p>
                <div className="flex gap-2 mb-3">
                  <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">Has Menu</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">Room Service</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    View
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Menu ▼
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Room Massage Service */}
            <Card className="overflow-hidden border-0 p-0">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                <Image
                  src="/images/dashboard/services/service-2.jpg"
                  alt="Room Massage Service"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Room Massage Service</h3>
                <p className="text-gray-600 text-sm mb-3">Room Massage Service</p>
                <div className="flex gap-2 mb-3">
                  <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">Has Menu</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">Room Service</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    View
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Menu ▼
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Cleaners */}
            <Card className="overflow-hidden border-0 p-0">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500">
                <Image
                  src="/images/dashboard/services/service-3.jpeg"
                  alt="Professional Cleaners"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Professional Cleaners</h3>
                <p className="text-gray-600 text-sm mb-3">Professional Room Service</p>
                <div className="flex gap-2 mb-3">
                  <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Room Service */}
            <Card className="overflow-hidden border-0 p-0">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-white text-6xl">🍽️</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Room Service</h3>
                <p className="text-gray-600 text-sm mb-3">Hotel room service</p>
                <div className="flex gap-2 mb-3">
                  <Badge className="bg-gray-50 text-gray-700 border-gray-200">Inactive</Badge>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">Has Menu</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gallery Tab */}
        <TabsContent value="gallery" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-blue-600">📷</span>
              Photo Gallery
            </h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((photo) => (
              <Card key={photo} className="overflow-hidden border-0 p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-400">
                  <Image
                    src={`/images/dashboard/services/gallery-${photo}.jpg`}
                    alt={`Gallery Photo ${photo}`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-2">No caption</p>
                  <p className="text-xs text-gray-500 mb-3">Uploaded: Oct. 17, 2025</p>
                  <Button 
                    size="sm" 
                    variant="destructive" 
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default HotelProfileInfo