import React, { useEffect, useState } from 'react';
import LoadParts from './LoadParts';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('tools-manufac.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    console.log(parts)

    return (
        <div className='my-5'>
            <div>
                <h1 className='text-2xl text-center'>Products Parts</h1>
                <div class="divider w-20 mx-auto"></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    parts.map((parts, index) => <LoadParts

                        key={index}
                        parts={parts}
                    ></LoadParts>)
                }
            </div>
        </div>
    );
};

export default Parts;