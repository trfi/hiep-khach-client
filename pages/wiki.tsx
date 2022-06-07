import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '../components/home'

const Wifi = () => {
  // const [link, setLink] = useState('')

  // const router = useRouter()

  // useEffect(() => {
  //   if (router.query.t == 'download-ios') setLink('https://drive.google.com/file/d/1VmHoWX0Ybt3qlRZz_87_nobj0dKdU8Cp/preview')
  //   else setLink('https://drive.google.com/file/d/10YhzXbqAV8_8oMpyBAmjSJ78dznKIBYe/preview')
  // }, [router])

  const listMenu = [
    {
      link: 'https://drive.google.com/file/d/10YhzXbqAV8_8oMpyBAmjSJ78dznKIBYe/preview',
      title: 'Thông tin nhân vật',
    },
    {
      link: 'https://drive.google.com/file/d/1Rnh7NsXJEF54IkzcI51X8mB2NMFQ9I_v/preview',
      title: 'Vật phẩm mua bằng KNB (vàng)',
    },
    {
      link: 'https://drive.google.com/file/d/1FmBRsSSyl_Moa2-6H6_DVCQGeA0v3oij/preview',
      title: 'Vật phẩm mua bằng bạc',
    },
    {
      link: 'https://drive.google.com/file/d/19riSx7I90Y0xPKOoByrpAq-FwD_JWxDf/preview',
      title: 'Vật phẩm trong game bằng điểm',
    },
    {
      link: 'https://drive.google.com/file/d/1HLf6dgJcNWRIx8UtsdYc5_i1VapUY5_K/preview',
      title: 'Vật phẩm trong game bằng xu',
    },
    {
      link: 'https://drive.google.com/file/d/1VmHoWX0Ybt3qlRZz_87_nobj0dKdU8Cp/preview',
      title: 'Hướng dẫn tải game IOS',
    },
  ]

  function handleClick(link: string) {
    setTimeout(() => {
      window.open(link, '_blank');
    })
  }

  return (
    <div>
      <Header hideLogo></Header>
      <main className="flex flex-col lg:flex-row w-full justify-around py-10 text-white">
        <ul className="list-disc lg:text-lg space-y-2 px-6">
          {listMenu.map((item, idx) => (
            <li key={idx}>
              <button onClick={() => handleClick(item.link)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {/* <embed src={link} className='w-full max-w-3xl h-[50vh] lg:h-[80vh] mt-10 lg:mt-0'></embed> */}
        {/* <iframe src="https://drive.google.com/file/d/10YhzXbqAV8_8oMpyBAmjSJ78dznKIBYe/preview" width="640" height="480"></iframe> */}
      </main>
    </div>
  )
}
export default Wifi
