import ChangePassword from '@/components/dashboard/ChangePassword'
import WithdrawlalInfo from '@/components/dashboard/WithdrawalInfo'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'

const User: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around gap-4">
      <WithdrawlalInfo />
      <ChangePassword />
    </div>
  )
}

User.Layout = DashboardLayout

export default User
