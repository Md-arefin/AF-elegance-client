import React, { useContext, useState } from 'react';
import searchImg from '../../assets/images/icons/search.png';
import fast from '../../assets/images/icons/fast-delivery.png';
import wishList from '../../assets/images/icons/wish-list.png';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../Hooks/useCart';
import useFavourites from '../Hooks/useFavourites';

const Navbar = () => {

    let [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const [carts] = useCart();
    const [favourites,] = useFavourites();

    const navItems = <>
        <li>
            <Link to="/mens" className=' xl:text-lg'>Men's</Link>
        </li>
        <li>
            <Link to="/womens" className='xl:text-lg'> Women's</Link>
        </li>
        <li>
            <Link to="/kids" className='xl:text-xl'>Kids</Link>
        </li>
        <li>
            <Link to="/dashboard" className='xl:text-lg'>Dashboard</Link>
        </li>
    </>

    const handleLogout = () => {
        logout();
    }

    const iconItems = <>
        <div className='flex flex-col lg:flex-row justify-evenly lg:items-center ml-3'>

            {/* <img src={searchImg} className="w-8 cursor-pointer" alt="" /> */}

            <Link to="/dashboard/MyWhishList" className='mb-2 md:mb-0 ml-1 relative'>
                <div className="badge badge-primary badge-md absolute left-3 top-1">
                    <p className=''>{favourites?.length || 0}</p>
                </div>
                <img src={wishList} className="w-8 lg:w-6 cursor-pointer my-5" alt="" />
            </Link>

            <Link to="/dashboard/my-cart" className='relative'>
                <div className="badge badge-primary badge-md absolute left-3 -top-4">
                    <p className=''>{carts?.length || 0}</p>
                </div>
                <img src={fast} className="w-8 lg:w-6 cursor-pointer" alt="" />
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52 h-72">
                            {navItems}
                            {iconItems}
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost normal-case md:text-2xl lg:text-xl">A&F Elegance</Link>

                    <div className=" hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 ">
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
                            <div className="avatar hidden md:block">
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