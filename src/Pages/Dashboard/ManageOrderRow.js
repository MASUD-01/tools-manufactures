import React from 'react';

const ManageOrderRow = ({ order, index }) => {
    const { Order: name, price, image, userName } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{userName}</td>
            <td>{price}</td>

        </tr >
    );
};

export default ManageOrderRow;