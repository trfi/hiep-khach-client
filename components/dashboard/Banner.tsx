import Slider, { Settings } from 'react-slick'

export default function Banner() {
  const settings: Settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: false,
  }
  return (
    <Slider {...settings}>
      <div>
        <img className="rounded-2xl" src="/images/banner-dashboard-1.png" />
      </div>
      <div>
        <img className="rounded-2xl" src="/images/banner-dashboard-2.png" />
      </div>
    </Slider>
  )
}
