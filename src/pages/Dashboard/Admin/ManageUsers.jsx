import GetAllUser from "../../../api/GetAllUser";
import NoDataFound from "./../../../components/NoDataFound";
import Loading from "./../../../components/Loading";
import ManageUsersRow from "../../../components/ManageUsersRow";
import { useContext } from "react";
import { myAuthProvider } from "./../../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const axios = useAxiosPrivate()
  const [data, refetch, isPending] = GetAllUser();
  const { user, loading } = useContext(myAuthProvider);
  if (isPending || loading) {
    return <Loading />;
  }
  const handleClick = (role,email)=>{
    const sentData = {role,email}
    axios.put(`/updateRole`,sentData).then(()=>{
        toast.success(`role change successfully`)
        refetch()
    }).catch(()=>{
        toast.error(`fail to change role`)
    })
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
            .delete(`/deleteUser/${id}`)
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
      <h2 className="text-xl py-5 text-[#1F8A70] text-center">Manage Users</h2>
      <NoDataFound data={data}>
        <div className="overflow-x-auto">
          <table className="table text-[#1F8A70]">
            <thead>
              <tr className="capitalize">
                <th></th>
                <th>User name</th>
                <th>User email</th>
                <th>User role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((mydata, idx) => (
                <ManageUsersRow
                  key={mydata?._id}
                  data={mydata}
                  email={user?.email}
                  num={idx + 1}
                  handleClick={handleClick}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </NoDataFound>
    </div>
  );
};

export default ManageUsers;
