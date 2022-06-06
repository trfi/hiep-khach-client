import { useState } from 'react'
import { Header } from '../components/home'

const Wifi = () => {
  const [link, setLink] = useState('https://drive.google.com/file/d/10YhzXbqAV8_8oMpyBAmjSJ78dznKIBYe/preview')

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
  ]

  function handleClick(link: string) {
    setLink(link)
  }

  return (
    <div>
      <Header hideLogo></Header>
      <main className="flex flex-col lg:flex-row w-full justify-around py-10">
        <ul className="list-disc lg:text-lg space-y-2 px-2 lg:px-0">
          {listMenu.map((item) => (
            <li>
              <button onClick={() => handleClick(item.link)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {/* <iframe src="https://drive.google.com/file/d/10YhzXbqAV8_8oMpyBAmjSJ78dznKIBYe/preview" width="640" height="480"></iframe> */}
        <embed src={link} className='w-full max-w-2xl h-[50vh] lg:h-[80vh] mt-10 lg:mt-0'></embed>
      </main>
    </div>
  )
}
export default Wifi
