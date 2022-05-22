import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ExtraSection1 from './ExtraSection1';
import Parts from './Parts';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <ExtraSection1></ExtraSection1>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;