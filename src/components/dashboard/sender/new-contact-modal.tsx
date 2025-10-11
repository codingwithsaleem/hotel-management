"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Phone, MapPin, Building } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useEffect } from "react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address must be less than 100 characters"),
  city: z.string().min(2, "City must be at least 2 characters").max(30, "City must be less than 30 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
}

interface NewContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (contact: Omit<Contact, "id">) => void
  editContact?: Contact | null
  onUpdate?: (id: string, contact: Omit<Contact, "id">) => void
}

export function NewContactModal({ isOpen, onClose, onSave, editContact, onUpdate }: NewContactModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    },
  })

  useEffect(() => {
    if (editContact) {
      setValue("name", editContact.name)
      setValue("email", editContact.email)
      setValue("phone", editContact.phone)
      setValue("address", editContact.address)
      setValue("city", editContact.city)
    } else {
      reset()
    }
  }, [editContact, setValue, reset])

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (editContact && onUpdate) {
        onUpdate(editContact.id, data)
      } else {
        onSave(data)
      }
      reset()
      onClose()
    } catch (error) {
      console.error("Error saving contact:", error)
    }
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            {editContact ? "Edit Contact" : "New Contact"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[#8898f0] font-medium text-base">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  type="text"
                  placeholder="yourname"
                  {...register("name")}
                  className={`h-15 rounded-4xl border-[#e5e7eb] focus:border-[#8898f0] focus:ring-[#8898f0] pl-10 placeholder:text-lg text-lg ${
                    errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-[#8898f0] font-medium text-base">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  type="email"
                  placeholder="yourname@gmail.com"
                  {...register("email")}
                  className={`h-15 rounded-4xl border-[#e5e7eb] focus:border-[#8898f0] focus:ring-[#8898f0] pl-10 placeholder:text-lg text-lg ${
                    errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[#8898f0] font-medium text-base">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register("phone")}
                  className={`h-15 rounded-4xl border-[#e5e7eb] focus:border-[#8898f0] focus:ring-[#8898f0] pl-10 placeholder:text-lg text-lg ${
                    errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-[#8898f0] font-medium text-base">Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                <Input
                  type="text"
                  placeholder="123 Main Street"
                  {...register("address")}
                  className={`h-15 rounded-4xl border-[#e5e7eb] focus:border-[#8898f0] focus:ring-[#8898f0] pl-10 placeholder:text-lg text-lg ${
                    errors.address ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[#8898f0] font-medium text-base">City</Label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
              <Input
                type="text"
                placeholder="New York"
                {...register("city")}
                className={`h-15 rounded-4xl border-[#e5e7eb] focus:border-[#8898f0] focus:ring-[#8898f0] pl-10 placeholder:text-lg text-lg ${
                  errors.city ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
            </div>
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-8 py-3 rounded-4xl font-medium text-base h-auto disabled:opacity-50"
            >
              {isSubmitting
                ? editContact
                  ? "Updating..."
                  : "Adding..."
                : editContact
                  ? "Update Contact"
                  : "Add Contact"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
