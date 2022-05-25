import React from 'react';

const ProductRow = ({ product, index, setDeletingProduct }) => {
    const { name, price, image } = product;
    return (
        <tr className='w-50'>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr >
    );
};

export default ProductRow;