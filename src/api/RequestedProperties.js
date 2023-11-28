import { useContext } from "react"
import { myAuthProvider } from "../provider/AuthProvider"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useQuery } from "@tanstack/react-query"

const RequestedPropertie = ()=>{
    const {user,loaging} = useContext(myAuthProvider)
    const axios = useAxiosPrivate()
    const requestedProperties = async()=>{
        const {data} = await axios(`/RequestedProperties/${user?.email}`)
        return data
    }
    const {data=[],isPending,refetch} = useQuery({
        queryKey: ['RequestedProperties',user?.email],
        queryFn: requestedProperties,
        enabled: !loaging
    })
    return [data,isPending,refetch]
}

export default RequestedPropertie