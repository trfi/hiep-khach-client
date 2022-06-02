import axiosClient from "@/api/axios-client"
import { DashboardLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/models"
import Link from "next/link"
import toast from "react-hot-toast"
import useSWR from "swr"

const Wallet: NextPageWithLayout = () => {

  const { data, error, mutate } = useSWR('/wallet/balance', {
    dedupingInterval: 60 * 1000
  })

  const depositHistory = useSWR('/history/deposit')

  async function handlerSubmitDeposit(e: any) {
    e.preventDefault()
    try {
      const amount = +e.target.amount.value
      await axiosClient.post('/wallet/deposit', {
        amount
      })
      toast.success('Nạp thành công');
      mutate({ balance: data.balance + amount })
      depositHistory.mutate()
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  return (
    <div className="flex flex-col w-full space-y-8">
      <h1 className="text-2xl">My wallet</h1><br />

      <div className="stats stats-vertical lg:stats-horizontal bg-primary text-primary-content py-4">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value mt-3 text-5xl">${ data?.balance }</div>
          <div className="stat-actions mt-8">
            <button className="btn btn-sm"><Link href="/dashboard/deposit-history">Deposit History</Link></button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Commission balance</div>
          <div className="stat-value mt-3 text-5xl">${ data?.commissionBalance }</div>
          <div className="stat-actions mt-8 flex flex-col lg:flex-row gap-2">
            <button onClick={() => toast('Comming soon')} className="btn btn-sm">Withdrawal</button>
            <button onClick={() => toast('Comming soon')} className="btn btn-sm">Tranfer to account balance</button>
          </div>
        </div>
      </div>

        <form onSubmit={handlerSubmitDeposit} className="flex items-end w-full">
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Enter amount. Min 100</span>
            </label>
            <label className="input-group">
              <input type="text" name="amount" placeholder="100" defaultValue={100} className="input input-bordered w-full input-success" required />
              <span>USD</span>
            </label>
          </div>
          <button className="btn btn-accent ml-4">Deposit</button>
        </form>
    </div>
  )
}

Wallet.Layout = DashboardLayout

export default Wallet