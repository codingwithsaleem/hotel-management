"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface DeleteContactModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  contactName: string
}

export function DeleteContactModal({ isOpen, onClose, onConfirm, contactName }: DeleteContactModalProps) {
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            Delete Contact
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <p className="text-gray-600 text-base">
            Are you sure you want to delete <span className="font-semibold text-gray-800">{contactName}</span>? This
            action cannot be undone.
          </p>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="px-6 py-3 rounded-4xl font-medium text-base h-auto border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-4xl font-medium text-base h-auto"
            >
              Yes, Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
