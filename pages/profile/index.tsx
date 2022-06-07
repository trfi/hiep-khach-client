import axiosClient from '@/api/axios-client'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import toast from 'react-hot-toast'

const Profile: NextPageWithLayout = () => {

  async function handlerChangePassword(e: any) {
    e.preventDefault()
    try {
      await axiosClient.post('/users/change-password', {
        oldPassword: e.target.oldPassword.value,
        newPassword: e.target.newPassword.value,
        confirmNewPassword: e.target.confirmNewPassword.value,
      })
      toast.success('Change password success')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className='flex justify-center'>
      <form onSubmit={handlerChangePassword} className='bg-neutral p-8 rounded-2xl text-center w-full max-w-lg'>
        <h3 className='text-2xl font-semibold mb-4'>Change Password</h3>
        <div className="form-control w-full">
          <label className="label mt-2">
            <span className="label-text">Old password</span>
          </label>
          <input
            name="oldPassword"
            type="password"
            placeholder="Type here"
            required
            className="input input-primary input-bordered w-full"
          />
          <label className="label mt-2">
            <span className="label-text">New password</span>
          </label>
          <input
            name="newPassword"
            type="password"
            placeholder="Type here"
            required
            className="input input-primary input-bordered w-full"
          />
          <label className="label mt-2">
            <span className="label-text">Confirm new password</span>
          </label>
          <input
            name="confirmNewPassword"
            type="password"
            placeholder="Type here"
            required
            className="input input-primary input-bordered w-full"
          />
        </div>
        <button className='btn btn-success mt-8'>Change Password</button>
      </form>
    </div>
  )
}

Profile.Layout = DashboardLayout

export default Profile
