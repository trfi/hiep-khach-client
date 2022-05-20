import Link from 'next/link'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'

const Dashboard: NextPageWithLayout = () => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.Layout = DashboardLayout

export default Dashboard
