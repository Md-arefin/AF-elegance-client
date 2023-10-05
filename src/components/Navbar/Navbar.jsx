import React, { useContext, useState } from 'react';
import searchImg from '../../assets/images/icons/search.png';
import fast from '../../assets/images/icons/fast-delivery.png';
import wishList from '../../assets/images/icons/wish-list.png';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    let [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const navItems = <>
        <li>
            <Link to="/mens" className='lg:text-xl'>Men's</Link>
        </li>
        <li>
            <Link to="/womens" className='lg:text-xl'> Women's</Link>
        </li>
        <li>
            <Link to="/kids" className='lg:text-xl'>Kids</Link>
        </li>
        <li>
            <Link to="/dashboard" className='lg:text-xl'>Dashboard</Link>
        </li>
    </>

    const handleLogout = () => {
        logout();
    }
    
    const iconItems = <>
        <div className='flex flex-col lg:flex-row justify-evenly lg:items-center my-5 ml-5'>

            <img src={searchImg} className="w-8 cursor-pointer" alt="" />

            <Link to="/dashboard/MyWhishList">
            <img src={wishList} className="w-8 cursor-pointer my-5" alt="" />
            </Link>

            <Link to="/dashboard/my-cart">
                <img src={fast} className="w-8 cursor-pointer" alt="" />
            </Link>
        </div>
    </>
    return (
        <div className='md:px-5 lg:px-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItems}
                            {iconItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case md:text-3xl">A&F Elegance</Link>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='lg:w-1/2 hidden lg:block'>
                        {iconItems}
                    </div>
                    {
                        user ? <div className='flex items-center justify-evenly gap-5'>
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn rounded-md"
                            >
                                Logout
                            </button>
                        </div> : <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="btn rounded-md"
                        >
                            Login
                        </button>
                    }
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;