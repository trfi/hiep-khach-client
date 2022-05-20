import styles from './Header.module.css'

export const Header = () => {
  return (
    <>
      <div className={styles.logo}>
        <img src="/logo.png" alt="logo"/>
      </div>
      <header className="flex bg-black h-16 pb-3 justify-end items-end">
        <ul className="flex gap-12">
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#wifi">Wiki</a></li>
          <li><a href="#news">Tin tức</a></li>
          <li><a href="#">Đăng nhập</a></li>
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
    </>
  )
}