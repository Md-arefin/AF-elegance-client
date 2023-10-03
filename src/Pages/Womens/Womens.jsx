import React from 'react';
import Marque from '../../components/Marquee/Marquee';
import { Disclosure } from '@headlessui/react'
import { BiPlus } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Womens = () => {
    const { register } = useForm();
    return (
        <div>
              <Marque />
            <div className='pl-16 py-2 bg-slate-200 text-2xl'>
                <p>Women's</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center'>

                <div className='w-96 bg-zinc-200 lg:ml-20 lg:mt-20 border-2 border-black'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium ">
                                    <span className='text-xl'>Category</span>
                                    {
                                        open ? <FaMinus className='h-5 w-3 ' /> : <BiPlus className='h-5 w-5 ' />
                                    }
                                </Disclosure.Button>
                                
                                <Disclosure.Panel className="flex flex-col items-center pt-4 px-4 pb-2 text-sm text-gray-500 pr-36">

                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 ">
                                        <label htmlFor="email">S</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"

                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pl-1 ">
                                        <label htmlFor="email">M</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 ">
                                        <label htmlFor="email">L</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[12px]">
                                        <label htmlFor="email">XL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[24px]">
                                        <label htmlFor="email">XXL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col items-center pr-36">
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2  ">
                                        <label htmlFor="email">S</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"

                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pl-1 ">
                                        <label htmlFor="email">M</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 ">
                                        <label htmlFor="email">L</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[12px]">
                                        <label htmlFor="email">XL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[24px]">
                                        <label htmlFor="email">XXL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col items-center pr-36">
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2  ">
                                        <label htmlFor="email">S</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"

                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pl-1 ">
                                        <label htmlFor="email">M</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 ">
                                        <label htmlFor="email">L</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[12px]">
                                        <label htmlFor="email">XL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[24px]">
                                        <label htmlFor="email">XXL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col items-center pr-36">
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2  ">
                                        <label htmlFor="email">S</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"

                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center justify-start gap-3 mb-2 pl-1 ">
                                        <label htmlFor="email">M</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 ">
                                        <label htmlFor="email">L</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[12px]">
                                        <label htmlFor="email">XL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                    <div className="flex flex-row-reverse items-center gap-3 mb-2 pl-[24px]">
                                        <label htmlFor="email">XXL</label>
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            placeholder='sd'
                                            {...register("email")} />
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                </div>
                <div className='w-full lg:mt-20'>
                    <p className='text-center text-5xl'>This is Women's data</p>
                </div>
            </div>
        </div>
    );
};

export default Womens;