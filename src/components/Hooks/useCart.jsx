import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const useCart = () =>{
    const { user } = useContext(AuthContext);

    const { data: carts= [], refetch: cartRefetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://af-elegance-server-md-arefin.vercel.app/carts/${user?.email}`)

            return res.json();
        },
    })

    return [carts , cartRefetch]
}

export default useCart;