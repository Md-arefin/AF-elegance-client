import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import img1 from "../../../../assets/images/20945766.jpg"
import { AuthContext } from '../../../../provider/AuthProvider';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [photoName, setPhotoName] = useState("Upload photo");
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


        // fetch(img_hosting_url, {
        //     method: "POST",
        //     body: formData
        // }).then(res => res.json())
        //     .then(imgResponse => {
        //         if (imgResponse.success) {
        //             const imgURL = imgResponse.data.display_url;
                    
        //         }
        //     })
    }


    return (
        <div className='mb-20'>
            <div className='flex flex-col  items-center justify-center'>
                <div className='w-full lg:w-2/4 px-5 mb-10'>
                    <img src={img1} className='lg:w-2/3 lg:ml-32' alt="" />
                    <p className='text-xl text-center'>Elevate Your Lifestyle with Our Curated Collection</p>
                </div>

                {/* review form */}
                <div className='w-full lg:w-2/4 lg:mr-20 px-4'>
                    <form className='w-full p-7 border-2 rounded-lg border-black' onSubmit={handleSubmit}>

                        <div className="flex flex-col gap-3 my-2">

                            <label htmlFor="username">Product Title</label>
                            <input
                                className="w-full rounded-md"
                                type="text"
                                name='username'
                                placeholder='Enter Product Title...'
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-3  mb-2">
                            <label htmlFor="email">Category</label>
                            <input
                                className="w-full rounded-md"
                                type="email"
                                name='email'
                                placeholder='Enter Category...'
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-3  mb-4">
                            <label htmlFor="password">Length</label>

                            <input
                                className="w-full rounded-md "
                                type="text"
                                name='password'
                                placeholder='Enter Length...'
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3  mb-4">
                            <label htmlFor="password">Size</label>

                            <input
                                className="w-full rounded-md "
                                type="text"
                                name='password'
                                placeholder='Enter size...'
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3  mb-4">
                            <label htmlFor="password">Style</label>

                            <input
                                className="w-full rounded-md "
                                type="text"
                                name='password'
                                placeholder='Enter Style...'
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3  mb-4">
                            <label htmlFor="password">Price</label>

                            <input
                                className="w-full rounded-md "
                                type="text"
                                name='password'
                                placeholder='Enter Price...'
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3  mb-4">
                            <label htmlFor="password">Stock</label>

                            <input
                                className="w-full rounded-md "
                                type="text"
                                name='password'
                                placeholder='Enter Stock...'
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3  mb-4">
                            <label htmlFor="password">Gender</label>

                            <input
                                className="w-full rounded-md "
                                type="text"
                                name='password'
                                placeholder='Enter Gender...'
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-3 mb-2">
                            <label className='bg-slate-200 rounded-md  w-full text-center cursor-pointer'>
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
                            <button type="submit" className="bg-black btn w-3/4 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Submit </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;