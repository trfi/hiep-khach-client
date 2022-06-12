import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <div id='banner' className='relative text-center'>
      <img className='object-cover w-full' src="/images/banner.png" alt="banner" />
      <h4 className={styles.textBanner}>
        “Chính nghĩa ư? Đó là một đặc quyền nhỏ bé của những kẻ thắng trận.  <br />
        Bất kỳ ai, chỉ cần thắng là chính nghĩa thuộc về họ”  <br />
        ‘ Tống Lợi ‘
      </h4>
      <div>
        <img className='absolute w-[200px] lg:w-[547px] right-[1%] top-[1%]' src="/images/character1.svg" alt="character" />
      </div>
    </div>
  )
}