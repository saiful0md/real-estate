import 'animate.css';
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
const Slider = () => {
    return (
        <div className=" h-[535px] rounded-xl p-3 border-4">
            <Swiper
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="rounded-xl relative"
            >
                <Swiper className="mySwiper border rounded-xl">
                    <SwiperSlide><div className='sliderall slider'></div></SwiperSlide>
                    <SwiperSlide><div className='sliderall slider1'></div></SwiperSlide>
                    <SwiperSlide><div className='sliderall slider2'></div></SwiperSlide>
                </Swiper>
                <div className="absolute top-32 lg:right-[22%] md:right-[20%] z-10 p-2 text-white  text-center">
                    <div className='max-w-xl'>
                        <h1 className="text-3xl text-orange-500 font-extrabold animate__animated animate__bounce">Residential Living Where Comfort Meets Community</h1>
                        <p className='animate__slideInRight animate__animated'>Step into our residential community, where comfort, convenience, and community converge harmoniously. Nestled in a serene setting, our homes offer modern amenities and inviting spaces for relaxation. Experience the essence of residential living with us, where every moment is infused with warmth, comfort, and a sense of belonging.</p>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;