import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const useFavourites = () => {
    const { user } = useContext(AuthContext);

    const { data: favourites= [], refetch} = useQuery({
        queryKey: ['favourites', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://af-elegance-server-md-arefin.vercel.app/favourites/${user?.email}`)

            return res.json();
        },
    })

    return [favourites , refetch]
};

export default useFavourites;