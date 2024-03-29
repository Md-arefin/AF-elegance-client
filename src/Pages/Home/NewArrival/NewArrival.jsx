import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import sale from '../../../assets/images/icons/sale.png';

const NewArrival = () => {

    const { data: sales = [], refetch } = useQuery(["sales"], async () => {
        const res = await fetch('https://af-elegance-server-md-arefin.vercel.app/sales')
        return res.json();
    })


    return (
        <div className='my-20'>
            <p className='text-center text-2xl lg:text-5xl px-4 my-10'>Limited-Time Offer: Massive Discounts</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full gap-5 items-center px-2'>
                {
                    sales.map((product) =>
                        <div key={product._id} className="card bg-base-100 shadow-xl lg:h-[500px] relative">
                            <figure><img src={product.image} className="h-[384px] xl:h-[550px] w-[384px] xl:w-[490px]" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.dressTitle}</h2>

                                <div className='absolute top-2 right-4'>
                                    <div className='relative'>
                                        <img src={sale} className="w-28" alt="" />
                                        <p className='absolute top-2 right-10 text-3xl text-white -rotate-[23deg] font-serif'>{product.sales}%</p>
                                    </div>
                                </div>
                                <div className="card-actions mx-auto">
                                    <Link to={`/product/${product._id}`} className="w-full">
                                        <button className="btn bg-gradient-to-tr from-[#041C44] to-[#09A4DB] text-white hover:bg-gradient-to-bl">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    ); 
};

export default NewArrival;