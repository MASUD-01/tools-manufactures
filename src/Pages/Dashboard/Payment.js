import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0TAlJJtrlqAqk5EA6gtEHpEwrLgFEnY32DueF0GZw5AjQoaMH43WJrQal15OeIubJH4LhhWzYuRNdLI8eW5Hzw00eM2m888x');

const Payment = () => {
    const { id } = useParams();
    const url = `https://young-sierra-81970.herokuapp.com/order/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url,
        {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {order.userName}</p>
                    <h2 className="card-title">Pleae pay htmlFor:   {order.Order}</h2>
                    <p>Quantity: ${order.quantity}</p>
                    <p> Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;