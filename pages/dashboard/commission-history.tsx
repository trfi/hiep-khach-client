import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import useSWR from 'swr'

const ExchangeHistory: NextPageWithLayout = () => {
  const { data } = useSWR('/history/commission', {
    dedupingInterval: 60 * 1000,
  })

  return (
    <div className="flex w-full overflow-x-auto p-10">
      <table className="table-zebra table w-full bottom-1">
        <thead>
          <tr>
            <th></th>
            <th>Commission Pay</th>
            <th>Username</th>
            <th>Ref level</th>
            <th>Package Price</th>
            <th>Percent</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((h: { packPrice: string, commissionPercent: string, refLevel: number, commissionPay: string, buyUsername: string, createdAt: string }, idx: number) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{h.commissionPay}</td>
              <td>{h.buyUsername}</td>
              <td>{h.refLevel}</td>
              <td>{h.packPrice}</td>
              <td>{h.commissionPercent}</td>
              <td>{new Date(h.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

ExchangeHistory.Layout = DashboardLayout

export default ExchangeHistory
