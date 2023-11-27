import { useContext } from "react"
import { myAuthProvider } from "../provider/AuthProvider"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useQuery } from "@tanstack/react-query"

const GetUser = ()=>{
    const {user,loaging} = useContext(myAuthProvider)
    const axios = useAxiosPrivate()
    const getUser = async()=>{
        const {data} = await axios(`/getUser/${user?.email}`)
        return data
    }
    const {data={},isPending,refetch} = useQuery({
        queryKey: ['getUser',user?.email],
        queryFn: getUser,
        enabled: !loaging
    })
    return [data,isPending,refetch]
}

export default GetUser