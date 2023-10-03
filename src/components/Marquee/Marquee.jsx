import React from 'react';
import Marquee from "react-fast-marquee";
import free from "../../assets/images/icons/free-shipping.png"

const Marque = ({background}) => {
    return (
        <div>
            <Marquee className={`${background} text-black p-2`}>
                <p className='text-md lg:text-3xl'>
                    Free Shipping on Order Over $150
                </p>
                <img src={free} className="w-10 mx-10" alt="" />
            </Marquee>
        </div>
    );
};

export default Marque;