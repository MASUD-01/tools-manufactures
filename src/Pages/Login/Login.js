import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);
    let navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/home";



    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (loading || gloading) {
        return <Loading></Loading>
    }
    let signInerror;

    if (error || gerror) {
        signInerror = <p className='text-red-500' > {error?.message || gerror?.message
        }</p >
    }




    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center' >
            <div className="card w-96 bg-base-100 shadow-xl px-3" >
                <div className="card-body" >
                    <h2 className="text-2xl font-bold text-center" > Login</h2 >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
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
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500" > {errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500" > {errors.password?.message}</span >}


                            </label >
                        </div >
                        {signInerror}
                        < input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form >
                    <p><small>New to doctor portal <Link className='text-primary' to='/signup'>Create new Account</Link></small> </p >
                </div >
                <div className="divider" > OR</div >
                <div className='w-full px-5' >
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn w-full  btn-outline mb-1" > Continue with google</button >
                </div >
            </div >
        </div >
    );
};

export default Login;