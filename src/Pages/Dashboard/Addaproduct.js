import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const Addaproduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'ffa4f230923f21602ed95940ef42c966';


    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.productname,
                        price: data.productprice,
                        availablequantity: data.productavailable,
                        minorderquantity: data.prominquantity,
                        des: data.productdes,
                        image: img
                    }
                    console.log(doctor)
                    //send to your database
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('product added successfully');
                                reset()
                            }
                            else {
                                toast.error('failed to add')
                            }
                        })
                }
            })
    }
    return (
        <div>
            <h2>Add Your Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Product Name</span>
                    </label >

                    <input type="text" placeholder="your product name" className="input input-bordered w-full max-w-xs"
                        {...register("productname", {
                            required: {
                                value: true,
                                message: 'productname is required'
                            }
                        })
                        }
                    />
                    < label className="label" >
                        {errors.productname?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.productname.message}</span>}
                    </label >
                </div >
                <div className="form-control w-full max-w-xs" >
                    <label className="label" >
                        <span className="label-text" >Product Price</span >
                    </label >

                    <input type="number" placeholder="your price" className="input input-bordered w-full max-w-xs"
                        {...register("productprice", {
                            required: {
                                value: true,
                                message: 'productprice is required'
                            },

                        })
                        }
                    />
                    < label className="label" >
                        {errors.productprice?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.productprice.message}</span>}
                    </label >
                </div >
                <div className="form-control w-full max-w-xs" >
                    <label className="label" >
                        <span className="label-text" >Product Available quantity</span >
                    </label >

                    <input type="number" placeholder="your available quantity" className="input input-bordered w-full max-w-xs"
                        {...register("productavailable", {
                            required: {
                                value: true,
                                message: 'product quantity is required'
                            },

                        })
                        }
                    />
                    < label className="label" >
                        {errors.productavailable?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.productavailable.message}</span>}
                    </label >
                </div >
                <div className="form-control w-full max-w-xs" >
                    <label className="label" >
                        <span className="label-text" >Minimum quantity</span >
                    </label >

                    <input type="number" placeholder="your min quantity" className="input input-bordered w-full max-w-xs"
                        {...register("prominquantity", {
                            required: {
                                value: true,
                                message: 'product quantity is required'
                            },

                        })
                        }
                    />
                    < label className="label" >
                        {errors.prominquantity?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.prominquantity.message}</span>}
                    </label >
                </div >
                <div className="form-control w-full max-w-xs" >
                    <label className="label" >
                        <span className="label-text" >Product Description</span >
                    </label >

                    <textarea type="text" placeholder="your product description" className="input input-bordered w-full h-20 max-w-xs"
                        {...register("productdes", {
                            required: {
                                value: true,
                                message: 'productdescription is required'
                            },

                        })
                        }
                    />
                    < label className="label" >
                        {errors.productdes?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.productdes.message}</span>}
                    </label >
                </div >

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label >

                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })
                        }
                    />
                    < label className="label" >
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.image.message}</span>}
                    </label >
                </div >

                < input className='btn w-full max-w-xs text-white' type="submit" value='Add' />
            </form >
        </div>
    );
};

export default Addaproduct;