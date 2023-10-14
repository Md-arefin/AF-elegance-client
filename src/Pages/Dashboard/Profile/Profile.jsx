import React from 'react';
import { useState } from 'react';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const Profile = () => {

    const [photoName, setPhotoName] = useState("Upload your photo");

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handlePhotoName = (image) => {
        setPhotoName(image.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
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
                    

                }
            })
    }

    return (
        <div>

            <form className='w-full md:w-2/3 mx-auto my-10 px-2 border-2 rounded-lg border-black' onSubmit={handleSubmit}>

                <h5 className='text-center font-semibold text-2xl md:text-3xl my-5'>Profile update</h5>

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
    );
};

export default Profile;