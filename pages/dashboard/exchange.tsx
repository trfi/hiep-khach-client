import axiosClient from '@/api/axios-client'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'

const Exchange: NextPageWithLayout = () => {
  const [server, setServer] = useState(0)
  const [roles, setRoles] = useState<Array<any>>([])
  const { data: servers } = useSWR('/game/servers')
  const { data: knbPackages } = useSWR('/game/knbpack')

  const exchangeHistory = useSWR('/history/exchange')
  const userBalance = useSWR('/wallet/balance')

  const handleChangeServer = (e: any) => {
    setServer(+e.target.value)
    axiosClient
      .get(`/game/roles/${e.target.value}`)
      .then((data: any) => setRoles(data))
      .catch((e) => toast.error(e))
  }

  const [role, setRole] = useState('')

  const handleChangeRole = (e: any) => {
    setRole(e.target.value)
  }

  async function buyHandle(packId: string) {
    if (!role) return toast.error('Please select character')
    try {
      const character = roles.find((r) => r.id == role).name
      const serverName = servers.find((s: any) => s.id == server).name
      await axiosClient.post('/game/buyknbpack', {
        packId,
        server: serverName,
        role,
        character,
      })
      toast.success('Buy success, check your mail in game')
      exchangeHistory.mutate()
      userBalance.mutate()
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  return (
    <div className="w-full py-5 px-5 lg:px-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">BUY KNB</h1>
      </div>

      <div className="mt-6 flex flex-col items-center gap-6">
        <select
          onChange={handleChangeServer}
          className="select select-primary w-full max-w-xs"
          defaultValue="server"
        >
          <option value="server" disabled>
            Server
          </option>
          {servers?.map((server: { id: number; name: string }) => (
            <option value={server.id} key={server.id}>
              {server.name}
            </option>
          ))}
        </select>
        <select
          onChange={handleChangeRole}
          className="select select-primary w-full max-w-xs"
          defaultValue="character"
        >
          <option value="character" disabled>
            Character
          </option>
          {roles && roles?.length ? (
            roles.map((role: { id: number; name: string }) => (
              <option value={role.id} key={role.id}>
                {role.name}
              </option>
            ))
          ) : server == 0 ? (
            <option disabled>Choose server</option>
          ) : (
            <option disabled>Character not created yet</option>
          )}
        </select>
      </div>

      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:max-w-6xl">
        {knbPackages && Object.values(knbPackages).map((pack: any) => (
          <div
            className="card bg-neutral text-slate-100 shadow-xl"
            key={pack.id}
          >
            <div className="card-body">
              <h2 className="card-title text-4xl">
                {pack.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </h2>
              <p>
                ={' '}
                {pack.knb
                  .toLocaleString('vn-VI', {
                    style: 'currency',
                    currency: 'KNB',
                  })
                  .replace(',00', '')}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => buyHandle(pack.id)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Exchange.Layout = DashboardLayout

export default Exchange