import { useRecoilState } from 'recoil'
import { modalAuthState } from '@/atoms'
import AuthModal from '@/components/auth/Modal'
import { useAuth } from '@/hooks'
import Link from 'next/link'

export const Header = () => {
  const [open, setOpen] = useRecoilState(modalAuthState)
  const { user, logout } = useAuth()

  return (
    <>
      <div className='absolute w-[100px] lg:w-[305px] left-[2%] top-[1%] lg:top-[2%] z-20'>
        <img width={305} src="/logo.svg" alt="logo" />
      </div>
      <header className="flex h-16 items-center lg:items-end justify-end bg-black pb-0 lg:pb-3">
        <ul className="hidden md:flex gap-16">
          <li className='hover:text-gray-300'>
            <a href="#">Trang chủ</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href="#about">Giới thiệu</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href="#blog">Blog</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href="#wifi">Wiki</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href="#news">Tin tức</a>
          </li>
          <li className='hover:text-gray-300'>
            {user ? (
              <Link href="/dashboard">Dashboard</Link>
            ) : (
              <button onClick={() => setOpen(true)}>Đăng nhập</button>
            )}
          </li>
        </ul>

        <div className='lg:hidden'>
          {user ? (
                <Link href="/dashboard">Dashboard</Link>
              ) : (
                <button onClick={() => setOpen(true)}>Đăng nhập</button>
              )}
        </div>

        <div className="relative mr-8 ml-3 lg:mx-10 flex flex-shrink-0 cursor-pointer">
          <img
            src="/images/en.webp"
            width="30"
            alt="Lang EN"
            className="z-10"
          />
          <img
            src="/images/vi.webp"
            width="30"
            alt="Lang VI"
            className="absolute left-3.5"
          />
        </div>
      </header>
      <AuthModal />
    </>
  )
}
