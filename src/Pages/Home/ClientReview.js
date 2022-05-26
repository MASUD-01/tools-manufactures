import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ClientReview = () => {
    const { data: reviews, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/allorder', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-28'>
            <h1 className='text-2xl text-center font-bold mt-10'>Client Reviews for Products</h1>
            <h1 className='text-2xl text-center font-bold'>Total Reviews: {reviews.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5'>
                {
                    reviews.map(review => <div key={review._id} className="card w-[300px] bg-base-100 shadow-xl mx-auto">
                        <div className="avatar p-3 ">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                                <img src={review.image} />
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">(rating: {review.ratings})</h2>
                            <h2 className="card-title">{review.Order}</h2>
                            <p>reviews: {review.review}</p>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClientReview;