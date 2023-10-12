import React from 'react';
import useCart from '../../../components/Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cash from '../../../assets/images/icons/money2.png'

const Cart = () => {

    const [carts] = useCart();

    const totalPrice = carts.reduce((sum, item) => item.totalAmount + sum, 0)

    console.log(totalPrice)

    const handleDeleteItems = (id) => {
        console.log(id);

    }

    return (
        <div>
            <div className='flex items-center justify-between mx-20'>
                <p className=' text-3xl my-6 ml-5'>Total Product : {carts.length}</p>

                <div className='flex items-center justify-between gap-10'>
                    <p className=' text-3xl my-6 ml-5'>Total Price :$ <span className='font-sans font-bold'> {totalPrice}</span></p>

                    <Link className='btn bg-slate-300 flex justify-between'>
                        <p className='text-xl'> Pay</p>
                        <img src={cash} className='w-7' alt="" />
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto lg:w-3/4 rounded-xl md:mx-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className='text-lg md:text-xl bg-gray-300 text-black'>
                            <th>
                            </th>
                            <th>Items Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            carts.map((cart, i) =>
                                <tr key={cart._id}>
                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-full h-20">
                                                    <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-2xl">{cart.dressTitle}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl'>
                                        {cart.quantity}
                                    </td>
                                    <td className='text-xl'>
                                        $ {cart.totalAmount}
                                    </td>
                                    <td>
                                        <div onClick={() => handleDeleteItems(cart._id)} className='btn bg-red-600 text-white hover:text-black'>
                                            <FaTrashAlt />
                                        </div>
                                    </td>
                                </tr>
                            )
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;