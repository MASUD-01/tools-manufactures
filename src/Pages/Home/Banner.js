import React from 'react';
import banner1 from '../../assets/images/Vehicles-parts.jpeg'
import banner2 from '../../assets/images/car-parts1.jpg'


const Banner = () => {
    return (
        <div>
            <div class="carousel h-screen w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={banner1} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={banner2} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;


// style={{ background: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}