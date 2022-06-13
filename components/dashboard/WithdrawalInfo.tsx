import axiosClient from '@/api/axios-client'
import { useAuth } from '@/hooks'
import toast from 'react-hot-toast'

const WithdrawlalInfo = () => {

  const { user, mutate } = useAuth()

  async function handlerWithdrawlalInfo(e: any) {
    e.preventDefault()
    console.log(e.target.payNetwork.value);
    try {
      await axiosClient.patch('/users/withdrawal-info', {
        payAddress: e.target.payAddress.value,
        payNetwork: e.target.payNetwork.value,
      })
      toast.success('Cập nhật thông tin rút tiền thành công')
      mutate()
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <form
      onSubmit={handlerWithdrawlalInfo}
      className="w-full max-w-lg rounded-2xl bg-neutral p-8 text-center"
    >
      <h3 className="mb-4 text-2xl font-semibold">Thông tin thanh toán</h3>
      <div className="form-control w-full">
        <label className="label mt-2">
          <span className="label-text">Địa chỉ ví</span>
        </label>
        <input
          name="payAddress"
          required
          defaultValue={user?.withdrawalInfo?.payAddress}
          className="input input-bordered input-primary w-full"
        />
        <label className="label mt-2">
          <span className="label-text">Mạng</span>
        </label>
        <select
          name="payNetwork"
          defaultValue={user?.withdrawalInfo?.payNetwork}
          className="select select-primary w-full"
        >
          <option value="BEP20">BEP20</option>
        </select>
      </div>
      <button className="btn btn-success mt-8">Cập nhật</button>
    </form>
  )
}
export default WithdrawlalInfo
