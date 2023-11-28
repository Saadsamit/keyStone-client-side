import toast from "react-hot-toast";
import GetReviewByEmail from "../../../api/GetReviewByEmail";
import ReviewCard from "../../../components/ReviewCard";
import Spiner from "../../../components/Spiner";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import NoDataFound from "../../../components/NoDataFound";

const MyReviews = () => {
  const axios = useAxiosPrivate();
  const [review, isPending, refetch] = GetReviewByEmail();
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spiner isTrue={false} />
      </div>
    );
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
    <div className="text-center">
      <h2 className="text-xl py-5 text-[#1F8A70]">My reviews</h2>
      <NoDataFound data={review}>
        <div className="grid lg:grid-cols-2 gap-4 p-5">
          {review.map((reviewData) => (
            <ReviewCard
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

export default MyReviews;
