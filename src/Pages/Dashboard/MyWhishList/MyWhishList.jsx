import React from 'react';
import useFavourites from '../../../components/Hooks/useFavourites';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAdmin from '../../../components/Hooks/useAdmin';
import { AuthContext } from '../../../provider/AuthProvider';
import { useContext } from 'react';

const MyWhishList = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [favourites, refetch] = useFavourites();

    const handleDeleteItems = (id) => {
        fetch(`http://localhost:5000/favourites/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
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

    const handleAddToCart = (id) => {

        const favouritesItem = favourites.filter(pd => pd._id == id);

        const cartItem = {
            productId: favouritesItem[0].productId,
            UserEmail: favouritesItem[0].UserEmail,
            totalAmount: favouritesItem[0].totalAmount,
            quantity: favouritesItem[0].quantity,
            dressTitle: favouritesItem[0].dressTitle,
            image: favouritesItem[0].image,
        }

        if (user) {
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${cartItem.dressTitle} added to the cart `,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetch(`http://localhost:5000/favourites/${id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount) {
                                    refetch();
                                }
                            })
                    }
                })
        }

    }

    return (
        <div>
            <p className='text-center text-5xl'>This is My Whish List: {favourites.length}</p>
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
                            <th>Add to Cart</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            favourites.map((favourite, i) =>
                                <tr key={favourite._id}>
                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-full h-20">
                                                <img src={favourite.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold text-xl">{favourite.dressTitle}</div>
                                    </td>
                                    <td className='text-xl text-center'>
                                        {favourite.quantity}
                                    </td>
                                    <td className='text-xl text-right'>
                                        $ {favourite.totalAmount}
                                    </td>
                                    <td>
                                        <button onClick={() => handleAddToCart(favourite._id)} className="btn btn-primary w-[184px]" disabled={isAdmin?.admin === true}>Add to cart</button>
                                    </td>
                                    <td className='text-center'>
                                        <div onClick={() => handleDeleteItems(favourite._id)} className='btn bg-red-600 text-white hover:text-black'>
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

export default MyWhishList;