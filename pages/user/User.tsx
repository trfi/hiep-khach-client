import ChangePassword from '@/components/dashboard/ChangePassword'
import ContactInfo from '@/components/dashboard/ContactInfo'
import WithdrawlalInfo from '@/components/dashboard/WithdrawalInfo'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'

const User: NextPageWithLayout = () => {
  // flex flex-col lg:flex-row justify-around gap-4
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
      <ContactInfo />
      <WithdrawlalInfo />
      <ChangePassword />
    </div>
  )
}

User.Layout = DashboardLayout

export default User
