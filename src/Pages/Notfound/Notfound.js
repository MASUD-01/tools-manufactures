import React from 'react';
import notfound from '../../assets/extraimage/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg'

const Notfound = () => {
    return (
        <div className='w-96 h-96 mx-auto' style={{ background: `url(${notfound})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        </div>
    );
};

export default Notfound;