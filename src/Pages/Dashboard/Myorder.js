// import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorder = () => {
    const [order, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                // headers: {
                //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                // }
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data)

                });
        }
    }, [user, navigate])
    return (
        <div>

            <h2 className='text-2xl'>My Orders:{order.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.userName}</td>
                                <td>{a.price}</td>
                                <td>{a.Order}</td>
                                <td>{a.quantity}</td>

                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-xs btn-success'>Pay</button></Link>}

                                    {(a.price && a.paid) && <div>
                                        <p><span className=' btn btn-xs btn-success'>paid</span> </p>
                                        <p>Transaction id: <span className='text-success'> {a.transactionId}</span> </p>
                                    </div>}
                                </td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default Myorder;