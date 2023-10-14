import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const useCart = () =>{
    const { user } = useContext(AuthContext);

    const { data: carts= [], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/carts/${user?.email}`)

            return res.json();
        },
    })

    return [carts , refetch]
}

export default useCart;