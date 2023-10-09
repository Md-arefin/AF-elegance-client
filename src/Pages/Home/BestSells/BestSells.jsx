import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const BestSells = () => {

    const { data: allProducts = [], refetch } = useQuery(["allProducts"], async () => {
        const res = await fetch('http://localhost:5000/all-products')
        return res.json();
    })

    return (
        <div className='my-20'>
            <p className='text-center text-2xl lg:text-5xl px-4 my-10'> Stylish Dresses for Every Season</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full gap-5 items-center px-2'>
                {
                    allProducts.map((product) =>
                        <>
                            {
                                product.bestSales == "Yes" && <div key={product._id} className="card bg-base-100 shadow-xl lg:h-[500px] relative">
                                    <figure><img src={product.image} className="" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.dressTitle}</h2>
                                        <p className='text-2xl font-serif'><span>Price: $</span>{product.price}</p>
                                        <div className="card-actions ml-12">
                                        <Link to={`/product/${product._id}`} className="w-full">
                                                <button className="btn btn-primary">View details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default BestSells;