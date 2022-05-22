import TreeList from "@/components/dashboard/TreeList"
import { DashboardLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/models"

const Referral: NextPageWithLayout = () => {
  return (
    <div className="w-full">
      <h1>Referral</h1>

      <TreeList />
    </div>
  )
}

Referral.Layout = DashboardLayout

export default Referral