import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../components/Hooks/useCart';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useAdmin from '../../components/Hooks/useAdmin';
import useFavourites from '../../components/Hooks/useFavourites';
import Modal from '../../components/Modal/Modal';

const SingleProduct = () => {

    const [isAdmin] = useAdmin();
    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const [, cartRefetch] = useCart();
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(1);
    let [isOpen, setIsOpen] = useState(false);
    const [, refetch] = useFavourites();

    const { category, sales, dressTitle, image, length, price, reviews, size, stock, style, type, _id } = product[0];
    console.log(_id);

    useEffect(() => {
        if (sales > 1) {
            const totalSales = sales / 100;
            const discountedPrice = parseFloat(price).toFixed(2) * totalSales;
            const total = price - discountedPrice.toFixed(2);
            const totalPrice = (total * quantity).toFixed(2);
            setTotalAmount(parseFloat(totalPrice))
        } else {
            const total = parseFloat(price).toFixed(2);
            const totalPrice = (total * quantity).toFixed(2);
            setTotalAmount(parseFloat(totalPrice))
        }

    }, [sales, quantity])

    // useEffect(() => {
    //     fetch(`https://af-elegance-server-md-arefin.vercel.app/getPaidData/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPaidData(data)
    //         })

    //     if (paidData.map(pd => pd.carts.map(item => item.productId !== _id))) {
    //         setAddREview(false)
    //     } else {
    //         setAddREview(true)
    //     }

    // }, [user])

    const handleQuantity = (quantity) => {

        if (quantity > 1) {
            setQuantity(quantity)
        }
        else {
            setQuantity(1)
        }
    }

    const handleAddToFavourite = id => {
        const favouriteItem = {
            productId: id,
            UserEmail: user?.email,
            totalAmount,
            quantity,
            dressTitle,
            image,
        }

        Swal.fire({
            title: 'Please Login!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'login!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsOpen(true)
            }
        })

        if (user) {
            fetch("https://af-elegance-server-md-arefin.vercel.app/favourites", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(favouriteItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();   // update ta cart number
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${dressTitle} added to the cart `,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    const handleAddToCart = (id) => {

        const cartItem = {
            productId: id,
            UserEmail: user?.email,
            totalAmount,
            quantity,
            dressTitle,
            image,
        }

        Swal.fire({
            title: 'Please Login!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'login!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsOpen(true)
            }
        })

        if (user) {
            fetch("https://af-elegance-server-md-arefin.vercel.app/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        cartRefetch();   // update ta cart number
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${dressTitle} added to the cart `,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div className='mt-5 mb-10'>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-10'>
                <div className='lg:w-[25%]'>
                    <figure><img src={image} alt={dressTitle} /></figure>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title lg:text-4xl">{dressTitle}</h2>

                        <p className='lg:text-xl'> Category: {category}</p>
                        <p className='lg:text-xl'>Length: {length}</p>
                        <p className='lg:text-xl'>stock: {stock}</p>
                        <p className='lg:text-xl'>style: {style}</p>
                        <p className='lg:text-xl w-48 grid grid-cols-4'>size:
                            <span className='lg:text-xl w-48 grid grid-cols-4 '>
                                {size?.map((sz, i) => <p className='font-sans' key={i}>
                                    {sz}
                                </p>)}
                            </span>
                        </p>

                        {
                            sales && <p className='lg:text-xl'>Sales: {sales} %</p> || ""
                        }

                        <p className='lg:text-xl flex items-center justify-between'>Price:
                            <div>
                                $<span className='font-sans font-bold'> {price}</span>
                            </div>
                        </p>

                        <div className='lg:text-xl flex items-center justify-between' >
                            <p className=''>Quantity:</p>

                            <div className='lg:text-xl flex items-center border-2'>
                                <AiOutlinePlus onClick={() => handleQuantity(quantity + 1)} className="w-10 text-2xl cursor-pointer" />

                                <p className="w-10 border-l-2 border-r-2 text-center">
                                    {quantity}
                                </p>

                                <AiOutlineMinus onClick={() => handleQuantity(quantity - 1)} className="w-10 text-2xl cursor-pointer" />
                            </div>
                        </div>

                        <p className='lg:text-xl flex items-center justify-between'>Total Amount:

                            <div>
                                $<span className='font-sans font-bold'> {totalAmount}</span>
                            </div>
                        </p>


                        {/* -- */}

                        <div className="card-actions justify-between mt-5">
                            <button onClick={() => handleAddToFavourite(_id)} className="btn bg-[#041C44] hover:bg-[#09A4DB] hover:text-black text-white" disabled={isAdmin?.admin == true}>Add to favourite</button>

                            <button onClick={() => handleAddToCart(_id)} className="btn bg-[#09A4DB] hover:bg-[#041C44] hover:text-white w-[184px] text-black" disabled={isAdmin?.admin === true}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:w-3/4 lg:w-1/2 mx-auto px-5' >
                <p className='text-xl md:text-3xl lg:text-5xl text-center'>Reviews</p>

                {
                    reviews ?
                        <p className='lg:text-xl text-center'>
                            {
                                reviews?.map((review, i) => <div key={i} className='mt-5 px-5  flex items-center justify-normal rounded-lg border-2 lg:gap-12'>

                                    <div className=''>
                                        <div className="avatar p-2">
                                            <div className="w-16 lg:w-24  rounded">
                                                <img src={review.user_photo_url} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <p>{review.user_name}</p>

                                        </div>

                                    </div>
                                    <div className='my-3 space-y-2'>
                                        <Rating style={{ maxWidth: 150 }} value={review?.rating} />
                                        <p >{review.review_msg}</p>
                                    </div>
                                </div>)
                            }
                        </p>
                        :
                        <p className='text-xl md:text-3xl lg:text-4xl text-center my-5'>
                            There is no review yet.
                        </p>
                }

            </div>
        </div>
    );
};

export default SingleProduct;