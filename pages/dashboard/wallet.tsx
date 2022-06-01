import axiosClient from "@/api/axios-client"
import { DashboardLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/models"
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
    <div className="p-10 flex flex-col w-full space-y-8">
      <h1 className="text-2xl">My wallet</h1><br />

      <div className="stats bg-primary text-primary-content py-4">
        <div className="stat">
          <div className="stat-title">Commission balance</div>
          <div className="stat-value mt-3 text-5xl">${ data?.commissionBalance }</div>
        </div>
      </div>

        {/* <form onSubmit={handlerSubmitDeposit} className="flex items-end w-full">
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Enter amount</span>
            </label>
            <label className="input-group">
              <input type="text" name="amount" placeholder="0" className="input input-bordered w-full input-primary" required />
              <span>USD</span>
            </label>
          </div>
          <button className="btn btn-primary ml-4">Deposit</button>
        </form> */}
    </div>
  )
}

Wallet.Layout = DashboardLayout

export default Wallet