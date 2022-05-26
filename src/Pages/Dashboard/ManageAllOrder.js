import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery('doctors', () => fetch('https://young-sierra-81970.herokuapp.com/allorder', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'> Manage Product {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>User Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrderRow

                                key={order._id}
                                order={order}
                                index={index}


                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;