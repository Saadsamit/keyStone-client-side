import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useQuery } from "@tanstack/react-query"

const GetAProperties = (id)=>{
    const axios = useAxiosPrivate()
    const getAProperties = async()=>{
        const {data} = await axios(`/get-a-propertie/${id}`)
        return data
    }
    const {data={},isPending,refetch} = useQuery({
        queryKey: ['getAProperties'],
        queryFn: getAProperties
    })
    return [data,isPending,refetch]
}

export default GetAProperties