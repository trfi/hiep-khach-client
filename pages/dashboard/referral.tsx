import TreeList from '@/components/dashboard/TreeList'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@/hooks'
import toast, { Toaster } from 'react-hot-toast'

const Referral: NextPageWithLayout = () => {
  const { user } = useAuth()

  const refLink = `${
    typeof window !== 'undefined' && window.location.href
  }/?ref=${user && user.username}`

  function onCopyHandler() {
    navigator.clipboard.writeText(refLink)
    toast.success('Referral link copied')
  }

  return (
    <div className="w-full">
      <h1>Referral</h1>
      <div className="my-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold">Your referral link:</h2> <br />
        <div className="form-control w-3/5">
          <div className="input-group">
            <input
              type="text"
              value={refLink}
              disabled
              className="input input-bordered w-full"
            />
            <button onClick={onCopyHandler} className="btn btn-square">
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>
      </div>
      <TreeList />
    </div>
  )
}

Referral.Layout = DashboardLayout

export default Referral
