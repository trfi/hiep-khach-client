import Link from 'next/link'
import { useRouter } from 'next/router'
import { LayoutProps } from '@/models'
import { useAuth } from '@/hooks'
import { Auth } from '../common'
import { Head } from 'next/document'

export function DashboardLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { user, logout } = useAuth()

  const menuItems = [
    {
      href: '/dashboard',
      title: 'Dashboard',
    },
    {
      href: '/dashboard/referral',
      title: 'Referral',
    },
    {
      href: '/dashboard/commission-history',
      title: 'Commission History',
    },
    {
      href: '/dashboard/wallet',
      title: 'Wallet',
    },
    {
      href: '/dashboard/deposit-history',
      title: 'Deposit History',
    },
    {
      href: '/dashboard/exchange',
      title: 'Exchange',
    },
    {
      href: '/dashboard/exchange-history',
      title: 'Exchange History',
    },
  ]

  return (
    <Auth>
      <header className='flex bg-slate-800 w-full px-6 py-2 justify-end items-center space-x-4 font-semibold'>
        <h1>{ user && user.username }</h1>
        <button onClick={logout} className='px-5 py-1.5 bg-slate-600 font-semibold rounded-lg text-white'>Logout</button>
      </header>

      <div className="drawer drawer-mobile h-[calc(100vh-52px)]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start p-6 lg:p-16">
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button absolute top-1 left-1 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-3 w-3 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-base-300 p-4 text-base-content">
            {menuItems.map(({ href, title }) => (
              <li className='my-[3px]' key={title}>
                <Link href={href}>
                  <a
                    className={`flex cursor-pointer hover:bg-gray-500 ${
                      router.asPath === href && 'bg-gray-700 text-white'
                    }`}
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Auth>
  )
}
