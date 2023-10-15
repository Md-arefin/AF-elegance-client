import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import img1 from "../../../assets/images/2456038516.jpg"
import { AuthContext } from '../../../provider/AuthProvider';

const DashboardReview = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            username: user?.displayName,
            email: user?.email,
            ratings: 5,
            message: '',
        },
    });

    const onSubmit = (data) => {
        const reviewData = {
            username:data.username,
            photo: user?.photoURL,
            email: data?.email,
            ratings: data?.ratings,
            message: data?.message,
        };
        console.log(reviewData);
        fetch("https://af-elegance-server-md-arefin.vercel.app/add-review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thankyou for your feedback',
                        showConfirmButton: false,
                        timer: 1500
                    })
                };
            })

    }
    return (
        <div className='mt-10'>
            <p className='text-3xl text-center lg:text-5xl px-5'>Please Share journey with us</p>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='w-full lg:w-2/4 px-5 mb-10'>
                    <img src={img1} className='lg:w-2/3 lg:ml-32' alt="" />
                    <p className='text-xl text-center'>Share Your Thoughts with Us! Your feedback is important. Leave a review and help us improve.</p>
                </div>

                {/* review form */}
                <div className='w-full lg:w-2/4 lg:mr-20 px-4'>
                    <form className='w-full px-2 rounded-lg' onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col gap-3 lg:mt-28 mb-2">
                            <label htmlFor="username">User Name</label>
                            <input
                                className="w-full rounded-md"
                                type="text"
                                placeholder='Enter your username'
                                {...register("username")} />
                        </div>

                        <div className="flex flex-col gap-3 mb-2">
                            <label htmlFor="ratings">Ratings</label>
                            <select
                                className="w-full rounded-md"
                                {...register("ratings", {
                                    // required: true,
                                })}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3  mb-2">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="w-full rounded-md"
                                type="text"
                                placeholder='Share your review'
                                {...register("message")} />
                        </div>

                        <div className="flex justify-center my-10">

                            <button type="submit" className="bg-[#a98467] btn lg:w-3/4 w-full p-1 rounded-md flex justify-evenly items-center">Submit </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashboardReview;