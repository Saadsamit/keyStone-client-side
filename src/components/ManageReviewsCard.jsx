import PropTypes from "prop-types";

const ManageReviewsCard = ({ reviewData, handleDelete }) => {
  return (
    <div className="card bg-[#D7FBE8]">
      <div className="card-body items-center text-[#1F8A70]">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={reviewData?.reviewerImage} />
          </div>
        </div>
        <h2>{reviewData?.userEmail}</h2>
        <h2 className="card-title">{reviewData?.reviewerName}</h2>
        <h2>{reviewData?.propertyTitle}</h2>
        <p className="text-[#00425A] text-center">{reviewData?.reviewDescription}</p>
        <button
            onClick={() => handleDelete(reviewData?._id)}
            className="btnStyle !bg-red-500"
          >
            detete
          </button>
      </div>
    </div>
  );
};
ManageReviewsCard.propTypes = {
  reviewData: PropTypes.object,
  handleDelete: PropTypes.func,
};
export default ManageReviewsCard;
