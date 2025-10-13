"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, RotateCcw } from "lucide-react"
import SignatureCanvas from "react-signature-canvas"
import Image from "next/image"

interface SignatureModalProps {
  isOpen: boolean
  onClose: () => void
  onSave?: (signatureUrl: string, signatureType: "draw" | "typing" | "upload") => void
}

export function SignatureModal({ isOpen, onClose, onSave }: SignatureModalProps) {
  const [activeTab, setActiveTab] = useState("typing")
  const [signatureText, setSignatureText] = useState("Devin Taylor")
  const [selectedFont, setSelectedFont] = useState(0)
  const [signatureColor, setSignatureColor] = useState("#000000")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const signatureCanvasRef = useRef<SignatureCanvas>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const signatureFonts = [
    { name: "Cursive", fontFamily: "Brush Script MT, cursive" },
    { name: "Script", fontFamily: "Lucida Handwriting, cursive" },
    { name: "Handwriting", fontFamily: "Comic Sans MS, cursive" },
    { name: "Elegant", fontFamily: "Edwardian Script ITC, cursive" },
    { name: "Bold", fontFamily: "Impact, sans-serif" },
    { name: "Classic", fontFamily: "Times New Roman, serif" },
  ]

  const generateTypedSignatureImage = useCallback(
    (text: string, fontFamily: string, color: string): Promise<string> => {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!ctx) {
          resolve("")
          return
        }

        // Set canvas size
        canvas.width = 400
        canvas.height = 100

        // Set font and color
        ctx.font = `28px ${fontFamily}`
        ctx.fillStyle = color
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Clear canvas with transparent background
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw text
        ctx.fillText(text, canvas.width / 2, canvas.height / 2)

        // Convert to blob URL
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            resolve(url)
          } else {
            resolve("")
          }
        }, "image/png")
      })
    },
    [],
  )

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearCanvas = () => {
    if (signatureCanvasRef.current) {
      signatureCanvasRef.current.clear()
    }
  }

  const handleSave = async () => {
    let signatureUrl = ""

    try {
      if (activeTab === "draw") {
        if (signatureCanvasRef.current && !signatureCanvasRef.current.isEmpty()) {
          // Get signature as data URL and convert to blob URL
          const dataURL = signatureCanvasRef.current.toDataURL("image/png")
          const response = await fetch(dataURL)
          const blob = await response.blob()
          signatureUrl = URL.createObjectURL(blob)
        }
      } else if (activeTab === "typing") {
        if (signatureText.trim()) {
          const selectedFontFamily = signatureFonts[selectedFont].fontFamily
          signatureUrl = await generateTypedSignatureImage(signatureText, selectedFontFamily, signatureColor)
        }
      } else if (activeTab === "upload") {
        if (uploadedFile) {
          signatureUrl = URL.createObjectURL(uploadedFile)
        }
      }

      if (signatureUrl && onSave) {
        onSave(signatureUrl, activeTab as "draw" | "typing" | "upload")
      }

      onClose()
    } catch (error) {
      console.error("Error saving signature:", error)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Setup Signature</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="draw"
                className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-gray-600 rounded-md transition-all"
              >
                Draw
              </TabsTrigger>
              <TabsTrigger
                value="typing"
                className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-gray-600 rounded-md transition-all"
              >
                Typing
              </TabsTrigger>
              <TabsTrigger
                value="upload"
                className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-gray-600 rounded-md transition-all"
              >
                Upload
              </TabsTrigger>
            </TabsList>

            <TabsContent value="draw" className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <SignatureCanvas
                  ref={signatureCanvasRef}
                  canvasProps={{
                    width: 600,
                    height: 200,
                    className: "signature-canvas w-full cursor-crosshair bg-white",
                  }}
                  penColor={signatureColor}
                  minWidth={1}
                  maxWidth={3}
                  velocityFilterWeight={0.7}
                  backgroundColor="rgba(255,255,255,1)"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer"
                      style={{ backgroundColor: signatureColor }}
                      onClick={() => document.getElementById("draw-color-picker")?.click()}
                    />
                    <input
                      id="draw-color-picker"
                      type="color"
                      value={signatureColor}
                      onChange={(e) => setSignatureColor(e.target.value)}
                      className="w-0 h-0 opacity-0 absolute"
                    />
                    <span className="text-sm text-gray-600">{signatureColor}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={clearCanvas} className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Clear
                  </Button>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-full"
                >
                  Save
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="typing" className="space-y-4">
              <Input
                value={signatureText}
                onChange={(e) => setSignatureText(e.target.value)}
                className="text-center text-lg p-4 bg-gray-50 border-0"
                placeholder="Enter your name"
              />

              <div className="grid grid-cols-2 gap-4">
                {signatureFonts.map((font, index) => (
                  <div
                    key={index}
                    className={`p-4 border-2 rounded-lg cursor-pointer text-center transition-all ${
                      selectedFont === index
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedFont(index)}
                  >
                    <div
                      style={{
                        fontFamily: font.fontFamily,
                        fontSize: "20px",
                        color: signatureColor,
                      }}
                    >
                      {signatureText}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer"
                      style={{ backgroundColor: signatureColor }}
                      onClick={() => document.getElementById("typing-color-picker")?.click()}
                    />
                    <input
                      id="typing-color-picker"
                      type="color"
                      value={signatureColor}
                      onChange={(e) => setSignatureColor(e.target.value)}
                      className="w-0 h-0 opacity-0 absolute"
                    />
                    <span className="text-sm text-gray-600">{signatureColor}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSignatureText("Devin Taylor")}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Clear
                  </Button>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-full"
                >
                  Save
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                {uploadedImage ? (
                  <div className="space-y-4">
                    <Image
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded signature"
                      width={100}
                      height={100}
                      className="max-h-32 mx-auto object-contain"
                    />
                    <Button
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="border-indigo-500 text-indigo-500 bg-transparent"
                    >
                      Change File
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload your signature image</p>
                    <p className="text-sm text-gray-400 mb-4">PNG, JPG up to 2MB</p>
                    <Button
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="border-indigo-500 text-indigo-500 bg-transparent"
                    >
                      Choose File
                    </Button>
                  </>
                )}
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  disabled={!uploadedImage}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-full disabled:opacity-50"
                >
                  Save
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
