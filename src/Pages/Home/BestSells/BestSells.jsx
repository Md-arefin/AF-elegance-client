import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const BestSells = () => {

    const { data: bestSales = [], refetch } = useQuery(["bestSales"], async () => {
        const res = await fetch('https://af-elegance-server-md-arefin.vercel.app/bestSales')
        return res.json();
    })
console.log(bestSales);
    return (
        <div className='my-20'>
            <p className='text-center text-2xl lg:text-5xl px-4 my-10'> Stylish Dresses for Every Season</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full gap-5 items-center px-2'>
                {
                    bestSales.map((product) =>
                        <div key={product._id} className="card bg-base-100 shadow-xl lg:h-[500px] relative">
                            <figure><img src={product.image} className="" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.dressTitle}</h2>
                                <p className='text-2xl font-serif'><span>Price: $</span>{product.price}</p>
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

export default BestSells;