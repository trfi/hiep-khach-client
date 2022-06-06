export const Footer = () => {
  return (
    <footer className="flex justify-center flex-col lg:flex-row lg:justify-between pt-5 lg:pt-10 px-2 lg:px-28">
      <div className="flex">
        <div className="w-[200px] lg:w-[356px]">
          <img src="/images/character3.svg" alt="footer left" />
        </div>
        <div className="w-[200px] block lg:hidden">
          <img src="/images/character4.svg" alt="footer right" />
        </div>
      </div>
      <div className="flex flex-col justify-end pb-10 items-center">
        <ul className="lg:hidden flex w-full justify-around my-5">
          <li className='hover:text-gray-300'>
            <a href="#blog">Blog</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href="/wiki">Wiki</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href="#news">Tin tức</a>
          </li>
        </ul>
        <h2 className="pb-5 lg:pb-10 text-center text-2xl text-yellow-1">Hỗ trợ</h2>
        <div className="flex gap-4">
          <a className="w-[37px] lg:w-[55px] mr-[3px]" href="https://youtube.com/channel/UCEM5uaZJz3bWqPV-fFhE3lQ" target="_blank">
            <img width="60" src="/images/youtube.svg" alt="Youtube" />
          </a>
          <a className="w-[40px] lg:w-[60px]" href="https://t.me/hiepkhachtranhhung" target="_blank">
            <img width="60" src="/images/telegram.svg" alt="Telegram" />
          </a>
          <a className="w-[40px] lg:w-[60px]" href="https://www.facebook.com/hiepkhachtranhhung" target="_blank">
            <img width="60" src="/images/facebook.svg" alt="Facebook" />
          </a>
        </div>
        <p className="whitespace-pre text-center mt-6 text-sm lg:text-base">
          Phát hành độc quyền bởi HKTH <br />
          Email: admin@hiepkhachtranhhung.com <br />
          Đóng góp ý kiến và hỗ trợ
        </p>
      </div>
      <div className="hidden lg:block lg:w-[356px]">
        <img src="/images/character4.svg" alt="footer right" />
      </div>
    </footer>
  )
}
