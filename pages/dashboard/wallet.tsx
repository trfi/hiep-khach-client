import axiosClient from "@/api/axios-client"
import { DashboardLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/models"
import getConfig from "next/config"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"
import useSWR from "swr"
const { publicRuntimeConfig } = getConfig();

const Wallet: NextPageWithLayout = () => {
  const [isDeposting, setIsDeposting] = useState(false)
  const [payUrl, setPayUrl] = useState('')
  const [payAmount, setPayAmount] = useState(50)
  const [payCurrency, setPayCurrency] = useState('usdtbsc')
  let toastPaying = ''
  const { data, mutate } = useSWR('/wallet/balance', {
    dedupingInterval: 60 * 1000
  })

  function handleChangePayAmount(e: any) {
    setPayAmount(e.target.value)
    setPayUrl(`${publicRuntimeConfig.apiUrl}/wallet/payment?priceAmount=${e.target.value}&payCurrency=${payCurrency}`)
  }

  function handleChangePayCurrency(e: any) {
    setPayCurrency(e.target.value)
    setPayUrl(`${publicRuntimeConfig.apiUrl}/wallet/payment?priceAmount=${payAmount}&payCurrency=${e.target.value}`)
  }

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

  async function checkBalance(invoice_id: number) {
    const i = setInterval(async () => {
      const result: string = await axiosClient.get(`/wallet/paymentStatus/${invoice_id}`)
      if (result == 'confirmed') {
        clearInterval(i)
        toast.success('Payment success', { id: toastPaying })
        mutate()
      }
    }, 3000)
  }

  
  async function handlerSubmitDeposit(e: any) {
    e.preventDefault()
    setIsDeposting(true)
    toastPaying = toast.loading('Waiting for payment')
    try {
      const result: { invoice_url: string, id: number } = await axiosClient.post(
        '/wallet/invoice',
        {
          priceAmount: +e.target.amount.value,
          payCurrency,
        }
      )
      setPayUrl(result.invoice_url)
      document.getElementById('deposit')?.click()
      checkBalance(result.id)
      // window.location.href = result.invoice_url
    } catch (e: any) {
      toast.error(e.message)
      toast.dismiss(toastPaying)
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

        <form onSubmit={handlerSubmitDeposit} className="flex w-full">
          <div className="flex w-full flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/4">
              <label className="label">
                <span className="label-text">Enter amount. Min 50</span>
              </label>
              <label className="input-group">
                <input onChange={handleChangePayAmount} type="number" name="amount" defaultValue={payAmount} className="input input-bordered w-full input-success" min={50} max={1000000} required />
                <span>USD</span>
              </label>
            </div>

            <div className="w-full lg:w-1/6">
              <label className="label">
                <span className="label-text">Select currency</span>
              </label>
              <select onChange={handleChangePayCurrency} defaultValue="usdtbsc" className="select select-primary w-full">
                <option value='usdtbsc'>USDT BSC</option>
              </select>
            </div>
            <button className="btn btn-accent self-center mt-8 w-36">Deposit</button>
            <a id="deposit" target="_blank" href={payUrl} rel="noopener noreferrer" className="btn btn-accent w-36 mx-auto hidden">Deposit</a>
          </div>
        </form>
    </div>
  )
}

Wallet.Layout = DashboardLayout

export default Wallet