import GetaddedProperties from "../../../api/getaddedProperties";
import AgentPropertieCard from "../../../components/AgentPropertieCard";
import Loading from './../../../components/Loading';
import NoDataFound from './../../../components/NoDataFound';
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const MyAddedProperties = () => {
    const axios = useAxiosPrivate()
    const [data,isPending,refetch] = GetaddedProperties()
    if(isPending){
        return <Loading/>
    }
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btnStyle m-5",
            cancelButton: "btn btn-danger m-5",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              axios
                .delete(`/deleteProperties/${id}`)
                .then((res) => {
                  if (res.data.deletedCount > 0) {
                    toast.success("detete Successfully ");
                    refetch();
                  }
                })
                .catch(() => {
                  toast.error("fail to delete");
                });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              toast.error("you cancel delete");
            }
          });
      };
      
    return (
        <div>
            <h2 className="text-xl py-5 text-[#1F8A70] text-center">My Added Properties</h2>
            <NoDataFound data={data}>
                <div className="grid lg:grid-cols-2 gap-4 p-5">
                    {
                        data?.map(propertie=> <AgentPropertieCard handleDelete={handleDelete} data={propertie} key={propertie?._id}/>)
                    }
                </div>
            </NoDataFound>
        </div>
    );
};

export default MyAddedProperties;