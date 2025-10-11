"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import HeadingSection from "./heading-section";

const AllContracts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for all contracts
  const allContracts = [
    {
      id: 1,
      title: "Construction Contract",
      client: "Jane Smith",
      status: "Draft",
      sentOn: "15/06/2025",
      signedOn: null,
      amount: "$2,500",
      industry: "Construction"
    },
    {
      id: 2,
      title: "Photographer",
      client: "Acme Corp",
      status: "Sent",
      sentOn: "08/06/2025",
      signedOn: null,
      amount: "$15,000",
      industry: "Photography"
    },
    {
      id: 3,
      title: "Web Development",
      client: "Startup Inc",
      status: "Signed",
      sentOn: "10/06/2025",
      signedOn: "12/06/2025",
      amount: "$800",
      industry: "Technology",
      download: "link-to-download"
    },
    {
      id: 4,
      title: "Marketing Campaign",
      client: "Big Brand LLC",
      status: "Signed",
      sentOn: "01/06/2025",
      signedOn: "05/06/2025",
      amount: "$8,500",
      industry: "Marketing",
      download: "link-to-download"
    },
    {
      id: 5,
      title: "Event Photography",
      client: "Wedding Bells",
      status: "Draft",
      sentOn: null,
      signedOn: null,
      amount: "$1,200",
      industry: "Photography"
    },
    {
      id: 6,
      title: "Mobile App Development",
      client: "Tech Solutions",
      status: "Sent",
      sentOn: "12/06/2025",
      signedOn: null,
      amount: "$25,000",
      industry: "Technology"
    }
  ];

  const filteredContracts = allContracts.filter((contract) => {
    const matchesSearch = 
      contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || contract.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header with back button */}
      {/* <Link href="/dashboard/sender/contracts">
          <Button variant="ghost" size="sm" className="px-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link> */}
      <div>
        <HeadingSection
          heading="All Contracts"
          description="Manage and view all your contracts in one place."
        />
      </div>



      {/* Contracts Section - Same UI as main contracts component */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">

             {/* Search and Filter Section */}
      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search contracts, clients, or industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="cursor-pointer pl-10 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg w-full min-h-15">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="signed">Signed</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>



        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-2">
            All Contracts ({filteredContracts.length})
          </h3>
        </div>

        <div className="space-y-4">
          {filteredContracts.map((contract) => (
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
      </div>

      {/* Empty state */}
      {filteredContracts.length === 0 && (
        <div className="max-w-7xl mx-auto p-6">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No contracts found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or filters.</p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                }}
                variant="outline"
                className="border-[#8898f0] text-[#8898f0] hover:bg-[#8898f0] hover:text-white"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AllContracts;
