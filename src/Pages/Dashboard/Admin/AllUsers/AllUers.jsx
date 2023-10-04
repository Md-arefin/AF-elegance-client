import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const {data: users = [], refetch } = useQuery(["users"], async() =>{
        const res = await fetch('http://localhost:5000/all-users')
        return res.json();
    })

    return (
        <div>
            <p className='text-center text-5xl'>This is All users page</p>
            <p className='text-center text-5xl mt-20'>This is Total users: {users.length}</p>

        </div>
    );
};

export default AllUsers;