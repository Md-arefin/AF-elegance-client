import React from 'react';
import Marque from '../../components/Marquee/Marquee';
import { Disclosure } from '@headlessui/react'
import { BiPlus } from 'react-icons/bi';
import { useForm } from 'react-hook-form';

const Mens = () => {

    const { register } = useForm();

    return (
        <div>
            <Marque />
            <div className='pl-16 py-2 bg-slate-400 text-2xl'>
                <p>Men's</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center'>

                <div className='w-52 bg-zinc-200 lg:ml-20 lg:mt-20'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium ">
                                    <span>Category</span>
                                    <BiPlus
                                        className='h-5 w-5 '
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="flex flex-col items-center pt-4 px-4 pb-2 text-sm text-gray-500 pr-36">
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
                                    <span>Size</span>
                                    <BiPlus
                                        className='h-5 w-5 '
                                    />
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
                                    <span>Length</span>
                                    <BiPlus
                                        className='h-5 w-5 '
                                    />
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
                                    <span>Style</span>
                                    <BiPlus
                                        className='h-5 w-5 '
                                    />
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

            </div>
        </div>
    );
};

export default Mens;