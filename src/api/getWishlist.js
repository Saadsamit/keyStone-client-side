import { useContext } from "react"
import { myAuthProvider } from "../provider/AuthProvider"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useQuery } from "@tanstack/react-query"

const GetWishlist = ()=>{
    const {user,loaging} = useContext(myAuthProvider)
    const axios = useAxiosPrivate()
    const getWishlist = async()=>{
        const {data} = await axios(`/getWishlist/${user?.email}`)
        return data
    }
    const {data={},isPending,refetch} = useQuery({
        queryKey: ['getWishlist',user?.email],
        queryFn: getWishlist,
        enabled: !loaging
    })
    return [data,isPending,refetch]
}

export default GetWishlist