import React from 'react';
import { Link } from 'react-router-dom';

import sale from '../../assets/images/icons/sale.png';

const Details = ({ product }) => {

    const { _id, image, dressTitle, style, length, price, } = product;

    let type = '';

    if (product.type === "Men") {
        type = 'mens';
    } else if (product.type === "Women") {
        type = 'womens';
    } else {
        type = 'kids';
    }

    return (
        <div key={_id} className="card w-3/3 h-[550px] bg-base-100 shadow-xl relative">
            <figure><img className='' src={image} alt={dressTitle} /></figure>
            <div className="card-body">
                <h2 className="card-title">{dressTitle}</h2>
                <p className='font-serif font-bold text-2xl'>Price: $ {price}</p>
                <p className=''>Length: {length}</p>
                <p className=''>Style: {style}</p>

                {
                    product.sales && 
                    <div className='absolute top-2 right-4'>
                        <div className='relative'>
                            <img src={sale} className="w-28" alt="" />
                            <p className='absolute top-2 right-10 text-3xl text-white -rotate-[23deg] font-serif'>{product.sales}%</p>
                        </div>
                    </div>
                }
                <div className="card-actions justify-end">
                    <Link to={`/${type}/${_id}`} className='btn bg-gradient-to-tr from-[#041C44] to-[#09A4DB] text-white hover:bg-gradient-to-bl'>
                        View details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;