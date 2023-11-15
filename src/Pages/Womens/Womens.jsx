import React, { useEffect, useState } from 'react';
import Marque from '../../components/Marquee/Marquee';
import { Disclosure } from '@headlessui/react'
import { BiPlus } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Details from '../../components/ProductDetails/productDetails';

const Womens = () => {
    const { register } = useForm();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // fetch product
    useEffect(() => {
        fetch('https://af-elegance-server-md-arefin.vercel.app/womens')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
                setFilteredProducts(data)
            })
    }, []);

    // pagination calculations
    const productPerPage = 6;
    const totalPages = Math.ceil(filteredProducts.length / productPerPage);
    const startIndex = (currentPage - 1) * productPerPage;
    const endIndex = startIndex + productPerPage;
    const currentProduct = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div>
            <Marque />
            <div className='pl-16 py-2 bg-slate-200 text-2xl'>
                <p>Women's</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center mb-20'>

                <div className=' md:w-[40%] lg:w-[20%] h-[20%] md:sticky top-10 bg-zinc-200 lg:ml-20 mt-5 lg:mt-20 '>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium ">
                                    <span className='text-xl'>Category</span>
                                    {
                                        open ? <FaMinus className='h-5 w-3 ' /> : <BiPlus className='h-5 w-5 ' />
                                    }
                                </Disclosure.Button>
                                {/* Category */}
                                <Disclosure.Panel className="flex flex-col items-center pt-4 px-4 pb-2 text-sm text-gray-500 pr-36">

                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-10">
                                        <label htmlFor="Hoodies">Hoodies</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"

                                            {...register("Hoodies")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pr-7 ">
                                        <label htmlFor="Sweaters">Sweaters</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("Sweaters")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-12">
                                        <label htmlFor="Shirts">Shirts</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Shirts")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-[52px]">
                                        <label htmlFor="Pants">Pants</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Pants")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-2">
                                        <label htmlFor="SweatPants">SweatPants</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("SweatPants")} />
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium ">
                                    <span className='text-xl'>Size</span>
                                    {
                                        open ? <FaMinus className='h-5 w-5 ' /> : <BiPlus className='h-5 w-5 ' />
                                    }
                                </Disclosure.Button>
                                {/* Size */}
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col items-center pr-36">
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2  pr-20">
                                        <label htmlFor="S">S</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("S")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pr-[75px]">
                                        <label htmlFor="M">M</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("M")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-20">
                                        <label htmlFor="L">L</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("L")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-[68px]">
                                        <label htmlFor="XL">XL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("XL")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-[56px]">
                                        <label htmlFor="XXL">XXL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("XXL")} />
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium ">
                                    <span className='text-xl'>Length</span>
                                    {
                                        open ? <FaMinus className='h-5 w-5 ' /> : <BiPlus className='h-5 w-5 ' />
                                    }
                                </Disclosure.Button>
                                {/* Length */}
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col items-center pr-36">
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-8">
                                        <label htmlFor="Regular">Regular</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Regular")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pr-12 ">
                                        <label htmlFor="Short">Short</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Short")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-[50px]">
                                        <label htmlFor="Long">Long</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Long")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-[58px]">
                                        <label htmlFor="Tall">Tall</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Tall")} />
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium ">
                                    <span className='text-xl'>Style</span>
                                    {
                                        open ? <FaMinus className='h-5 w-5 ' /> : <BiPlus className='h-5 w-5 ' />
                                    }
                                </Disclosure.Button>
                                {/* Style */}
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col items-center pr-36">
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-12">
                                        <label htmlFor="Polo">Polo</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"

                                            {...register("Polo")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pr-10">
                                        <label htmlFor="Slim">Slim</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Slim")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-9">
                                        <label htmlFor="Loose">Loose</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Loose")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-6">
                                        <label htmlFor="Classic">Classic</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Classic")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pr-[30px]">
                                        <label htmlFor="Jacket">Jacket</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            {...register("Jacket")} />
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-5 lg:mt-20'>
                    {
                        currentProduct.map(product =>
                            <Details key={product._id} product={product} />)
                    }
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 my-16 xl:ml-52">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handlePageChange(index + 1)} >
                        <p className={`cursor-pointer border-2 ${currentPage === index + 1 ? `bg-black text-white` : ``} hover:text-white w-10 text-center rounded-lg hover:bg-gray-700`}>{index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Womens;