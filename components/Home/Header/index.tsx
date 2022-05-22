import styles from './Header.module.css'
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
      <div className={styles.logo}>
        <img width={300} src="/logo.png" alt="logo" />
      </div>
      <header className="flex h-16 items-end justify-end bg-black pb-3">
        <ul className="flex gap-12">
          <li>
            <a href="#">Trang chủ</a>
          </li>
          <li>
            <a href="#about">Giới thiệu</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#wifi">Wiki</a>
          </li>
          <li>
            <a href="#news">Tin tức</a>
          </li>
          <li>
            {user ? (
              <Link href="/dashboard">Dashboard</Link>
            ) : (
              <button onClick={() => setOpen(true)}>Đăng nhập</button>
            )}
          </li>
        </ul>

        <div className="relative mx-10 flex flex-shrink-0 cursor-pointer">
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
