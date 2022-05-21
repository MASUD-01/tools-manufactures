import React from 'react';
import banner from '../../assets/images/nackground.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        </div >
    );
};

export default Banner;