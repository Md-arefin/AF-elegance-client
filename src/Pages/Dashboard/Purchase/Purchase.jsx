import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Purchase = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/get-payment/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log("[data]",data);
            setData(data)
        })
    },[user]);

    return (
        <div>
            <p className='text-center text-3xl'> This is purchase history: {data.length}.</p>
        </div>
    );
};

export default Purchase;