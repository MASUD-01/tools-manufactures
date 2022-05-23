import React from 'react';
import icons1 from '../../assets/icons/business-and-finance.png'
import icons2 from '../../assets/icons/rating.png'
import icons3 from '../../assets/icons/settings.png'


const BusinessSummary = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold text-center'>Millinons people trust us</h1>
            <h1 className='text-2xl text-center'>See our User Expectation</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="lg:max-w-lg bg-base-100">
                    <figure className="px-10 pt-10">
                        <img className='w-12 mx-auto' src={icons1} />
                    </figure>
                    <figure className="px-10 pt-10 text-center">
                        120M+ Annual revenue
                    </figure>
                </div>
                <div className="lg:max-w-lg bg-base-100">
                    <figure className="px-10 pt-10">
                        <img className='w-12 mx-auto' src={icons2} />
                    </figure>
                    <figure className="px-10 pt-10 text-center">
                        33K+ Reviews
                    </figure>
                </div>
                <div className="lg:max-w-lg bg-base-100">
                    <figure className="px-10 pt-10">
                        <img className='w-12 mx-auto' src={icons3} />
                    </figure>
                    <figure className="px-10 pt-10 text-center">
                        50+ tools
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;