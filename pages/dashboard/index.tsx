import Link from 'next/link'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center gap-4 mt-10'>
      
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">430</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$0,00</div>
          <div className="stat-actions">
            <button className="btn btn-success btn-sm">Add funds</button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$0,00</div>
          <div className="stat-actions space-x-2">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">deposit</button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Deposit</div>
          <div className="stat-value">$0,00</div>
          <div className="stat-actions">
            <button className="btn btn-sm">DETAIL</button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Commissions</div>
          <div className="stat-value">$0,00</div>
          <div className="stat-actions">
            <button className="btn btn-success btn-sm">Withdrawal</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.Layout = DashboardLayout

export default Dashboard
