import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner, Header, Footer } from '@/components/home'
import SlideHome from '@/components/home/Slide'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hiệp Khách Tranh Hùng</title>
        <meta name="description" content="MMORPG, HIEP KHACH - PLAY AND EARN 2022" />
        <meta name="keywords" content="HIEP KHACH TRANH HUNG - PLAY AND EARN 2022, MMORPG, RPG" />
        <meta name="url" content="https://hiepkhachtranhhung.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MMORPG,HIEP KHACH TRANH HUNG - PLAY AND EARN 2022" />
        <meta property="og:description" content="MMORPG, HIEP KHACH TRANH HUNG - PLAY AND EARN 2022" />
        <meta property="og:url" content="https://hiepkhachtranhhung.com" />
        <meta property="og:image" content="images/meta.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <Banner></Banner>
        <div className="flex items-center px-20 pt-20 lg:pt-0">
          <img width={88} src="/images/polygon1.svg" alt="warning" />
          <div className="flex-col lg:pt-3 text-sm lg:text-base">
            <p>
              Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe !!!{' '}
              <br />
            </p>
            <strong>Kệ nó, CHƠI NGAY !!!</strong>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <a
            href="#download"
            className="rounded-xl border-4 border-yellow-1 px-8 lg:px-12 py-1.5 lg:py-2 font-airstrike text-2xl leading-10 text-yellow-1 z-30"
          >
            PLAY NOW
          </a>
        </div>

        <div className="max-w-screen-2xl mx-auto my-32 px-8">
          <SlideHome />
        </div>

        <h2 className="mb-10 text-center text-2xl text-yellow-1">
          Chơi game vui - kiếm tiền thật
        </h2>

        <div className="mb-10 flex items-center">
          <div className="w-1/2 flex justify-center">
            <img src="/images/character2.svg" alt="character2" />
          </div>
          <span className="w-1/2 whitespace-pre-line px-10 text-white text-sm lg:text-base">
            Cùng mời thêm nhiều người chơi để hưởng ưu đãi hoa hồng <br />{' '}
            <br />
            Ngoài chơi game kiếm vật phẩm hiếm để trao đổi cho những người cần,
            người chơi có thể mời thêm hiệp khách mới để nhận những ưu đãi như
            hoa hồng, cùng các chính sách đặc biệt cho những người mời được
            nhiều hiệp khách chất lượng
          </span>
        </div>

        <h2 className="mt-10 mb-10 text-center text-2xl text-yellow-1">
          Tải game ngay
        </h2>

        <div
          className="flex flex-col items-center justify-center gap-4 pb-10"
          id="download"
        >
          <div className="flex items-center gap-4">
            <img src="/images/android.png" width={50} alt="android" />
            <a target='_blank' href="https://drive.google.com/file/d/1-Htt_uDXMJUFMVbFQtEBiFgwK-6bEXqN/view?usp=sharing">Tải xuống</a>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/ios.png" width={70} alt="android" />
            <a href="#">Tải xuống</a>
          </div>
        </div>

        <Footer></Footer>
      </main>
    </>
  )
}

export default Home
