import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProduct = () => {

    const product = useLoaderData();

    const { category, dressTitle, sales, bestSales, length, price, size, stock, style, type, _id } = product[0];

    console.log(product[0])

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
        const stock = parseFloat(stockSales);
        const price = parseFloat(priceString);

        const newProductData = {
            dressTitle: productTitle,
            category,
            length,
            size: [size],
            stock,
            price,
            style,
            type,
            sales,
            bestSales,
        }

        fetch(`http://localhost:5000/edit-product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProductData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Edit Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                };
            })
    }

    return (
        <div>
            <p className='text-3xl lg:text-5xl my-10 text-center'>This is Edit Product</p>

            <div className='w-full mx-auto lg:w-3/4 px-4'>
                <form className='w-full px-7 py-5 border-2 rounded-lg border-black' onSubmit={handleSubmit}>

                    <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                        <div className="flex flex-col gap-3 w-full">

                            <label htmlFor="productTitle" className='lg:text-2xl'>Product Title</label>
                            <input
                                className="w-full rounded-md"
                                type="text"
                                defaultValue={dressTitle}
                                name='productTitle'
                                placeholder='Product Title...'
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-3 w-full ">
                            <label htmlFor="category" className='lg:text-2xl'>Category</label>
                            <select className="dropdown rounded-md" name='category' defaultValue={category}>
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
                            <select className="dropdown rounded-md" name='length' defaultValue={length}>
                                <option disabled selected>Select length</option>
                                <option value="Regular">Regular</option>
                                <option value="Short">Short</option>
                                <option value="Long">Long</option>
                                <option value="Tall">Tall</option>
                            </select>

                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="size" className='lg:text-2xl'>Size</label>

                            <select className="dropdown rounded-md" name='size' defaultValue={size}>
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

                            <select className="dropdown rounded-md" name='style' defaultValue={style}>
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

                            <select className="dropdown rounded-md" name='gender' defaultValue={type}>
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
                                className="w-full rounded-md font-sans font-bold text-xl"
                                type="number"
                                name='stock'
                                defaultValue={stock}
                                placeholder='Stock...'
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="price" className='lg:text-2xl'>Price</label>

                            <input
                                className="w-full rounded-md font-sans font-bold text-xl"
                                type="text"
                                defaultValue={price}
                                name='price'
                                placeholder='Price...'
                                required
                            />
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row items-center gap-5 md:mb-5'>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="bestSells" className='lg:text-2xl'>Best Sells</label>

                            <select className="dropdown rounded-md" name='bestSales' defaultValue={bestSales}>
                                <option disabled selected>Best Sells</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="Sales" className='lg:text-2xl'>Sales</label>

                            <select className="dropdown rounded-md" name='sales' defaultValue={sales}>
                                <option disabled selected>New Sales</option>
                                <option value="5">5%</option>
                                <option value="10">10%</option>
                                <option value="15">15%</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button type="submit" className="bg-black btn md:w-1/4 p-1 rounded-md text-white hover:text-black">Submit </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProduct;