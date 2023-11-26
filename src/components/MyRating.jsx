import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
const MyRating = ({ rating, handleRating, isTrue }) => {
  return (
    <div>
      {isTrue ? (
        <Rating
          emptySymbol={<FaRegStar className="text-[#1F8A70] text-2xl" />}
          fullSymbol={<FaStar className="text-[#1F8A70] text-2xl" />}
          initialRating={rating}
          fractions={2}
          onChange={handleRating}
        />
      ) : (
        <Rating
          emptySymbol={<FaRegStar className="text-[#1F8A70] text-2xl" />}
          fullSymbol={<FaStar className="text-[#1F8A70] text-2xl" />}
          initialRating={rating}
          fractions={2}
          readonly
        />
      )}
    </div>
  );
};
MyRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleRating: PropTypes.func,
  isTrue: PropTypes.bool.isRequired,
};
export default MyRating;
