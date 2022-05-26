import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const LoadParts = ({ parts }) => {
    const { name, image, des, price, minorderquantity, availablequantity, _id } = parts;

    return (

        <div className="card relative h-[550px] w-[280px] shadow-xl mx-auto p-5">
            <figure><img className='' src={image} alt="Shoes" /></figure>
            <div className="py-10">
                <h2 className="card-title">
                    <div className="badge badge-secondary">{name}</div>
                </h2>
                <h2>Price: ${price}</h2>
                <h2>Availablequantity: {availablequantity}</h2>
                <p className=''>{des.slice(0, 150)}</p>
            </div>
            <div
                className='absolute bottom-0 w-full mx-auto'>
                <PrimaryButton

                > <Link to={`/purchase/${_id}`} >Buy Now</Link> </PrimaryButton>
            </div>
        </div>

    );
};

export default LoadParts;