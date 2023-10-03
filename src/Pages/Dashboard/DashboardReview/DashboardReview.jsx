import React from 'react';
import img1 from "../../../assets/images/2456038516.jpg"

const DashboardReview = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <img src={img1} className='w-2/3 lg:w-1/3' alt="" />
                <p className='text-xl lg:text-3xl'>Please Share journey with us</p>
            </div>
        </div>
    );
};

export default DashboardReview;