import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
// image import
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import banner4 from "../assets/banner4.jpg"
import banner5 from "../assets/banner5.jpg"
import banner6 from "../assets/banner6.jpg"
import banner7 from "../assets/banner7.jpg"
import banner8 from "../assets/banner8.jpg"


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay,EffectFade, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner4} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner5} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner6} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner7} alt="" className='w-full object-cover' /></SwiperSlide>
                <SwiperSlide><img src={banner8} alt="" className='w-full object-cover' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;