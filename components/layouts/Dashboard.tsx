import Link from 'next/link'
import { useRouter } from 'next/router'
import { LayoutProps } from '@/models'
import { useAuth } from '@/hooks'
import { Auth } from '../common'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
      {/* <header className='flex bg-slate-800 w-full px-6 py-2 justify-end items-center space-x-4 font-semibold'>
        <h1>{ user && user.username }</h1>
        <button onClick={logout} className='px-5 py-1.5 bg-slate-600 font-semibold rounded-lg text-white'>Logout</button>
      </header> */}

      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start">
          <div className="navbar w-full bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-2" className="btn btn-ghost btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 font-airstrike font-bold text-slate-400"></div>
            <div className='flex-none'>
              <ul className="menu menu-horizontal">
                <li>
                  <button
                    onClick={logout}
                    className="rounded-xl text-xl"
                  >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 lg:p-16">{children}</div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-72 lg:w-80 overflow-y-auto bg-base-300 p-4 text-base-content">
            <div className="mb-1 flex items-center p-4 font-bold">
              <div className="avatar placeholder online mr-4">
                <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                  <span className="text-xl uppercase">
                    {user?.username.charAt(0)}
                  </span>
                </div>
              </div>
              <div>{user?.username}</div>
            </div>
            {menuItems.map(({ href, title }) => (
              <li className="my-[3px]" key={title}>
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
