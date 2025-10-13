"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NewContactModal } from "./new-contact-modal"
import { DeleteContactModal } from "./delete-contact-modal"
import { Edit, Trash2 } from "lucide-react"
import HeadingSection from "./heading-section"

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
}

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Oliver Jack",
      email: "oliverjack@gmail.com",
      phone: "+1 977 333 2345",
      address: "123 Main St",
      city: "New York",
    },
    {
      id: "2",
      name: "Oliver Jack",
      email: "oliverjack@gmail.com",
      phone: "+1 977 333 2345",
      address: "123 Main St",
      city: "New York",
    },
    {
      id: "3",
      name: "Oliver Jack",
      email: "oliverjack@gmail.com",
      phone: "+1 977 333 2345",
      address: "123 Main St",
      city: "New York",
    },
    {
      id: "4",
      name: "Oliver Jack",
      email: "oliverjack@gmail.com",
      phone: "+1 977 333 2345",
      address: "123 Main St",
      city: "New York",
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [deleteContact, setDeleteContact] = useState<Contact | null>(null)

  const handleAddContact = (contactData: Omit<Contact, "id">) => {
    const newContact: Contact = {
      ...contactData,
      id: Date.now().toString(),
    }
    setContacts((prev) => [...prev, newContact])
  }

  const handleUpdateContact = (id: string, contactData: Omit<Contact, "id">) => {
    setContacts((prev) => prev.map((contact) => (contact.id === id ? { ...contactData, id } : contact)))
    setEditingContact(null)
  }

  const handleDeleteContact = (id: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact)
    setIsModalOpen(true)
  }

  const handleDeleteClick = (contact: Contact) => {
    setDeleteContact(contact)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingContact(null)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
     <div className="space-y-8">
      <HeadingSection
        heading="Easy To Find. Easy To Reach."
        description="Manage your contacts and communication preferences."
      />
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Contacts</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#8898f0] hover:bg-[#7785e8] text-white px-6 py-3 rounded-4xl font-medium text-base h-auto"
        >
          New Contact
        </Button>
      </div>

      {/* Contacts Table */}
      <div className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-100">
              <TableHead className="text-[#8898f0] font-medium text-base py-4 px-6">Name</TableHead>
              <TableHead className="text-[#8898f0] font-medium text-base py-4 px-6">Email</TableHead>
              <TableHead className="text-[#8898f0] font-medium text-base py-4 px-6">Phone</TableHead>
              <TableHead className="text-[#8898f0] font-medium text-base py-4 px-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#8898f0] rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {getInitials(contact.name)}
                    </div>
                    <span className="font-medium text-gray-800">{contact.name}</span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6 text-gray-600">{contact.email}</TableCell>
                <TableCell className="py-4 px-6 text-gray-600">{contact.phone}</TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => handleEditClick(contact)}
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-[#8898f0]/10 hover:text-[#8898f0]"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(contact)}
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Contact Modal - handles both add and edit */}
      <NewContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleAddContact}
        editContact={editingContact}
        onUpdate={handleUpdateContact}
      />

      <DeleteContactModal
        isOpen={!!deleteContact}
        onClose={() => setDeleteContact(null)}
        onConfirm={() => deleteContact && handleDeleteContact(deleteContact.id)}
        contactName={deleteContact?.name || ""}
      />
    </div>
    </div>
  )
}


export default Contacts;
