import React from 'react';
import image1 from '../../assets/extraimage/20210205_124536_250x.webp'
import image2 from '../../assets/extraimage/zalkin-change-parts-cart-july2020.jpg'

const ExtraSection1 = () => {
    return (
        <>
            <div className="hero min-h-screen p-36" >
                <div className="hero-content flex-col lg:flex-row  mx-auto w-20 md:w-auto" >
                    <img src={image1} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-8' >
                        <h1 className="text-5xl font-bold" > A tire (American English) or tyre (British English) is a ring-shaped</h1 >
                        <p className="py-6 " > component that surrounds a wheel's rim to transfer a vehicle's load from the axle through the wheel to the ground and to provide traction on the surface over which the wheel travels.</p >
                        <button class="btn btn-outline btn-secondary my-2 w-max mx-auto">Know More</button>
                    </div >
                </div >
            </div >
            <div className="hero min-h-screen p-36" >
                <div className="hero-content flex-col lg:flex-row  mx-auto w-20 md:w-auto" >
                    <div className='px-8' >
                        <h1 className="text-5xl font-bold" > Screwdriver or screw drives is a tool used to install and remove screws.</h1 >
                        <p className="py-6 " >Automotive tools and equipment are products that mechanics (or car owners) use when working on vehicles. They can be tools to keep parts and systems in good</p >
                        <button class="btn btn-outline btn-secondary my-2 w-max mx-auto">Know More</button>
                    </div >
                    <img src={image2} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" />
                </div >
            </div >
        </>
    );
};

export default ExtraSection1;