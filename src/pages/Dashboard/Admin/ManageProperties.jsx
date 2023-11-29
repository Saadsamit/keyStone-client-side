import AdminManageProperties from "../../../api/AdminManageProperties";
import NoDataFound from "./../../../components/NoDataFound";
import Loading from "./../../../components/Loading";
import AdminPropertiesRow from "../../../components/AdminPropertiesRow";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
const ManageProperties = () => {
  const axios = useAxiosPrivate();
  const [data, isPending, refetch] = AdminManageProperties();
  if (isPending) {
    return <Loading />;
  }
  const handleClick = (id, status) => {
    const sentData = { status };
    axios
      .put(`/PropertiesAction/${id}`, sentData)
      .then(() => {
        toast.success(`${status} successfully`);
        refetch();
      })
      .catch(() => {
        toast.error(`fail to ${status}`);
      });
  };
  return (
    <div>
      <h2 className="text-xl py-5 text-[#1F8A70] text-center">
        Manage Properties
      </h2>
      <NoDataFound data={data}>
        <div className="overflow-x-auto">
          <table className="table text-[#1F8A70]">
            {/* -.-.---.-. */}
            <thead>
              <tr className="capitalize">
                <th></th>
                <th>property title</th>
                <th>Property location</th>
                <th>Agent name</th>
                <th>agent email</th>
                <th>price range</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((propertie, idx) => (
                <AdminPropertiesRow
                  key={propertie?._id}
                  handleClick={handleClick}
                  num={idx + 1}
                  data={propertie}
                />
              ))}
            </tbody>
          </table>
        </div>
      </NoDataFound>
    </div>
  );
};

export default ManageProperties;
