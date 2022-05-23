import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';

// import Loading from '../Shared/Loading';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div>
            <h2 className='text-2xl'>All users: {users.length}</h2>
            <table className="table w-full" >

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) => <UserRow

                            key={user._id}
                            user={user}
                            index={index}



                        ></UserRow>)
                    }
                </tbody>
            </table >

        </div>
    );
};

export default Users;