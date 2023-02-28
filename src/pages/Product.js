import food01 from '../assets/food/food1.jpg';
import food02 from '../assets/food/food2.jpg';
import food03 from '../assets/food/food3.jpg';
import food04 from '../assets/food/food4.jpg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Product(){
  return (
    <div className='food_wrap row'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide><img src={food01} alt='food1' /></SwiperSlide>
        <SwiperSlide><img src={food02} alt='food2' /></SwiperSlide>
        <SwiperSlide><img src={food03} alt='food3' /></SwiperSlide>
        <SwiperSlide><img src={food04} alt='food4' /></SwiperSlide>
        </Swiper>
    </div>
  );
};