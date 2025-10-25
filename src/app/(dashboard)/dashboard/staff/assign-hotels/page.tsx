import AssignHotelForm from "@/components/dashboard/admin/assign-hotels/AssignHotelForm"
import DashboardHeroCover from "@/components/dashboard/admin/dashboard-hero-cover"

const AssignHotelsPage = () => {
  

  return (
    <>
      <DashboardHeroCover heading={"Assign Hotel to User"}>
        <AssignHotelForm />
      </DashboardHeroCover>
    </>
  )
}

export default AssignHotelsPage