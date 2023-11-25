import { useState } from "react";
import PropertiesCard from "../components/PropertiesCard";
import Container from "../components/Container";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const AllProperties = () => {
    const axios = useAxiosPrivate()
    const [search, setSearch] = useState('')
    const properties = async()=>{
        const {data} = await axios(`/Properties?search=${search}`)
        return data
    }
    const {data:allData = [],refetch} = useQuery({
        queryKey: ['properties'],
        queryFn: properties
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        refetch();
        setSearch('')
        e.target.reset()
    }
    return (
        <Container data={'py-10'}>
            <form className="flex justify-center items-center pb-10 join" onSubmit={handleSubmit}>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search Propertie" className="input input-bordered focus:border-[#1F8A70] focus:outline-none w-full max-w-xs join-item" />
            <input type="submit" value={'submit'} className="btn bg-[#1F8A70] text-[#D7FBE8] hover:bg-[#00425A] capitalize join-item" />
            </form>
           <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {
                allData.map((data,idx)=><PropertiesCard key={idx} data={data}/>)
              }
           </div>
        </Container>
    );
};

export default AllProperties;