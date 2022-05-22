import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    if (loading || gloading || updating) {
        return <Loading></Loading>
    }
    let signInerror;
    if (error || gerror || updateerror) {
        signInerror = <p className='text-red-500' > {error?.message || gerror?.message || updateerror?.message
        }</p >
    }


    if (token) {

        navigate('/appoinment')
    }


    const onSubmit = async data => {

        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // console.log('update done')

    }
    return (
        <div className='flex h-screen justify-center items-center' >
            <div className="card w-96 bg-base-100 shadow-xl px-3" >
                <div className="card-body" >
                    <h2 className="text-2xl font-bold text-center" > SignUp</h2 >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label >

                            <input type="text" placeholder="your name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.name.message}</span>}
                            </label >
                        </div >
                        <div className="form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > Email</span >
                            </label >

                            <input type="email" placeholder="your email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500" > {errors.email.message}</span >}


                            </label >
                        </div >
                        <div className="form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > password</span >
                            </label >

                            <input type="password" placeholder="your passs" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'pass is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 charater or longer'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.password.message}</span>}
                                {errors.email?.type === 'minLength' && <span className="label-text-alt text-red-500" > {errors.password.message}</span >}


                            </label >
                        </div >
                        {signInerror}
                        < input className='btn w-full max-w-xs text-white' type="submit" value='SignUp' />
                    </form >
                    <p><small>Already have an account?<Link className='text-primary' to='/login'> Please login</Link></small> </p >
                </div >
                <div className="divider" > OR</div >
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn  btn-outline" > Continue with google</button >
            </div >
        </div >
    );
};

export default SignUp;