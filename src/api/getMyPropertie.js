import { useContext } from "react"
import { myAuthProvider } from "../provider/AuthProvider"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useQuery } from "@tanstack/react-query"

const GetMyPropertie = ()=>{
    const {user,loaging} = useContext(myAuthProvider)
    const axios = useAxiosPrivate()
    const getMyPropertie = async()=>{
        const {data} = await axios(`/get-MyProperty/${user?.email}`)
        return data
    }
    const {data={},isPending,refetch} = useQuery({
        queryKey: ['getMyPropertie',user?.email],
        queryFn: getMyPropertie,
        enabled: !loaging
    })
    return [data,isPending,refetch]
}

export default GetMyPropertie