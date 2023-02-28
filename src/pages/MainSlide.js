import React, {useRef, useState} from 'react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//slide image load
import slide01 from '../assets/tan_main_img1.jpg';
import slide02 from '../assets/tan_main_img2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination])
export default () => {
    const swiperRef = useRef(null);
    const [btn, setBtn] = useState(false);
    const posBtn = useRef(null);
  return (
    <div className='main_slide'>
    <Swiper
      // install Swiper modules
      ref={swiperRef}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{delay:5000, disableOnInteraction:false}}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={slide01} alt='tan slide 01' /></SwiperSlide>
      <SwiperSlide><img src={slide02} alt='tan slide 02' /></SwiperSlide>
    </Swiper>
   {/* play & stop */}
    <button onClick={() => {
        setBtn(!btn);
        if(btn === false){
            swiperRef.current.swiper.autoplay.stop();
            posBtn.current.style.background = '#f40';
            posBtn.current.innerText = '재생'
        }else{
            swiperRef.current.swiper.autoplay.start();
            posBtn.current.style.background = '#ff0';
            posBtn.current.innerText = '정지'
        }
    }} ref={posBtn}>정지</button>
    </div>
  );
};