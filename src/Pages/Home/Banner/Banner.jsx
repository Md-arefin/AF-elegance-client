import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Banner = () => {
    return (
        <div className='lg:mb-20'>
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row w-full lg:px-20 '>
                        <div className="bg-[url('/banner/w11.jpg')] border-r-[20px] bg-cover bg-no-repeat border-white lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white ml-12 lg:mt-[700px]'>
                                <h3 className='lg:text-6xl mb-5'>The A&F Sloane</h3>
                                <h3 className='lg:text-5xl mb-5'>Tailored Pant</h3>
                                <p className='lg:text-3xl mb-5'>The pair to wear, perfect for dressing up or down.</p>
                            </div>
                        </div>

                        {/* man */}
                        <div className="bg-[url('/banner/m11.jpg')] border-l-[20px] bg-cover bg-no-repeat border-white lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white ml-12 lg:mt-[720px]'>
                                <h3 className='lg:text-6xl mb-5'>The Fall Drop</h3>

                                <p className='lg:text-3xl mb-5'>Build your fall capsule with graphics for all 32 NFL teams.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* 2 */}
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row w-full lg:px-20 '>
                        <div className="bg-[url('/banner/w22.jpg')] border-r-[20px] bg-cover bg-no-repeat border-white lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white ml-12 lg:mt-[700px]'>
                                <h3 className='lg:text-6xl mb-5'>The A&F Sloane</h3>
                                <h3 className='lg:text-5xl mb-5'>Tailored Pant</h3>
                                <p className='lg:text-3xl mb-5'>The pair to wear, perfect for dressing up or down.</p>
                            </div>
                        </div>

                        {/* man */}
                        <div className="bg-[url('/banner/m2.jpg')] border-l-[20px] bg-cover bg-no-repeat border-white lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white ml-12 lg:mt-[720px]'>
                                <h3 className='lg:text-6xl mb-5'>The Fall Drop</h3>

                                <p className='lg:text-3xl mb-5'>Build your fall capsule with graphics for all 32 NFL teams.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row w-full lg:px-20 '>
                        <div className="bg-[url('/banner/w33.jpg')] border-r-[20px] bg-cover bg-no-repeat border-white lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white ml-12 lg:mt-[700px]'>
                                <h3 className='lg:text-6xl mb-5'>The A&F Sloane</h3>
                                <h3 className='lg:text-5xl mb-5'>Tailored Pant</h3>
                                <p className='lg:text-3xl mb-5'>The pair to wear, perfect for dressing up or down.</p>
                            </div>
                        </div>

                        {/* man */}
                        <div className="bg-[url('/banner/m3.jpg')] border-l-[20px] bg-cover bg-no-repeat border-white lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white ml-12 lg:mt-[720px]'>
                                <h3 className='lg:text-6xl mb-5'>The Fall Drop</h3>

                                <p className='lg:text-3xl mb-5'>Build your fall capsule with graphics for all 32 NFL teams.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;