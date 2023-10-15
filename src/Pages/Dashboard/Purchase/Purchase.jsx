import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';


const Purchase = () => {
    const { user } = useContext(AuthContext);
    const [PaidItems, setPaidItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [dressTitle, setDressTitle] = useState('');
    const [proId, setProId] = useState(false);


    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            username: user?.displayName,
            email: user?.email,
            ratings: 5,
            message: '',
        },
    });

    useEffect(() => {
        fetch(`https://af-elegance-server-md-arefin.vercel.app/get-payment/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("[data]", data);
                setPaidItems(data)
            })
    }, [user]);

    const openReview = (id, dressTitle) => {
        setIsOpen(!isOpen)
        setDressTitle(dressTitle)
        setProId(id)
    }

    const onSubmit = (data) => {
        const reviewData = {
            user_name: data.username,
            user_photo_url: user?.photoURL,
            rating: data?.ratings,
            review_msg: data?.message,
        };
        console.log(reviewData);
        fetch(`https://af-elegance-server-md-arefin.vercel.app/add-review-product/${proId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsOpen(false)
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
        <div className=' pt-10'>
            <p className='text-center text-5xl'>Purchase Items</p>

            <div className='grid grid-cols-1 gap-10 mx-5'>
                {
                    PaidItems.map((PaidItem, i) =>
                        <div key={PaidItem._id} className="card bg-base-100 shadow-xl ">

                            <div className="card-body relative">

                                <div className='flex items-center flex-col md:flex-row gap-4'>
                                    {
                                        PaidItem.carts.map(items =>

                                            <div key={items._id} className="card w-60 bg-base-100 pt-5 shadow-xl">
                                                <div className="avatar mx-auto">
                                                    <figure> <img src={items.image} /></figure>
                                                </div>
                                                <div className="card-body relative">
                                                    <h2 className="card-title"> {items.dressTitle}</h2>
                                                    <p className='text-xl flex items-center justify-between'><span>Quantity: </span> {items.quantity}</p>
                                                    <p className='text-xl flex items-center justify-between'><span>Price:</span>$ {items.totalAmount}</p>
                                                    <div className="card-actions justify-center">
                                                        <button onClick={() => openReview(items.productId, items.dressTitle)} className="btn btn-primary">Add review</button>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    }
                                </div>
                                <p className='text-xl flex items-center justify-between my-5'><span>Total Price: </span>  $ {PaidItem.price}</p>
                                <p className='text-xl flex items-center justify-between'><span>Transaction ID: </span>    {PaidItem.transactionID}</p>


                            </div>
                        </div>
                    )
                }

            </div>

            <div className={`bg-gray-200 w-[30%] absolute z-50 lg:top-[50vh] lg:left-1/3 px-10 border-2 border-black rounded-xl ${isOpen ? "block" : 'hidden'} `}>
                <form className='w-full px-2 rounded-lg' onSubmit={handleSubmit(onSubmit)}>

                    <h1 className='text-center text-xl my-5'>Review your {dressTitle}</h1>

                    <div className="flex flex-col gap-3 mb-2">
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
                <button onClick={() => setIsOpen(!isOpen)} className="bg-red-500 btn lg:w-3/4 w-full p-1 rounded-md ml-12 mb-10">Close </button>
            </div>
        </div>
    );
};

export default Purchase;