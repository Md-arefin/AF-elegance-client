import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
                    {/* Sidebar content here */}
                    <div className='mx-auto lg:mt-20 lg:mb-10'>
                        <div className="avatar">
                            <div className="w-24  rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <p className='py-2 text-center text-xl'>
                            {user.displayName}
                        </p>
                    </div>
                    <div>
                        <li>
                            <NavLink to="/" className='lg:text-xl bg-gray-400 my-2'>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/" className='lg:text-xl bg-gray-400 my-2'>History</NavLink>
                        </li>

                        <li>
                            <NavLink to="/" className='lg:text-xl bg-gray-400 my-2'>Review</NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile" className='lg:text-xl bg-gray-400 my-2'>Profile</NavLink>
                        </li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;