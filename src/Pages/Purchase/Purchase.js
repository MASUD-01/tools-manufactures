import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    const url = `http://localhost:5000/purchase/${id}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setService(data))
    }, [url, id])

    return (
        <div>
            <h1>this is purchase{service.name}</h1>
        </div>
    );
};

export default Purchase;