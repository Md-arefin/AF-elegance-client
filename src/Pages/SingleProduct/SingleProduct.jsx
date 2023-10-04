import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleProduct = () => {

    const product = useLoaderData();

    const { category, dressTitle, image, length, price, reviews, size, stock, style, type, _id } = product[0];

    // console.log(product[0]);
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

                        <p className='lg:text-xl'>Price: ${price}</p>

                        <p className='lg:text-xl'>stock: {stock}</p>

                        <p className='lg:text-xl'>style: {style}</p>

                        <p className='lg:text-xl w-48 grid grid-cols-4'>size:
                            <span className='lg:text-xl w-48 grid grid-cols-4 '>
                                {size.map((sz, i) => <p className='font-sans' key={i}>
                                    {sz},
                                </p>)}
                            </span>
                        </p>

                        {/* {size[0]},{size[1]},{size[2]} */}
                        <p className='lg:text-xl'>Reviews:
                            {
                                reviews.map((review, i) => <div key={i} className='mt-5 px-5 border-2'>
                                    <div className='flex items-center'>

                                        <div className="avatar p-2">
                                            <div className="w-16 lg:w-24  rounded">
                                                <img src={review.user_photo_url} alt="Tailwind-CSS-Avatar-component" />
                                            </div>

                                        </div>
                                        <div className=''>
                                            <p>{review.user_name}</p>
                                            <Rating style={{ maxWidth: 150 }} value={review?.rating} />
                                        </div>

                                    </div>
                                    <p className='my-3'>{review.review_msg}</p>

                                </div>)
                            }
                        </p>

                        <div className="card-actions justify-between mt-5">
                            <button className="btn btn-primary">Add to favourite</button>
                            <button className="btn btn-primary w-[184px]">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;