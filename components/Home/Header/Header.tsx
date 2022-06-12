import { useRecoilState } from 'recoil'
import { modalAuthState } from '@/atoms'
import AuthModal from '@/components/auth/Modal'
import { useAuth } from '@/hooks'
import Link from 'next/link'

export const Header = (props: { hideLogo?: boolean }) => {
  const [open, setOpen] = useRecoilState(modalAuthState)
  const { user, logout } = useAuth()

  return (
    <>
      {!props.hideLogo && (
        <div className="absolute left-[2%] top-[1%] z-20 w-[100px] lg:top-[2%] lg:w-[305px]">
          <img width={305} src="/logo.svg" alt="logo" />
        </div>
      )}
      <header className="flex h-16 items-center justify-end bg-black pb-0 text-white lg:items-end lg:pb-3">
        <ul className="hidden gap-16 md:flex">
          <li className="hover:text-gray-300">
            <a href="/">Trang chủ</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">Giới thiệu</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/wiki">Hướng dẫn</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#news">Tin tức</a>
          </li>
          <li className="hover:text-gray-300">
            {user ? (
              <Link href="/dashboard">Dashboard</Link>
            ) : (
              <button onClick={() => setOpen(true)}>Đăng nhập</button>
            )}
          </li>
        </ul>

        <div className="lg:hidden space-x-3">
          {props.hideLogo && <Link href="/">Home</Link>}
          {user ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <button onClick={() => setOpen(true)}>Đăng nhập</button>
          )}
        </div>

        <div className="relative mr-8 ml-3 flex flex-shrink-0 cursor-pointer lg:mx-10">
          <img
            src="/images/en.webp"
            width="30"
            alt="en"
            className="z-10"
          />
          <img
            src="/images/vi.webp"
            width="30"
            alt="vi"
            className="absolute left-3.5"
          />
        </div>
      </header>
      <AuthModal />
    </>
  )
}
