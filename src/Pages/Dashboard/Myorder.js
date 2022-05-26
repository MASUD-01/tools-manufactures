
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorder = () => {
    const [order, setOrders] = useState([]);
    const [update, setUpdate] = useState(false)
    const [cancel, setCancel] = useState('')
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://young-sierra-81970.herokuapp.com/order?email=${user.email}`, {
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
    }, [user, navigate, update])


    const handleEmail = () => {
        fetch(`https://young-sierra-81970.herokuapp.com/ordercancel/${cancel}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    setUpdate(!update)
                    // window.location.reload(false);
                }
            })
    }
    return (
        <>
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
                                <th>Cancel</th>
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
                                    <td>
                                        {(a.price && !a.paid) && <label htmlFor="delete-confirm" onClick={() => setCancel(a._id)} className='btn btn-xs btn-success'>cancel</label>}
                                    </td>
                                </tr>)

                            }

                        </tbody>
                    </table>
                </div >
            </div >
            {
                cancel && <div>
                    <input type="checkbox" id="delete-confirm" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-red-400">Are you sure to delete? Product:  <span className='text-red-600'> {''}</span></h3>
                            <p className="py-4">You've been selected a product that you are going to delete???</p>
                            <div className="modal-action">
                                {/* <button onClick={() => handleEmail()} className="btn btn-xs btn-error">Delete</button> */}
                                <label onClick={() => handleEmail()} htmlFor="delete-confirm" className="btn btn-xs btn-error">Yes</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Myorder;