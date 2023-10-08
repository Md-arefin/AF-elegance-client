import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const AllProduct = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllProducts(data);
            })
    }, []);

    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "User delete successful",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='my-20'>
            <p className='text-3xl lg:text-5xl my-10 pl-10'>Total products <span className='font-sans'>{allProducts.length}.</span></p>


            <div className="overflow-x-auto lg:w-3/4 rounded-xl md:mx-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className='text-lg md:text-xl bg-gray-300 text-black'>
                            <th>
                            </th>
                            <th>Products</th>
                            <th>Gender</th>
                            <th>Style</th>
                            <th>Size</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allProducts.map((product, i) =>
                                <tr key={product._id}>
                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-12">
                                                    <img src={product.image} alt={product.dressTitle} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">{product.dressTitle}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="">{product.type}</div>
                                    </td>
                                    <td>
                                        <div className="">{product.style}</div>
                                    </td>
                                    <td>
                                        <div className="">{product.size}</div>
                                    </td>
                                    <td>
                                        <div className=" font-serif text-xl">{product.stock}</div>
                                    </td>
                                    <td>
                                        <div className=" text-right font-serif text-xl">${product.price}</div>
                                    </td>
                                    <td>
                                        <div className="btn bg-slate-300">Edit <FaEdit /></div>
                                    </td>
                                    <td>
                                        <div onClick={() => handleDeleteproduct(product)} className='btn bg-red-600 text-white hover:text-black'>
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

export default AllProduct;