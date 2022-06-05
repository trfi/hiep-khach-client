import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import useSWR from 'swr'

const DepositHistory: NextPageWithLayout = () => {
  const { data } = useSWR('/history/deposit', {
    dedupingInterval: 60 * 1000,
    revalidateOnFocus: true
  })

  return (
    <div className="flex w-full overflow-x-auto">
      <table className="table-zebra table w-full bottom-1">
        <thead>
          <tr>
            <th>Payment Id</th>
            <th>Amount</th>
            <th>Pay Currency</th>
            <th>Deposit time</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((h: any, idx: number) => (
            <tr key={idx}>
              <th>{h.paymentId}</th>
              <td><div className='badge badge-lg badge-outline badge-accent'>{h.amount} $</div></td>
              <td><div className='badge uppercase badge-primary'>{h.payCurrency}</div></td>
              <td><div className='badge badge-md'>{new Date(h.createdAt).toLocaleString()}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

DepositHistory.Layout = DashboardLayout

export default DepositHistory
