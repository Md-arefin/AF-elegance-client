import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../components/Hooks/useCart';

const SingleProduct = () => {

    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const [, refetch] = useCart();

    const { category, sales, dressTitle, image, length, price, reviews, size, stock, style, type, _id } = product[0];

    console.log(product[0]);

    const handleAddToCart = (id) => {

        const cartItem = {
            productId: id,
            UserEmail: user?.email,
            totalAmount : 100
        }

        if (user) {
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
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

    return (
        <div className='mt-5 mb-10'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-10'>
                <div className='lg:w-[25%]'>
                    <figure><img src={image} alt={dressTitle} /></figure>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title lg:text-4xl">{dressTitle}</h2>

                        <p className='lg:text-lg'> Category: {category}</p>
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

                        <p className='lg:text-xl'>Price: ${price}</p>
                        <p className='lg:text-xl'>Quantity: 0</p>
                        <p className='lg:text-xl'>Sales: {sales} %</p>
                        {/* -- */}

                        <div className="card-actions justify-between mt-5">
                            <button className="btn btn-primary">Add to favourite</button>

                            <button onClick={() => handleAddToCart(_id)} className="btn btn-primary w-[184px]">Add to cart</button>
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
                                reviews?.map((review, i) => <div key={i} className='mt-5 px-5  flex items-center justify-evenly rounded-lg border-2'>

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