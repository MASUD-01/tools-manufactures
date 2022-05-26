import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [update, setUpdate] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onChange"
    });
    const [user] = useAuthState(auth)
    const email = user?.email

    const { data: users, isLoading, refetch } = useQuery([user, update], () => fetch(`https://young-sierra-81970.herokuapp.com/user/${email}`, {

        method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {

        const email = user?.email;
        const updatedata = {
            education: data.education,
            location: data.location,
            phone: data.phonenumber,
        }
        toast.success('Info update successfully')
        refetch()


        if (email) {
            fetch(`https://young-sierra-81970.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedata)
            })
                .then(res => res.json())
                .then(data => {
                    setUpdate(!update)
                })
        }

    }
    return (
        <>
            <div className="hero  bg-base-200">
                <div className="flex-none lg:flex">
                    <div className='p-0 lg:p-8'>
                        <div className="card w-80 bg-base-100 shadow-xl mt-3">
                            <figure className='p-3'><img src={user?.photoURL} alt="user image" /></figure>
                            <div className="card-body">
                                <h1 className='text-2xl py-3'>Name: {user?.displayName}</h1>
                                <h1 className='text-2xl pb-3'>Email: {user?.email}</h1>
                                <h1 className='text-2xl pb-3'>Education: {users.education}</h1>
                                <h1 className='text-2xl pb-3'>Location: {users.location}</h1>
                                <h1 className='text-2xl'>Phone: {users.phone}</h1>

                            </div>
                        </div>

                    </div>
                    <div className='p-0 lg:p-8 mt-5 lg:mt-0'>
                        <div className='flex justify-center items-center' >
                            <div className="card w-50 lg:w-96 bg-base-100 shadow-xl px-3" >
                                <div className="card-body" >
                                    <h2 className="text-2xl font-bold text-center" >Update Profile</h2 >
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control w-full max-w-xs  mt-3 lg:mt-0">
                                            <label className="label">
                                                <span className="label-text">Education</span>
                                            </label >

                                            <input type="text" placeholder="your education" className="input input-bordered w-full max-w-xs"
                                                {...register("education", {

                                                })
                                                }

                                            />

                                        </div >


                                        <div className="form-control w-full max-w-xs" >
                                            <label className="label" >
                                                <span className="label-text" >Location</span >
                                            </label >

                                            <input type="text" placeholder="your location" className="input input-bordered w-full max-w-xs"
                                                {...register("location", {

                                                })
                                                }
                                            />

                                        </div >

                                        <div className="form-control w-full max-w-xs" >
                                            <label className="label" >
                                                <span className="label-text" >Phone Number</span >
                                            </label >

                                            <input type="number" placeholder="your phonenumber" className="input input-bordered w-full max-w-xs"
                                                {...register("phonenumber", {

                                                })
                                                }
                                            />
                                            < label className="label" >
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.password.message}</span>}
                                            </label >
                                        </div >

                                        < input className='btn w-full max-w-xs text-white' type="submit" value='Update' />

                                    </form >

                                </div >


                            </div >
                        </div >

                    </div>
                </div>

            </div>

        </>
    );
};

export default MyProfile;