import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const { data: product, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'> Manage Product {product.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((product, index) => <ProductRow

                                key={product._id}
                                product={product}
                                index={index}

                                setDeletingProduct={setDeletingProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <DeleteConfirmModal
                    deletingProduct={deletingProduct}
                    refetch={refetch}
                    setDeletingProduct={setDeletingProduct}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProduct;