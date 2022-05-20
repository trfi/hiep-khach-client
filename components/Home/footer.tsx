export const Footer = () => {
  return (
    <footer className="flex justify-between pt-10 px-28">
      <img width={250} src="/images/footer-left.png" alt="footer left" />
      <div className="flex flex-col justify-end pb-10 items-center">
        <h2 className="pb-10 text-center text-2xl text-yellow-1">Hỗ trợ</h2>
        <div className="flex gap-4">
          <a href="https://twitter.com/" target="_blank">
            <img width="60" src="/images/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://t.me/mrdang33" target="_blank">
            <img width="60" src="/images/telegram.svg" alt="Telegram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img width="60" src="/images/facebook.svg" alt="Facebook" />
          </a>
        </div>
        <p className="whitespace-pre text-center mt-6">
          Phát hành độc quyền bởi ... <br />
          Hotline: 19003333 - Email: cskh@hiepkhachgiangho.com <br />
          Đóng góp ý kiến và hỗ trợ
        </p>
      </div>
      <img width={250} src="/images/footer-right.png" alt="footer right" />
    </footer>
  )
}
