"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeadingSection from "./heading-section";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Contracts = () => {
  // Mock data for recent contracts
  const recentContracts = [
    {
      id: 1,
      title: "Construction Contract",
      client: "Jane Smith",
      status: "Draft",
      sentOn: "15/06/2025",
      signedOn: null,
    },
    {
      id: 2,
      title: "Photographer",
      client: "Acme Corp",
      status: "Sent",
      sentOn: null,
      signedOn: "08/06/2025",
    },
    {
      id: 2,
      title: "Web Development",
      client: "Acme Corp",
      status: "Signed",
      sentOn: null,
      signedOn: "08/06/2025",
      download: "link-to-download",
    },
  ];

  // Mock data for notifications
  const notifications = [
    {
      id: 1,
      text: "Client viewed Contract A",
    },
    {
      id: 2,
      text: "Negotiation suggested on B",
    },
    {
      id: 3,
      text: "Payment received for C",
    },
  ];

const user = useSelector((state : RootState) => state.user.user);

  return (
    <div className="space-y-8">
      <HeadingSection
        heading={`Welcome ${user ? user.fullName : "Guest User"}`}
        description="Here you can manage your contracts."
      />

      {/* Recent Contracts Section */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-2">
            Recent Contracts
          </h3>
        </div>

        <div className="space-y-4">
          {recentContracts.map((contract) => (
            <Card
              key={contract.id}
              className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center gap-4 px-4">
                  <div className="w-full md:w-1/2 space-y-4 relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <h4 className="text-lg font-semibold">
                        {contract.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Client: {contract.client}
                      </p>
                    </div>
                    <Separator className="my-4" style={{ width: 400 }} />
                    <div className="flex items-center space-x-4 mb-4">
                      <h4 className="text-lg font-semibold">Client:</h4>
                      <p className="text-sm text-gray-600">{contract.client}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="myCustomButton1"
                        className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                      >
                        View
                      </Button>
                      <Button
                        variant="myCustomButton1"
                        className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                      >
                        {contract.status === "Draft" ? "Edit" : contract.status === "Sent" ? "Track" : "Download"}
                      </Button>
                    </div>
                    <Separator className="my-4 absolute bottom-20 right-10"  orientation="vertical" style={{ height: 100 }}  />
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <h4 className="text-lg font-semibold">Status:</h4>
                      <p className="text-sm text-gray-600">{contract.status}</p>
                    </div>
                    <Separator className="my-4" style={{ width: 400 }} />
                    <div className="flex items-center space-x-4 mb-4">
                      <h4 className="text-lg font-semibold">Last Edit:</h4>
                      <p className="text-sm text-gray-600">03/15/2025</p>
                    </div>
                    <div className="flex items-center space-x-4 justify-end">
                      {(contract.status === "Draft" || contract.status === "Sent") && (
                        <>
                          {
                            contract.status === "Draft" && (
                                <Button
                        variant="myCustomButton1"
                        className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                      >
                        Send
                      </Button>
                            )
                          }
                      <Button
                        variant="myCustomButton1"
                        className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                      >
                        PDF
                      </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                    

              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-left mt-4">
          <Link
            href={'/dashboard/sender/contracts/all-contracts'}
            className="text-primary text-xl underline hover:text-primary/80"
          >
            View All Contracts
          </Link>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-2">
            Notifications/Activity Feed
          </h3>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <div className="space-y-4 ">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border-b border-gray-200 pb-4"
                >
                  {/* <div className="w-2 h-2 bg-[#8898f0] rounded-full flex-shrink-0"></div> */}
                  <div className="flex-1">
                    <p className="text-xl  font-semibold">
                      Notification {notification.id}:
                    </p>
                    <p className="text-lg text-gray-900">{notification.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contracts;
