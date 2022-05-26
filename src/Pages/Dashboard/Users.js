import React from 'react';
import UserRow from './UserRow';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';



const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('https://young-sierra-81970.herokuapp.com/user', {

        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()

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
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table >

        </div>
    );
};

export default Users;