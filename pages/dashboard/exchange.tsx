import axiosClient from '@/api/axios-client'
import { DashboardLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'
import { AxiosResponse } from 'axios'
import { SetStateAction, useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'

const packages = [
  {
    id: '1',
    price: 100,
    knb: 100000,
  },
  {
    id: '2',
    price: 200,
    knb: 200000,
  },
  {
    id: '3',
    price: 500,
    knb: 500000,
  },
  {
    id: '4',
    price: 1000,
    knb: 1000000,
  },
]

const Exchange: NextPageWithLayout = () => {
  const [server, setServer] = useState(0)
  const [roles, setRoles] = useState<Array<any>>([])
  const { data: servers, mutate: serverMutate } = useSWR('/game/servers')

  const depositHistory = useSWR('/history/deposit')
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
      const character = roles.find(r => r.id == role).name
      const serverName = servers.find((s: any) => s.id == server).name
      await axiosClient.post('/wallet/deposit', {
        packId,
        server: serverName,
        role,
        character
      })
      toast.success('Buy success')
      depositHistory.mutate()
      userBalance.mutate()
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  return (
    <div className="w-full px-5 py-10 lg:px-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">BUY KNB</h1>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6">
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
          ): (
            <option disabled>Character not created yet</option>
          ) }
        </select>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:max-w-6xl mx-auto">
        {packages.map((pack) => (
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
