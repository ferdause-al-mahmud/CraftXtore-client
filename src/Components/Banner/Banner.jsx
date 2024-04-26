// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="max-h-[720px]">
            <div>
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='max-h-[720px]' src="https://i.ibb.co/dW5bYvR/plate-with-karp-century-chinese-porcelain.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/0MtWqSb/2107201320122.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/rtTvmYj/2151003052-1.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;