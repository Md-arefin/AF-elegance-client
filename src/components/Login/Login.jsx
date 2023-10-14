import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import googleImg from '../../assets/images/icons/google.png';
import { BiLogIn } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Modal from '../Modal/Modal';


const Login = () => {

    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        setError('');
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, imgURL: loggedUser.photoURL }
                fetch('http://localhost:5000/add-users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        closeModal()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })
    }

    // googleSignIn
    const handleGoogle = () => {
        setError('')

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { username: loggedUser.displayName, email: loggedUser.email, imgURL: loggedUser.photoURL }
                fetch('http://localhost:5000/add-users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json",
                        // "authorization" : `Bearer ${localStorage.getItem("access-token")}`
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json(saveUser))
                    .then(() => {
                        setIsOpen(false)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div >
            <form className='w-full px-2 border-2 rounded-lg border-black ' onSubmit={handleSubmit(onSubmit)}>

                <h5 className='text-center font-semibold text-3xl my-5'>Please Login</h5>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-md"
                        type="email"
                        placeholder='Enter your email...'
                        {...register("email")} required/>
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="w-full rounded-md"
                        type="password"
                        placeholder='Enter your password...'
                        {...register("password")} required/>
                </div>

                <div className="flex justify-center my-10">

                    <button type="submit" className="bg-[#a98467] btn w-3/4 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Submit <BiLogIn /></button>
                </div>

                <div className='border-2 w-11/12 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div onClick={handleGoogle} className='flex my-5 cursor-pointer btn w-full'>
                    <img  src={googleImg} className='w-7 md:w-10 ' alt="" />
                    <p className='text-xl'>Google</p>
                </div>

            </form>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

export default Login;