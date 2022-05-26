import React from 'react';
import image from '../../assets/extraimage/hand-drawn-web-developers_23-2148819604.webp'

const Myportfolio = () => {
    return (
        <div>
            <h1 className='text-center my-20 text-3xl font-bold'>My Portfolio</h1>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Md. Masud Rana</h1>
                        <h1 className="text-3xl font-bold">I'm a webdevloper</h1>
                        <h1 className="text-2xl font-bold">Email:masudrana@gmail.com</h1>
                        <h1 className="text-2xl font-bold">Education: Higher Secondary</h1>
                        <h1 className="text-2xl font-bold">Skill: Html,CSS,Bootstrap,Tailwind, <br /> Javascript,React Js, Node Js, Mongodb</h1>
                        <h1 className="text-2xl font-bold">WEBSITE: https://tools-menufactures.web.app/</h1>
                        <p className="py-6"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;