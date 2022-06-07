import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner, Header, Footer } from '@/components/home'
import SlideHome from '@/components/home/Slide'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.query.ref) document.cookie = `ref=${router.query.ref}`
  }, [router])

  return (
    <>
      <Head>
        <title>Hiệp Khách Tranh Hùng</title>
        <meta
          name="description"
          content="MMORPG, HIEP KHACH - PLAY AND EARN 2022"
        />
        <meta
          name="keywords"
          content="HIEP KHACH TRANH HUNG - PLAY AND EARN 2022, MMORPG, RPG"
        />
        <meta name="url" content="https://hiepkhachtranhhung.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MMORPG,HIEP KHACH TRANH HUNG - PLAY AND EARN 2022"
        />
        <meta
          property="og:description"
          content="MMORPG, HIEP KHACH TRANH HUNG - PLAY AND EARN 2022"
        />
        <meta property="og:url" content="https://hiepkhachtranhhung.com" />
        <meta property="og:image" content="images/meta.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="bg-black text-white">
        <Banner></Banner>
        <div className="flex items-center px-20 pt-20 lg:pt-0">
          <img width={88} src="/images/polygon1.svg" alt="warning" />
          <div className="flex-col text-sm lg:pt-3 lg:text-base">
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
            className="z-30 rounded-xl border-4 border-yellow-1 px-8 py-1.5 font-airstrike text-2xl leading-10 text-yellow-1 lg:px-12 lg:py-2"
          >
            PLAY NOW
          </a>
        </div>

        <div className="mx-auto my-20 max-w-screen-2xl lg:my-32 lg:px-8">
          <SlideHome />
        </div>

        <h2 className="mb-10 text-center text-2xl text-yellow-1">
          Chơi game vui - kiếm tiền thật
        </h2>

        <div className="mb-10 flex items-center">
          <div className="flex w-1/2 justify-center">
            <img src="/images/character2.svg" alt="character2" />
          </div>
          <span className="w-1/2 whitespace-pre-line px-5 text-sm text-white lg:px-10 lg:text-base">
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
            <a
              target="_blank"
              href="https://download.hiepkhachtranhhung.com/apk"
            >
              Tải xuống
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/ios.png" width={70} alt="ios" />
            <a href="https://download.hiepkhachtranhhung.com/ipa">Tải xuống</a>
          </div>

          <button
            onClick={() =>
              setTimeout(() =>
                window.open(
                  'https://drive.google.com/file/d/1VmHoWX0Ybt3qlRZz_87_nobj0dKdU8Cp/preview',
                  '_blank'
                )
              )
            }
            className="text-sm text-yellow-300"
          >
            Hướng dẫn tải IOS
          </button>
        </div>

        <Footer></Footer>
      </main>
    </>
  )
}

export default Home
