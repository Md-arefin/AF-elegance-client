import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import reviewImg from "../assets/images/icons/review.png"
import profileImg from "../assets/images/icons/profile.png"
import HistoryImg from "../assets/images/icons/report.png"
import homeImg from "../assets/images/icons/home.png"
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden pr-72"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
                    {/* Sidebar content here */}
                    <div className='mx-auto lg:mt-20 lg:mb-10'>
                        <div className="avatar">
                            <div className="w-24  rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <p className='py-2 text-center text-xl'>
                            {user?.displayName}
                        </p>
                    </div>
                    <div>
                        <li>
                            <NavLink to="/" className='lg:text-xl btn flex justify-between items-center my-2'>
                                <p>
                                    Home
                                </p>
                                <img className='w-8' src={homeImg} alt="" /></NavLink>
                        </li>

                        <li>
                            <NavLink to="/" className='lg:text-xl btn flex justify-between items-center my-2'>
                                <p>
                                    History
                                </p>
                                <img className='w-8' src={HistoryImg} alt="" /></NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/review" className='lg:text-xl btn flex justify-between items-center my-2'>
                                <p>
                                    Review
                                </p>
                                <img className='w-8' src={reviewImg} alt="" />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile" className='lg:text-xl btn flex justify-between items-center my-2'>
                                <p>
                                    Profile
                                </p>
                                <img className='w-8' src={profileImg} alt="" /></NavLink>
                        </li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;