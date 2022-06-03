import axiosClient from "@/api/axios-client"
import { DashboardLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/models"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"
import useSWR from "swr"

const Wallet: NextPageWithLayout = () => {
  const [isDeposting, setIsDeposting] = useState(false)

  const { data, mutate } = useSWR('/wallet/balance', {
    dedupingInterval: 60 * 1000
  })

  // const depositHistory = useSWR('/history/deposit')

  // async function handlerSubmitDeposit(e: any) {
  //   e.preventDefault()
  //   try {
  //     const amount = +e.target.amount.value
  //     await axiosClient.post('/wallet/deposit', {
  //       amount
  //     })
  //     toast.success('Nạp thành công');
  //     mutate({ balance: data.balance + amount })
  //     depositHistory.mutate()
  //   } catch (e: any) {
  //     toast.error(e.message)
  //   }
  // }

  
  async function handlerSubmitDeposit(e: any) {
    e.preventDefault()
    setIsDeposting(true)
    const toastLoading = toast.loading('Waiting for payment')
    try {
      const result: { invoice_url: string } = await axiosClient.post(
        '/wallet/invoice',
        {
          priceAmount: +e.target.amount.value,
          payCurrency: 'usdtbsc',
        }
      )
      window.location.href = result.invoice_url
    } catch (e: any) {
      toast.error(e.message)
      toast.dismiss(toastLoading)
      setIsDeposting(false)
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
            <Link href="/dashboard/deposit-history"><button className="btn btn-sm">Deposit History</button></Link>
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
              <span className="label-text">Enter amount. Min 50</span>
            </label>
            <label className="input-group">
              <input type="text" name="amount" placeholder="50" defaultValue={50} className="input input-bordered w-full input-success" required />
              <span>USD</span>
            </label>
          </div>
          <button disabled={isDeposting} className="btn btn-accent ml-4">Deposit</button>
        </form>
    </div>
  )
}

Wallet.Layout = DashboardLayout

export default Wallet