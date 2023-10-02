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
                        <div className="bg-[url('/banner/w11.jpg')] bg-cover bg-no-repeat border-b-[20px] lg:border-b-0 lg:border-r-[20px]   border-white w-full lg:w-[912px] h-96 lg:h-[950px]">
                            <div className='flex flex-col text-blue-800 lg:text-white ml-5 lg:ml-12 
                            mt-[110px] lg:mt-[700px] pr-5 md:pr-0'>
                                <h3 className='text-3xl lg:text-6xl mb-5'>The A&F Sloane</h3>
                                <h3 className='lg:text-5xl mb-5'>Tailored Pant</h3>
                                <p className='lg:text-3xl mb-5 '>The pair to wear, perfect for dressing up or down.</p>
                            </div>
                        </div>

                        {/* man */}
                        <div className="bg-[url('/banner/m11.jpg')] bg-cover lg:bg-no-repeat lg:border-l-[20px] border-white lg:w-[912px] w-full h-96 lg:h-[950px]">
                            <div className='flex flex-col text-amber-300 lg:text-white ml-5 lg:ml-12 
                           mt-[250px] lg:mt-[720px] pr-5 md:pr-0'>
                                <h3 className='text-3xl lg:text-6xl mb-5'>The Fall Drop</h3>

                                <p className='lg:text-3xl mb-5'>Build your fall capsule with graphics for all 32 NFL teams.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* 2 */}
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row w-full lg:px-20 '>
                        <div className="bg-[url('/banner/w22.jpg')] bg-cover bg-no-repeat lg:border-r-[20px] border-white w-full h-96 lg:w-[912px] lg:h-[950px]">

                            <div className='flex flex-col text-amber-300 lg:text-white pl-5 pt-28 bg-black bg-opacity-50 h-96 lg:h-[950px] lg:pl-12 lg:pt-[700px] pr-5 md:pr-0'>
                                <h3 className='text-3xl lg:text-6xl mb-5'>The A&F Sloane</h3>
                                <h3 className='lg:text-5xl mb-5'>Tailored Pant</h3>
                                <p className='lg:text-3xl mb-5'>The pair to wear, perfect for dressing up or down.</p>
                            </div>
                        </div>

                        {/* man */}
                        <div className="bg-[url('/banner/m2.jpg')] bg-cover bg-no-repeat border-t-[20px] lg:border-t-0 lg:border-l-[20px]  border-white w-full h-96 lg:w-[912px] lg:h-[950px]">
                            <div className='flex flex-col text-blue-800 lg:text-white ml-5 lg:ml-12 mt-52 lg:mt-[720px] pr-5 md:pr-0'>
                                <h3 className='text-3xl lg:text-6xl mb-5'>The Fall Drop</h3>
                                <p className='lg:text-3xl mb-5'>Build your fall capsule with graphics for all 32 NFL teams.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row w-full lg:px-20 '>
                        <div className="bg-[url('/banner/w33.jpg')] bg-cover bg-no-repeat border-b-[20px] lg:border-b-0 lg:border-r-[20px]  border-white w-full h-96 lg:w-[912px] lg:h-[950px]">
                            <div className='flex flex-col text-blue-700 lg:text-white ml-5 lg:ml-12 mt-[110px] lg:mt-[700px] pr-5 md:pr-0'>
                                <h3 className='text-3xl lg:text-6xl mb-5'>The A&F Sloane</h3>
                                <h3 className='lg:text-5xl mb-5'>Tailored Pant</h3>
                                <p className='lg:text-3xl mb-5'>The pair to wear, perfect for dressing up or down.</p>
                            </div>
                        </div>

                        {/* man */}
                        <div className="bg-[url('/banner/m3.jpg')] bg-cover bg-no-repeat lg:border-l-[20px] border-white w-full h-96 lg:w-[912px]  lg:h-[950px]">
                            <div className='flex flex-col text-white pl-5 pt-48 bg-black bg-opacity-50 h-96 lg:h-[950px] lg:pl-12 lg:pt-[700px] pr-5 md:pr-0'>
                                <h3 className=' text-3xl lg:text-6xl mb-5'>The Fall Drop</h3>

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