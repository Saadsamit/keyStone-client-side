import RequestedPropertiesCard from "../../../components/RequestedPropertiesCard";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import RequestedPropertie from "./../../../api/RequestedProperties";
import Loading from "./../../../components/Loading";
import NoDataFound from "./../../../components/NoDataFound";
import { toast } from 'react-hot-toast';

const RequestedProperties = () => {
    const axios = useAxiosPrivate()
  const [data, isPending, refetch] = RequestedPropertie();
  if (isPending) {
    return <Loading />;
  }
  const handleClick = (id,status,email,propertyId)=>{
    const sentData = {status,email,propertyId}
    axios.put(`/Requested/${id}`,sentData).then(()=>{
        toast.success(`${status} successfully`)
        refetch()
    }).catch(()=>{
        toast.error(`fail to ${status}`)
    })
  }
  return (
    <div>
      <h2 className="text-xl py-5 text-[#1F8A70] text-center">
        Requested Properties
      </h2>
      <NoDataFound data={data}>
        <div className="grid lg:grid-cols-2 gap-4 p-5">
          {data?.map((mydata) => (
            <RequestedPropertiesCard key={mydata?._id} handleClick={handleClick} data={mydata} />
          ))}
        </div>
      </NoDataFound>
    </div>
  );
};

export default RequestedProperties;
