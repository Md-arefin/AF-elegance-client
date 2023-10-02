import React, { useContext, useState } from 'react';
import googleImg from '../../assets/images/icons/google.png';
import { BiLogIn } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SignUp = () => {

    const { signInWithGoogle, createUser, updateUserProfile } = useContext(AuthContext);
    const [photoName, setPhotoName] = useState("Upload your photo");
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handlePhotoName = (image) => {
        setPhotoName(image.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.files[0];

        // console.log(username,email, password, photo);  

        const formData = new FormData();
        formData.append("image", photo);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    createUser(email, password)
                        .then(result => {
                            const loggedUser = result.user;
                            // console.log('loggedUser', loggedUser);
                            updateUserProfile({
                                displayName: username,
                                photoURL: imgURL
                            })
                                .then(() => {
                                    const saveUser = {
                                        username,
                                        email,
                                        imgURL
                                    }
                                    fetch('http://localhost:5000/add-users', {
                                        method: "POST",
                                        headers: {
                                            'content-type': "application/json"
                                        },
                                        body: JSON.stringify(saveUser)
                                    })
                                        .then(res => res.json(saveUser))
                                        .then(data => {
                                            if (data.insertedId) {
                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: 'Sign up Successful',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                            }
                                        })
                                })
                            navigate('/')
                        })
                        .catch(error => {
                            console.log(error.message);
                            setError(error.message);
                        })

                }
            })
    }

    // googleSignIn
    const handleGoogle = () => {
        setError('')

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
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
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // navigate(from, { replace: true })
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <form className='w-full px-2 border-2 rounded-lg border-black' onSubmit={handleSubmit}>

                <h5 className='text-center font-semibold text-2xl md:text-3xl my-5'>Please Sign-up</h5>

                <div className="flex flex-col gap-3 my-2">

                    <label htmlFor="username">Username</label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        name='username'
                        placeholder='Enter your username...'
                        required
                    />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-md"
                        type="email"
                        name='email'
                        placeholder='Enter your email...'
                        required
                    />
                </div>

                <div className="flex flex-col gap-3  mb-4">
                    <label htmlFor="password">Password</label>

                    <input
                        className="w-full rounded-md "
                        type="password"
                        name='password'
                        placeholder='Enter your password...'
                        required
                    />
                </div>

                <div className="flex flex-col gap-3 mb-2">
                    <label className='bg-black text-white rounded-md  w-full text-center cursor-pointer'>
                        <input
                            onChange={(event) => {
                                handlePhotoName(event.target.files[0])
                            }}
                            type="file"
                            placeholder="photo"
                            name='photo'
                            className=" hidden"
                        />
                        <div className="text-lg font-semibold my-2 text-center font-serif">
                            {photoName}
                        </div>

                    </label>
                </div>

                <div className="flex justify-center my-10">
                    <button type="submit" className="bg-black btn w-3/4 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Submit <BiLogIn /></button>
                </div>

                <div className='border-2 w-11/12 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div onClick={handleGoogle} className='my-5 cursor-pointer btn  w-full'>
                    <img  src={googleImg} className='w-7 lg:w-10 ' alt="" />
                    <p className='text-xl'>Google</p>
                </div>

            </form>

        </div>
    );
};

export default SignUp;