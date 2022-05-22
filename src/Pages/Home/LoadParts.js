import React from 'react';

const LoadParts = ({ parts }) => {
    const { name, image, des, price, minorderquantity, availablequantity } = parts;
    console.log(name)
    return (

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body pb-0">
                <h2 class="card-title">
                    <div class="badge badge-secondary">{name}</div>
                </h2>
                <h2>Price: ${price}</h2>
                <h2>Minimun Order: {minorderquantity}</h2>
                <h2>Availablequantity: {availablequantity}</h2>
                <p>{des.slice(0, 150)}</p>
            </div>
            <button class="btn btn-outline btn-secondary my-2 w-20 mx-auto">Buynow</button>
        </div>

    );
};

export default LoadParts;