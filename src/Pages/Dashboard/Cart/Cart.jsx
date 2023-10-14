import React from 'react';
import useCart from '../../../components/Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cash from '../../../assets/images/icons/money2.png'
import Swal from 'sweetalert2';

const Cart = () => {

    const [carts, cartRefetch] = useCart();

    const totalPrice = carts.reduce((sum, item) => item.totalAmount + sum, 0)

    console.log(carts);
    const handleDeleteItems = (id) => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    cartRefetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Item delete successful",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div>
            <div className='flex items-center justify-center mx-20 gap-5'>
                <p className='text-xl my xl:text-3xl my-6 ml-5'>Total Product : {carts.length}</p>

                <div className='flex items-center justify-between gap-10'>
                    <p className=' text-xl my xl:text-3xl my-6 ml-5'>Total Price :$ <span className='font-sans font-semibold'> {totalPrice.toFixed(2)}</span></p>

                    <Link to="/dashboard/payment" className='btn bg-slate-300 flex justify-between'>
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
                            <th>Items</th>
                            <th>Name</th>
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
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-full h-20">
                                                <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold text-xl">{cart.dressTitle}</div>
                                    </td>
                                    <td className='text-xl text-center'>
                                        {cart.quantity}
                                    </td>
                                    <td className='text-xl text-right'>
                                        $ {cart.totalAmount}
                                    </td>
                                    <td className='text-center'>
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