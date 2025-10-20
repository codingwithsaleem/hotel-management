"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Edit, Key, Trash2 } from "lucide-react"

interface StaffMember {
  id: string
  name: string
  email: string
  roles: string
  admin: string
  status: "active" | "inactive" | "suspended"
}

const sampleStaffMembers: StaffMember[] = [
  {
    id: "1",
    name: "David Gagua",
    email: "top@top.com",
    roles: "None",
    admin: "Hotel Admin",
    status: "active"
  },
  {
    id: "2", 
    name: "Admins Testing",
    email: "admintest@top.com",
    roles: "None",
    admin: "Hotel Admin",
    status: "active"
  },
  {
    id: "3",
    name: "jba@jba.com",
    email: "jba@jba.com", 
    roles: "None",
    admin: "Hotel Admin",
    status: "active"
  },
  {
    id: "4",
    name: "სტაფოლო დეშია",
    email: "stafftest@top.com",
    roles: "None", 
    admin: "Staff",
    status: "active"
  }
]

const statusColors = {
  active: "bg-green-50 text-green-700 border-green-200",
  inactive: "bg-red-50 text-red-700 border-red-200",
  suspended: "bg-orange-50 text-orange-700 border-orange-200"
}

interface StaffManagementTableProps {
  staffMembers?: StaffMember[]
}

export function StaffManagementTable({ staffMembers = sampleStaffMembers }: StaffManagementTableProps) {
  const handleView = (staffId: string) => {
    console.log(`View staff member: ${staffId}`)
  }

  const handleEdit = (staffId: string) => {
    console.log(`Edit staff member: ${staffId}`)
  }

  const handleChangePassword = (staffId: string) => {
    console.log(`Change password for staff member: ${staffId}`)
  }

  const handleDelete = (staffId: string) => {
    console.log(`Delete staff member: ${staffId}`)
  }

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">All Staff</h2>
      
      <div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-primary/20 border-b-4 border-b-primary p-4 h-16 md:text-lg">
                <TableRow>
                  <TableHead className="text-foreground font-semibold">Name</TableHead>
                  <TableHead className="text-foreground font-semibold">Email</TableHead>
                  <TableHead className="text-foreground font-semibold">Roles</TableHead>
                  <TableHead className="text-foreground font-semibold">Admin</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffMembers.map((staff, index) => (
                  <TableRow 
                    key={staff.id} 
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                  >
                    <TableCell className="font-medium text-foreground">{staff.name}</TableCell>
                    <TableCell className="text-foreground">{staff.email}</TableCell>
                    <TableCell className="text-foreground">{staff.roles}</TableCell>
                    <TableCell className="text-foreground">{staff.admin}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusColors[staff.status]}>
                        {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleView(staff.id)}
                        >
                          <Eye className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleEdit(staff.id)}
                        >
                          <Edit className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleChangePassword(staff.id)}
                        >
                          <Key className="h-4 w-4 text-yellow-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleDelete(staff.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffManagementTable