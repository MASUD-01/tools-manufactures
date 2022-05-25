import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    const { _id, name, price, image, des, minorderquantity, availablequantity } = service;

    const url = `http://localhost:5000/purchase/${id}`
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setService(data))
    }, [url, id])


    const handleBooking = event => {
        event.preventDefault();
        const order = {
            orderId: _id,
            Order: name,
            price,
            image: image,
            quantity: num,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            review: event.target.textarea.value,
            ratings: event.target.ratings.value

        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Thanks For your Order')
                }
                else {
                    toast.error('Failed to success')
                }

            })
    }
    let [num, setNum] = useState(5);

    let incNum = (availquan) => {
        if (num < availquan) {
            setNum(Number(num) + 1);
        }

    };
    const decNum = (minquan) => {
        if (num > minquan) {
            setNum(Number(num) - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card w-96 bg-base-100 flex-shrink-0 shadow-xl">
                    <h1 className='text-center font-bold'>Product Overview</h1>
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title"> price:$ {price}</h2>
                        <h2 className="card-title"> minimun quantity: {minorderquantity}</h2>

                        <div className="col-xl-1">
                            <div className="input-group">
                                <div className="">
                                    <button className="btn btn-outline-primary hover:bg-primary hover:text-black" type="button" onClick={() => decNum(minorderquantity)}>-</button>
                                </div>
                                <input type="number" placeholder='minimum order' className="form-control" value={num} onChange={handleChange} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary hover:bg-primary hover:text-black" type="button" onClick={() => incNum(availablequantity, minorderquantity)}>+</button>
                                </div>
                            </div>
                        </div>

                        <h2 className="card-title"> Availablequantity: {availablequantity}</h2>
                        <p>{des}</p>
                    </div>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleBooking}>
                            <div className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                                <p>Add your Valuable reviews</p>
                                <input type="number" min='1' max='5' name='ratings' placeholder="ratings.." className="input input-bordered w-full max-w-xs" />
                                <textarea type="textarea" name='textarea' placeholder="reviews comments..." className="input input-bordered w-full h-full max-w-xs" />
                                <input type="submit" value='Purchase' className="btn btn-secondary w-full max-w-xs" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;