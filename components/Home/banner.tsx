import styles from './banner.module.css'

const Banner = () => {
  return (
    <div id='banner' className='relative text-center'>
      <img className='object-cover w-full' src="/images/banner.png" alt="banner" />
      <h4 className={styles.textBanner}>
        “Chính nghĩa ư? Đó là một đặc quyền nhỏ bé của những kẻ thắng trận.  <br />
        Bất kỳ ai, chỉ cần thắng là chính nghĩa thuộc về họ”  <br />
        ‘ Tống Lợi ‘
      </h4>
      <img className={styles.character} src="/images/nv.svg" alt="nv" />
    </div>
  )
}
export default Banner