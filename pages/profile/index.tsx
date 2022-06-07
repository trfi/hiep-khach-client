import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'

const Profile: NextPageWithLayout = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-neutral p-8 rounded-2xl text-center w-full max-w-lg'>
        <h3 className='text-2xl font-semibold mb-4'>Change Password</h3>
        <div className="form-control w-full">
          <label className="label mt-2">
            <span className="label-text">Old password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-primary input-bordered w-full"
          />
          <label className="label mt-2">
            <span className="label-text">New password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-primary input-bordered w-full"
          />
          <label className="label mt-2">
            <span className="label-text">Confirm new password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-primary input-bordered w-full"
          />
        </div>
        <button className='btn btn-success mt-8'>Change Password</button>
      </div>
    </div>
  )
}

Profile.Layout = DashboardLayout

export default Profile
