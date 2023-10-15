import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const ProductReviews = () => {

    const { user } = useContext(AuthContext);
    const product = useLoaderData();

    const { category, sales, dressTitle, image, length, price, reviews, size, stock, style, type, _id } = product[0];
    console.log(_id);

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
            user_name: data.username,
            user_photo_url: user?.photoURL,
            rating: data?.ratings,
            review_msg: data?.message,
        };
        console.log(reviewData);
        fetch(`https://af-elegance-server-md-arefin.vercel.app/add-review-product/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    reset();
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
        <div className='my-20'>
            <h1 className='text-center text-3xl my-10'>Review your {dressTitle}</h1>

            <div className={` bg-gray-200 mx-auto lg:w-[50%] px-10 border-2 border-transparent rounded-xl`}>
                <form className='w-full px-2 rounded-lg' onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col gap-3 mt-10 mb-2">
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
    );
};

export default ProductReviews;