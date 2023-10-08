import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
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
        const productTitle = form.productTitle.value;
        const category = form.category.value;
        const length = form.length.value;
        const size = form.size.value;
        const style = form.style.value;
        const priceString = form.price.value;
        const stockSales = form.stock.value;
        const type = form.gender.value;
        const bestSales = form.bestSales.value;
        const sales = form.sales.value;
        const photo = form.photo.files[0];
        const stock = parseFloat(stockSales);
        const price = parseFloat(priceString);
        console.log(productTitle, 'productTitle');

        const formData = new FormData();
        formData.append("image", photo);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const productData = {
                        email: user?.email,
                        image: imgURL,
                        dressTitle: productTitle,
                        category,
                        length,
                        size: [size],
                        style,
                        price,
                        stock,
                        type,
                        bestSales,
                        sales
                    };

                    fetch("http://localhost:5000/add-product", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Successfully add new product',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            };
                        })

                }
            })
    }


    return (
        <div className='mb-20'>
            <div className='flex flex-col  items-center justify-center'>
                <div className='w-full lg:w-2/4 px-5 mb-10'>
                    <img src={img1} className='lg:w-2/3 lg:ml-32' alt="" />
                    <p className='text-xl text-center'>Elevate Your Lifestyle with Our Curated Collection</p>
                </div>

                {/* review form */}
                <div className='w-full lg:w-3/4 lg:mr-20 px-4'>
                    <form className='w-full px-7 py-5 border-2 rounded-lg border-black' onSubmit={handleSubmit}>

                        <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                            <div className="flex flex-col gap-3 w-full">

                                <label htmlFor="productTitle" className='lg:text-2xl'>Product Title</label>
                                <input
                                    className="w-full rounded-md"
                                    type="text"
                                    name='productTitle'
                                    placeholder='Product Title...'
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full ">
                                <label htmlFor="category" className='lg:text-2xl'>Category</label>

                                <select className="dropdown rounded-md" name='category'>
                                    <option disabled selected>Select category</option>
                                    <option value="Hoodies">Hoodies</option>
                                    <option value="Sweaters">Sweaters</option>
                                    <option value="Shirts">Shirts</option>
                                    <option value="Pants">Pants</option>
                                    <option value="Sweatpants">Sweatpants</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="length" className='lg:text-2xl'>Length</label>
                                <select className="dropdown rounded-md" name='length'>
                                    <option disabled selected>Select length</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Short">Short</option>
                                    <option value="Long">Long</option>
                                    <option value="Tall">Tall</option>
                                </select>

                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="size" className='lg:text-2xl'>Size</label>

                                <select className="dropdown rounded-md" name='size'>
                                    <option disabled selected>Select size</option>
                                    <option value="S">Small</option>
                                    <option value="M">Medium</option>
                                    <option value="L">Large</option>
                                    <option value="XL">Extra Large</option>
                                    <option value="XXL">Double Extra Large</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="style" className='lg:text-2xl'>Style</label>

                                <select className="dropdown rounded-md" name='style'>
                                    <option disabled selected>Select style</option>
                                    <option value="Polo">Polo</option>
                                    <option value="Slim">Slim</option>
                                    <option value="Loose">Loose</option>
                                    <option value="Jacket">Jacket</option>
                                    <option value="Classic">Classic</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="gender" className='lg:text-2xl'>Gender</label>

                                <select className="dropdown rounded-md" name='gender'>
                                    <option disabled selected>Select Gender</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kid">Kid</option>
                                </select>
                            </div>

                        </div>


                        <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="stock" className='lg:text-2xl'>Stock</label>

                                <input
                                    className="w-full rounded-md "
                                    type="number"
                                    name='stock'
                                    placeholder='Stock...'
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="price" className='lg:text-2xl'>Price</label>

                                <input
                                    className="w-full rounded-md "
                                    type="text"
                                    name='price'
                                    placeholder='Price...'
                                    required
                                />
                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="bestSells" className='lg:text-2xl'>Best Sells</label>

                                <select className="dropdown rounded-md" name='bestSales'>
                                    <option disabled selected>Best Sells</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="Sales" className='lg:text-2xl'>Sales</label>

                                <select className="dropdown rounded-md" name='sales'>
                                    <option disabled selected>New Sales</option>
                                    <option value="5">5%</option>
                                    <option value="10">10%</option>
                                    <option value="15">15%</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-4 mb-2">
                            <label className='bg-slate-200 rounded-md lg:text-2xl w-full text-center cursor-pointer'>
                                <input
                                    onChange={(event) => {
                                        handlePhotoName(event.target.files[0])
                                    }}
                                    type="file"
                                    placeholder="photo"
                                    name='photo'
                                    className="hidden"
                                />
                                <div className="text-lg font-semibold my-2 text-center font-serif">
                                    {photoName}
                                </div>

                            </label>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button type="submit" className="bg-black btn md:w-1/4 p-1 rounded-md text-white hover:text-black">Submit </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;