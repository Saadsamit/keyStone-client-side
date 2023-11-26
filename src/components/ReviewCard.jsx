import PropTypes from "prop-types";
import MyRating from "./MyRating";
const ReviewCard = ({ reviewData }) => {
  return (
    <div className="card bg-[#D7FBE8]">
      <div className="card-body items-center text-[#1F8A70]">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={reviewData?.reviewerImage} />
          </div>
        </div>
        <h2 className="card-title">{reviewData?.reviewerName}</h2>
        
        <p className="text-[#00425A]">{reviewData?.reviewDescription}</p>
        <h2>{reviewData?.propertyTitle}</h2>
        <div className="card-actions justify-end">
        <MyRating isTrue={false} rating={reviewData?.reviewStar}/>
        </div>
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  reviewData: PropTypes.object,
};
export default ReviewCard;
