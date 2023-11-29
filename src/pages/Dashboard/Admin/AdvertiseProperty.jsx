import toast from "react-hot-toast";
import AdminAdvertiseProperty from "../../../api/adminAdvertiseProperty";
import AdvertiseRow from "../../../components/AdvertiseRow";
import Loading from './../../../components/Loading';
import NoDataFound from './../../../components/NoDataFound';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const AdvertiseProperty = () => {
    const axios = useAxiosPrivate()
    const [data,refetch,isPending] = AdminAdvertiseProperty()
    if(isPending){
        return <Loading/>
    }
    const advertiseLength = data[1]
    const handleClick = (id, advertise) => {
        const sentData = { advertise };
        axios
          .put(`/Advertise-Property/${id}`, sentData)
          .then(() => {
            toast.success(`advertise successfully`);
            refetch();
          })
          .catch(() => {
            toast.error(`fail to advertise`);
          });
      };
    return (
        <div>
            <h2 className="text-xl py-5 text-[#1F8A70] text-center">Advertise Property</h2>
            <NoDataFound data={data[0]}>
            <div className="overflow-x-auto">
          <table className="table text-[#1F8A70]">
            <thead>
              <tr className="capitalize">
                <th></th>
                <th>property image</th>
                <th>property title</th>
                <th>price range</th>
                <th>Agent name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                    data[0]?.map((property,idx)=><AdvertiseRow data={property} key={property._id} advertiseLength={advertiseLength} handleClick={handleClick} num={idx + 1}/>)
                }
            </tbody>
          </table>
        </div>
            </NoDataFound>
        </div>
    );
};

export default AdvertiseProperty;