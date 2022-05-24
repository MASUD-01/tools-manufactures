import React from 'react';
import image from '../../assets/extraimage/hand-drawn-web-developers_23-2148819604.webp'

const Myportfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl font-bold">Md. Masud Rana</h1>
                    <h1 class="text-3xl font-bold">I'm a webdevloper</h1>
                    <h1 class="text-2xl font-bold">Email:masudrana@gmail.com</h1>
                    <h1 class="text-2xl font-bold">Education: Higher Secondary</h1>
                    <h1 class="text-2xl font-bold">Skill: Html,CSS,Bootstrap,Tailwind, Javascript,React Js, Node Js, Mongodb</h1>
                    <p class="py-6"></p>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;