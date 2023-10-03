import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ product }) => {

    const {_id , image, dressTitle, style, length, price} = product;
    return (
        <div key={_id} className="card w-3/3 bg-base-100 shadow-xl">
            <figure><img src={image} alt={dressTitle} /></figure>
            <div className="card-body">
                <h2 className="card-title">{dressTitle}</h2>
                <p className='font-serif font-bold text-2xl'>Price: $ {price}</p>
                <p className=''>Length: {length}</p>
                <p className=''>Style: {style}</p>
                <div className="card-actions justify-end">
                    <Link to="" className='btn'>
                        View details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;