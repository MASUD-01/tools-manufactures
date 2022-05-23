import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const LoadParts = ({ parts }) => {
    const { name, image, des, price, minorderquantity, availablequantity, _id } = parts;

    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body pb-0">
                <h2 className="card-title">
                    <div className="badge badge-secondary">{name}</div>
                </h2>
                <h2>Price: ${price}</h2>
                {/* <h2>Minimun Order: {minorderquantity}</h2> */}
                <h2>Availablequantity: {availablequantity}</h2>
                <p>{des.slice(0, 150)}</p>
            </div>
            <PrimaryButton

            > <Link to={`/purchase/${_id}`} >Buy Now</Link> </PrimaryButton>
        </div>

    );
};

export default LoadParts;