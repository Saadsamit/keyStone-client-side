import { useState } from "react";
import Rating from "react-rating";


const ReviewSecion = () => {
    const [rating, setRating] = useState(0); // Initial rating state

    const onStarClick = (nextValue) => {
      // Handle the rating change event here
      setRating(nextValue);
    };
    console.log(rating);
    return (
        <div>
      <h2>Rating: {rating}</h2> {/* Display the current rating */}
      <Rating
        name="rating"
        starCount={5} // Number of stars
        value={rating} // Current rating value
        onStarClick={onStarClick} // Handler for the rating change event
      />
    </div>
    );
};

export default ReviewSecion;