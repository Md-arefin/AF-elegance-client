import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const useFavourites = () => {
    const { user } = useContext(AuthContext);

    const { data: favourites= [], refetch} = useQuery({
        queryKey: ['favourites', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/favourites/${user?.email}`)

            return res.json();
        },
    })

    return [favourites , refetch]
};

export default useFavourites;