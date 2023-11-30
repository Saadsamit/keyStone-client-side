import Swal from "sweetalert2";
import GetReviewData from "../../../api/getReviewData";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Loading from './../../../components/Loading';
import toast from "react-hot-toast";
import NoDataFound from "../../../components/NoDataFound";
import ManageReviewsCard from "../../../components/ManageReviewsCard";

const ManageReviews = () => {
    const axios = useAxiosPrivate();
    const [data, isPending, refetch] = GetReviewData()
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
                .delete(`/deleteReview/${id}`)
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
             <h2 className="text-xl py-5 text-[#1F8A70] text-center">Manage Reviews</h2>
             <NoDataFound data={data}>
        <div className="grid lg:grid-cols-2 gap-4 p-5">
          {data.map((reviewData) => (
            <ManageReviewsCard
              handleDelete={handleDelete}
              key={reviewData?._id}
              ForMyReview={true}
              reviewData={reviewData}
            />
          ))}
        </div>
      </NoDataFound>
        </div>
    );
};

export default ManageReviews;