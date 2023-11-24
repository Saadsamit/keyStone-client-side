import axios from "axios";
import { useEffect, useState } from "react";
import PropertiesCard from "../components/PropertiesCard";
import Container from "../components/Container";

const AllProperties = () => {
    const [allData, setallData] = useState([])
    useEffect(()=>{
        axios('/public/propety.json')
    .then(res=>{
        setallData(res.data);
    })
    },[])
    return (
        <Container data={'py-20'}>
           <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {
                allData.map((data,idx)=><PropertiesCard key={idx} data={data}/>)
              }
           </div>
        </Container>
    );
};

export default AllProperties;