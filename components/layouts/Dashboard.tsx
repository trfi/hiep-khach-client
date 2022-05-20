import Link from 'next/link'
import { useRouter } from 'next/router'
import { LayoutProps } from '@/models'

export function DashboardLayout({ children }: LayoutProps) {
  const router = useRouter()

  const menuItems = [
    {
      href: '/dashboard',
      title: 'Dashboard',
    },
    {
      href: '/dashboard/referral',
      title: 'Referral',
    },
  ]

  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4 items-start justify-start">
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
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          {menuItems.map(({ href, title }) => (
            <li key={title}>
              <Link href={href}>
                <a
                  className={`flex cursor-pointer hover:bg-gray-700 ${
                    router.asPath === href && 'bg-gray-800 text-white'
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
  )
}
