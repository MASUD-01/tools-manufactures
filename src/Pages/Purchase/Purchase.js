import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Purchase = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
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
        // const booking = {
        //     // treatmentId: _id,
        //     treatment: name,
        //     date: formattedDate,
        //     slot,
        //     price,
        //     patient: user.email,
        //     patientName: user.displayName,
        //     phone: event.target.phone.value

        // }
    }
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card w-96 bg-base-100 flex-shrink-0 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={service.image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{service.name}</h2>
                        <h2 class="card-title"> price: {service.price}</h2>
                        <h2 class="card-title"> minimun order: {service.minorderquantity}</h2>
                        {/* <input name='quantity' type="number" placeholder='Add Quantity' required /> */}



                        <div className="col-xl-1">
                            <div class="input-group">
                                <div class="">
                                    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="number" placeholder='minimum order' class="form-control" value={num} onChange={handleChange} />
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                </div>
                            </div>
                        </div>





                        <h2 class="card-title"> Availablequantity: {service.availablequantity}</h2>
                        <p>{service.des}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleBooking}>
                            <div className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                                <textarea type="textarea" name='text-area' placeholder="type..." className="input input-bordered w-full h-full max-w-xs" />
                                <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;