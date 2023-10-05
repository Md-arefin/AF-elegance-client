import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch('http://localhost:5000/all-users')
        return res.json();
    })

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.username} is now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
    }

    const handleDeleteUser = (id) => {

        console.log(id);
    }
    return (
        <div className='my-20'>
            <p className=' text-3xl my-10 mx-10'>Total users: {users.length}</p>

            <div className="overflow-x-auto lg:w-3/4 rounded-xl md:mx-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className='text-lg md:text-xl bg-orange-300'>
                            <th>
                            </th>
                            <th>Name & Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.imgURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.username}</div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            user.role === "admin" ?
                                                <p className='text-lg flex items-center gap-2'>Admin <MdOutlineAdminPanelSettings className="text-3xl" /></p>
                                                : <p className='text-lg flex items-center gap-2'>User <FaUserShield className="text-3xl" />
                                                </p>
                                        }
                                    </td>
                                    <td>
                                        <div onClick={() => handleAdmin(user)} className="btn bg-slate-300">Make Admin</div>
                                    </td>
                                    <td>
                                        <div onClick={() => handleDeleteUser(user._id)} className='btn bg-red-600 text-white'>
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

export default AllUsers;