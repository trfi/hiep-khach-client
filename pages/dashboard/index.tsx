import Link from 'next/link'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import useSWR from 'swr'
import toast from 'react-hot-toast'
import { useAuth } from '@/hooks'
import Banner from '@/components/dashboard/Banner'

const Dashboard: NextPageWithLayout = () => {
  const { data } = useSWR('/wallet/balance', {
    dedupingInterval: 60 * 1000
  })
  const { user } = useAuth()

  return (
    <div className='flex flex-col w-full items-center justify-center gap-6'>
      
      <div id='banner-dashboard' className='w-full max-w-screen-xl'>
        <Banner />
      </div>

      <div className="stats w-full max-w-screen-xl py-4 stats-vertical lg:stats-horizontal bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Lượt tải xuống</div>
          <div className="stat-value">12K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Tổng số Ref F1</div>
          <div className="stat-value">{user?.referralChild?.length}</div>
          <div className="stat-desc">↗︎ 112 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Đăng ký mới</div>
          <div className="stat-value">225</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="stats w-full max-w-screen-xl py-4 stats-vertical lg:stats-horizontal bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Số dư ví chính</div>
          <div className="stat-value">${data?.balance}</div>
          <div className="stat-actions">
            <Link href='/dashboard/wallet'><button className="btn btn-success btn-sm">Nạp tiền</button></Link>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Số dư ví hoa hồng</div>
          <div className="stat-value">${data?.commissionBalance}</div>
          <div className="stat-actions">
            <button onClick={() => toast('Comming soon')} className="btn btn-success btn-sm">Rút tiền</button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Tổng đã nạp</div>
          <div className="stat-value">${data?.totalDeposit}</div>
          <div className="stat-actions">
          <Link href='/dashboard/deposit-history'><button className="btn btn-sm">Lịch sử nạp</button></Link>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Tổng đã rút</div>
          <div className="stat-value">${data?.totalWithdrawal}</div>
          <div className="stat-actions">
            <button onClick={() => toast('Comming soon')} className="btn btn-sm">Lịch sử rút</button>
          </div>
        </div>
      </div>

    </div>
  )
}

Dashboard.Layout = DashboardLayout

export default Dashboard
