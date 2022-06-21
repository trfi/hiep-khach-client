import TreeList from '@/components/dashboard/TreeList'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@/hooks'
import toast from 'react-hot-toast'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

const Referral: NextPageWithLayout = () => {
  const { user } = useAuth()

  console.log(user);

  const refLink = `${
    typeof window !== 'undefined' && window.location.origin
  }/?ref=${user && user.id}`

  function onCopyHandler() {
    navigator.clipboard.writeText(refLink)
    toast.success('Sao chép thành công')
  }

  return (
    <div className="w-full">
      <div className="my-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold">Liên kết giới thiệu:</h2> <br />
        {
          user?.currentPack ? (
            <div className="form-control w-full max-w-xl">
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
          ) : <Link href="/dashboard/exchange"><button className='hover:text-yellow-400 text-warning text-2xl'>Nạp gói từ 50$ trở trên để tham gia chương trình giới thiệu</button></Link>
        }
      </div>
      <TreeList />

      <div className="mt-10 flex flex-col items-center">
        <Disclosure defaultOpen={false}>
          <p>Nhận được tiền hoa hồng khi giới thiệu người chơi tham gia và mua KNB</p>
          <Disclosure.Button className="btn btn-outline btn-success mt-3 mx-auto mb-6">
            Xem hoa hồng giới thiệu
          </Disclosure.Button>
          <Disclosure.Panel>
            <img
              className="mx-auto"
              width={800}
              src="/images/commission-level.jpg"
              alt="Commission"
            />
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  )
}

Referral.Layout = DashboardLayout

export default Referral
