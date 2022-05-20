import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner, Header, Footer } from '@/components/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hiệp Khách Giang Hồ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <Banner></Banner>
        <div className='flex items-center px-20'>
          <img width={88} src="/images/polygon1.svg" alt="warning" />
          <div className="flex-col pt-3">
            <p>
              Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe !!! <br />
            </p>
            <strong>Kệ nó, CHƠI NGAY !!!</strong>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className='rounded-xl border-4 leading-10 border-yellow-1 text-yellow-1 px-12 py-2 text-2xl font-airstrike'>
            PLAY NOW
          </button>
        </div>
        
        <div className='flex justify-center mb-10'>
          <img src="/images/slides/slide1.png" width={711} alt="slide1" />
        </div>

        <h2 className='text-center mb-10 text-2xl text-yellow-1'>
          Chơi game vui - kiếm tiền thật
        </h2>

        <div className="flex items-center mb-10">
          <div className='w-1/2'>
            <img src="/images/game1.png" alt="game1" />
          </div>
          <span className='w-1/2 whitespace-pre-line text-white px-10'>
            Cùng mời thêm nhiều người chơi để hưởng ưu đãi hoa hồng <br /> <br />
            Ngoài chơi game kiếm vật phẩm hiếm để trao đổi cho
            những người cần,  người chơi có thể mời thêm hiệp 
            khách mới để nhận những ưu đãi như hoa hồng, cùng 
            các chính sách đặc biệt cho những người mời được 
            nhiều hiệp khách chất lượng
          </span>
        </div>

        <h2 className='text-center mt-10 mb-10 text-2xl text-yellow-1'>
          Tải game ngay
        </h2>

        <div className="flex flex-col justify-center items-center gap-4 pb-10">
          <div className='flex items-center gap-4'>
            <img src="/images/android.png" width={50} alt="android" />
            <a href="#">Tải xuống</a>
          </div>
          <div className='flex items-center gap-4'>
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
