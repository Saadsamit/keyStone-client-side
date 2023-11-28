import GetSoldPropertie from "../../../api/getSoldPropertie";
import AgentTableRow from "../../../components/AgentTableRow";
import Loading from './../../../components/Loading';
import NoDataFound from './../../../components/NoDataFound';

const MySoldProperties = () => {
    const [data, isPending] = GetSoldPropertie()
    if(isPending){
        return <Loading/>
    }
    console.log(data);
    return (
        <div>
            <h2 className="text-xl py-5 text-[#1F8A70] text-center">My Sold Properties</h2>
            <NoDataFound data={data}>
            <div className="overflow-x-auto">
  <table className="table text-[#1F8A70]">
    <thead>
      <tr>
        <th></th>
        <th>Property Title</th>
        <th>Property Location</th>
        <th>Buyer Email</th>
        <th>Buyer Name</th>
        <th>Sold Price</th>
      </tr>
    </thead>
    <tbody>
        {data?.map((mydata,idx)=><AgentTableRow data={mydata} num={idx+1} key={mydata?._id}/>)}
    </tbody>
  </table>
</div>
            </NoDataFound>
        </div>
    );
};

export default MySoldProperties;