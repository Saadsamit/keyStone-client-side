import PropTypes from "prop-types";
import MyRating from "./MyRating";
const ReviewCard = ({ reviewData, ForMyReview,handleDelete }) => {
  const reviewTime = reviewData.reviewTime
  const date = new Date(reviewTime).toLocaleString().split(',')[0]
  return (
    <div className="card bg-[#D7FBE8]">
      <div className="card-body items-center text-[#1F8A70]">
        {ForMyReview ? (
          <h2 className="card-title">{reviewData?.agentName}</h2>
        ) : (
          <>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={reviewData?.reviewerImage} />
              </div>
            </div>
            <h2 className="card-title">{reviewData?.reviewerName}</h2>
          </>
        )}
          {
            ForMyReview && <p className="text-[#00425A]">{date}</p>
          }
        <p className="text-[#00425A]">{reviewData?.reviewDescription}</p>
        <h2>{reviewData?.propertyTitle}</h2>
        <div className="card-actions justify-end">
          <MyRating isTrue={false} rating={reviewData?.reviewStar} />
        </div>
        {
          ForMyReview && <button onClick={()=> handleDelete(reviewData?._id)} className="btnStyle !bg-red-500">detete</button>
        }
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  reviewData: PropTypes.object,
  ForMyReview: PropTypes.bool,
  handleDelete: PropTypes.func
};
export default ReviewCard;
