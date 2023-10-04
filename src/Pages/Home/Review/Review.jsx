import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BiSolidQuoteSingleRight, BiSolidQuoteSingleLeft } from 'react-icons/bi';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import "swiper/css/navigation";
import "swiper/css";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/get-review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='my-20'>
            <h4 className='text-center text-3xl md:text-5xl my-10'>Testimonial</h4>
            <Swiper autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
                modules={[Autoplay]}
                className="mySwiper">
                {
                    reviews?.map((review) =>
                        <SwiperSlide key={review._id} className="w-full">
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col items-center justify-center mb-5'>
                                    <div className='flex justify-evenly '>
                                        <BiSolidQuoteSingleLeft className='text-center text-2xl text-slate-500'/>
                                        <p className='font-bold text-2xl md:text-2xl '>
                                            {review?.message}
                                        </p>
                                        <BiSolidQuoteSingleRight className='text-center text-xl text-slate-500' />
                                    </div>
                                   
                                </div>
                                <div className='flex items-center justify-center gap-3 pl-20 w-96'>
                                    <div className="avatar">
                                        <div className="w-16 md:w-20 lg:w-24 rounded-full">
                                            <img src={review.photoURL} />
                                        </div>
                                    </div>
                                    <div className='mx-auto space-y-2'>
                                        <p className='text-neutral-500 font-bold text-2xl'><Rating style={{ maxWidth: 150 }} value={review?.ratings} /> </p>
                                        <h3 className='text-xl md:text-3xl w-[300px]'> {review?.username}</h3>
                                        <p className='text-neutral-500 font-bold text-xs md:text-lg lg:text-xl'>
                                            {review?.email}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Review;