import React from 'react';
import { Link } from 'react-router-dom';

const SecondSection = () => {
    return (
        <div className='my-20'>
            <div className='w-full flex flex-col md:flex-row items-center lg:justify-evenly lg:gap-60'>
                <Link to='/womens' className='btn border-2 mb-10 border-black'>
                    SHOP Women's
                </Link>

                <Link to='/mens' className='btn border-2 border-black w-40'>
                    SHOP Men's
                </Link>
            </div>

            <div className='text-center my-10'>
                <h3 className='text-3xl lg:text-5xl mb-5'>This is A&F TODAY
                </h3>
                <p className='text-xl'>
                    Today—and every day—we're leading with purpose, championing inclusivity and creating a sense of belonging.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row w-full lg:w-10/12 mx-auto'>
                <div className="bg-[url('/image/m-11.jpg')] bg-cover bg-no-repeat border-[10px] border-black w-full lg:w-1/2 h-96 lg:h-[750px]">
                    <div className='bg-black bg-opacity-30 text-white h-96 lg:h-[740px] pl-5 pt-48 lg:pt-96'>
                        <p className='text-2xl lg:text-6xl mb-5'>
                            WARM UP
                            <br />
                            COOL DOWN.
                        </p>
                        <p className='text-md lg:text-3xl'>
                            Quality activewear for before or after a workout.
                        </p>
                    </div>
                </div>

                <div className="bg-[url('/image/w-1.jpg')] bg-cover bg-no-repeat border-[10px] border-black w-full lg:w-1/2 h-96 lg:h-[750px]"></div>
            </div>
        </div>
    );
};

export default SecondSection;