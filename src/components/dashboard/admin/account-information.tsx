"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Eye, EyeOff, Upload } from "lucide-react"
import { SignatureModal } from "./signature-modal"
import HeadingSection from "./heading-section"
import Image from "next/image"

export function AccountInformation() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false)
  const [savedSignatures, setSavedSignatures] = useState<
    Array<{
      url: string
      type: "draw" | "typing" | "upload"
      id: string
    }>
  >([])
  const [notifications, setNotifications] = useState({
    deliveryFailed: true,
    firstTimeOpened: true,
    everyTimeOpened: false,
    completedByRecipient: true,
    completedByAllRecipients: false,
    commentPosted: true,
  })

  const handleNotificationChange = (key: string, checked: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: checked }))
  }

  const handleSignatureSave = (signatureUrl: string, signatureType: "draw" | "typing" | "upload") => {
    const newSignature = {
      url: signatureUrl,
      type: signatureType,
      id: Date.now().toString(),
    }
    setSavedSignatures((prev) => [...prev, newSignature])
  }

  return (
     <div className="space-y-8">
      <HeadingSection
        heading="Account Information"
        description="Manage your personal information, payment methods, and notifications."
      />
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-semibold text-black mb-8">Personal Information</h1>

      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#8898f0] font-medium text-base">
                First Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  id="firstName"
                  defaultValue="Devin"
                  placeholder="First Name"
                  className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#8898f0] font-medium text-base">
                Last Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  id="lastName"
                  defaultValue="Taylor"
                  placeholder="Last Name"
                  className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#8898f0] font-medium text-base">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  defaultValue="devintaylor@gmail.com"
                  placeholder="yourname@gmail.com"
                  className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                />
              </div>
              <p className="text-xs text-[#9ca3af]">Email is activated</p>
              <div className="flex gap-2">
                <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
                  Update Email
                </Button>
                <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
                  Save
                </Button>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#8898f0] font-medium text-base">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  defaultValue="************"
                  placeholder="Enter password"
                  className="h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg pr-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[#9ca3af]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[#9ca3af]" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-[#9ca3af]">Set a unique password to protect your personal account.</p>
              <div className="flex gap-2">
                <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
                  Change Password
                </Button>
                <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Signature and Logo Upload Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Signature Section */}
            <div className="space-y-2">
              <Label className="text-[#8898f0] font-medium text-base">Signature</Label>
              <div className="border-2 border-dashed border-[#e5e7eb] rounded-2xl p-8 text-center bg-[#f8f9fa] min-h-[120px] flex items-center justify-center">
                {savedSignatures.length > 0 ? (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {savedSignatures.slice(0, 3).map((signature) => (
                      <Image
                        key={signature.id}
                        src={signature.url || "/placeholder.svg"}
                        alt={`${signature.type} signature`}
                        width={100}
                        height={100}
                        className="max-h-16 max-w-24 object-contain border border-gray-200 rounded-lg p-1 bg-white"
                      />
                    ))}
                    {savedSignatures.length > 3 && (
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg border border-gray-200">
                        <span className="text-xs text-gray-500">+{savedSignatures.length - 3}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[#9ca3af] text-base">No Signatures</p>
                )}
              </div>
              <Button
                onClick={() => setIsSignatureModalOpen(true)}
                className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base"
              >
                Setup Signatures
              </Button>
            </div>

            {/* Logo Upload */}
            <div className="space-y-2">
              <Label className="text-[#8898f0] font-medium text-base">Logo Upload</Label>
              <div className="border-2 border-dashed border-[#e5e7eb] rounded-2xl p-8 text-center bg-[#f8f9fa] min-h-[120px] flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#8898f0]/10 flex items-center justify-center mb-2">
                  <Upload className="h-6 w-6 text-[#8898f0]" />
                </div>
                <p className="text-[#8898f0] text-base">Please Upload Pictures</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bank Card Section */}
      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Label className="text-[#8898f0] font-medium text-base">Bank Card</Label>
            <span className="text-sm text-[#9ca3af]">(Attached)</span>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-6 mb-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-mono text-black">4324556645678544</span>
              <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-orange-400 rounded-md"></div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-base">
              <div>
                <Label className="text-[#8898f0] font-medium">CVV</Label>
                <p className="font-mono text-black mt-1">123</p>
              </div>
              <div>
                <Label className="text-[#8898f0] font-medium">Expiry Date</Label>
                <p className="font-mono text-black mt-1">29/09/28</p>
              </div>
            </div>
            <p className="text-sm text-[#9ca3af] mt-4">Card is activated</p>
          </div>

          <div className="flex gap-3">
            <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
              Change Card
            </Button>
            <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Plan Section */}
      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <Label className="text-[#8898f0] font-medium text-base mb-4 block">Payment Plan</Label>

          <div className="bg-[#f8f9fa] rounded-2xl p-6 mb-4">
            <p className="font-semibold text-black text-lg mb-2">Basic Plan</p>
            <p className="text-sm text-[#9ca3af] mb-4">Plan is activated</p>
          </div>

          <div className="flex gap-3">
            <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
              Change Plan
            </Button>
            <Button className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-full text-base">
              Save
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <Label className="text-[#8898f0] font-medium text-base mb-4 block">Notifications</Label>

          <div className="space-y-4">
            <p className="text-base text-[#9ca3af]">Send me an email when:</p>
            <p className="text-base font-medium text-black">Any messages or notifications for documents sent by me</p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="deliveryFailed"
                  checked={notifications.deliveryFailed}
                  onCheckedChange={(checked) => handleNotificationChange("deliveryFailed", checked as boolean)}
                  className="border-[#8898f0] data-[state=checked]:bg-[#8898f0] data-[state=checked]:border-[#8898f0]"
                />
                <Label htmlFor="deliveryFailed" className="text-base text-[#9ca3af] cursor-pointer">
                  Document delivery failed
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="firstTimeOpened"
                  checked={notifications.firstTimeOpened}
                  onCheckedChange={(checked) => handleNotificationChange("firstTimeOpened", checked as boolean)}
                  className="border-[#8898f0] data-[state=checked]:bg-[#8898f0] data-[state=checked]:border-[#8898f0]"
                />
                <Label htmlFor="firstTimeOpened" className="text-base text-[#9ca3af] cursor-pointer">
                  Document is opened by a recipient for the first time
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="everyTimeOpened"
                  checked={notifications.everyTimeOpened}
                  onCheckedChange={(checked) => handleNotificationChange("everyTimeOpened", checked as boolean)}
                  className="border-[#8898f0] data-[state=checked]:bg-[#8898f0] data-[state=checked]:border-[#8898f0]"
                />
                <Label htmlFor="everyTimeOpened" className="text-base text-[#9ca3af] cursor-pointer">
                  Document is opened by a recipient every time
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="completedByRecipient"
                  checked={notifications.completedByRecipient}
                  onCheckedChange={(checked) => handleNotificationChange("completedByRecipient", checked as boolean)}
                  className="border-[#8898f0] data-[state=checked]:bg-[#8898f0] data-[state=checked]:border-[#8898f0]"
                />
                <Label htmlFor="completedByRecipient" className="text-base text-[#9ca3af] cursor-pointer">
                  Document is completed by a recipient
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="completedByAllRecipients"
                  checked={notifications.completedByAllRecipients}
                  onCheckedChange={(checked) =>
                    handleNotificationChange("completedByAllRecipients", checked as boolean)
                  }
                  className="border-[#8898f0] data-[state=checked]:bg-[#8898f0] data-[state=checked]:border-[#8898f0]"
                />
                <Label htmlFor="completedByAllRecipients" className="text-base text-[#9ca3af] cursor-pointer">
                  Document is completed by all recipients
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="commentPosted"
                  checked={notifications.commentPosted}
                  onCheckedChange={(checked) => handleNotificationChange("commentPosted", checked as boolean)}
                  className="border-[#8898f0] data-[state=checked]:bg-[#8898f0] data-[state=checked]:border-[#8898f0]"
                />
                <Label htmlFor="commentPosted" className="text-base text-[#9ca3af] cursor-pointer">
                  Comment is posted
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <SignatureModal
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSignatureSave}
      />
    </div>
    </div>
  )
}
