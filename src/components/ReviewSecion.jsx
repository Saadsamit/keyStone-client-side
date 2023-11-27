import { useContext, useEffect, useState } from "react";
import MyRating from "./MyRating";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import PropTypes from "prop-types";
import LoadingCards from "./LoadingCards";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import GetReviewData from "../api/getReviewData";
import { useForm } from "react-hook-form";
import { myAuthProvider } from "./../provider/AuthProvider";
import useRole from "../api/useRole";
import toast from "react-hot-toast";
const ReviewSecion = ({ id, title, AgentName, isTrue }) => {
  const axios = useAxiosPrivate();
  const { user } = useContext(myAuthProvider);
  const [isDisabled, setIsDisabled] = useState(false);
  const [role] = useRole("client");
  const { register, reset, handleSubmit } = useForm();
  const [data, isPending, refetch] = GetReviewData(id, isTrue);
  const [rating, setRating] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const handleRating = (value) => {
    setRating(value);
  };
  const reStart = ()=>{
    refetch()
  }
  useEffect(()=>{
    reStart()
  },[reStart])
  const onSubmit = (data) => {
    setIsDisabled(true);
    const propertyId = id;
    const userEmail = user?.email;
    const reviewStar = rating;
    const reviewDescription = data?.review;
    const propertyTitle = title;
    const reviewerImage = user?.photoURL;
    const reviewerName = user?.displayName;
    const agentName = AgentName;
    const reviewData = {
      propertyId,
      userEmail,
      reviewStar,
      reviewDescription,
      propertyTitle,
      reviewerName,
      reviewerImage,
      agentName,
    };
    axios
      .post("/post-review", reviewData)
      .then(() => {
        reset();
        setIsShow(false);
        toast.success("Review add Successfully ");
        refetch();
        setIsDisabled(false);
      })
      .catch(() => {
        toast.error("fail to Review");
      });
  };
  if (isPending) {
    return <LoadingCards />;
  }
  return (
    <div>
      {isShow ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#D7FBE8] p-10 rounded-xl"
        >
          <textarea
            {...register("review", { required: true })}
            placeholder="Type Your Review"
            className="input input-bordered border-[#1F8A70] p-2 focus:outline-[#1F8A70] min-h-[100px] w-full"
          ></textarea>
          <MyRating isTrue={true} rating={rating} handleRating={handleRating} />
          <div className="text-center">
            <button type="submit" disabled={isDisabled} className="btnStyle">
              submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-[#1F8A70] text-4xl font-bold text-center py-10">
            Reviews
          </h2>
          {data.length ? (
            data.length > 3 ? (
              <Slider>
                {data.map((reviewData) => (
                  <SwiperSlide key={reviewData?._id}>
                    {" "}
                    <ReviewCard ForMyReview={false} reviewData={reviewData} />
                  </SwiperSlide>
                ))}
              </Slider>
            ) : (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {data.map((reviewData) => (
                  <ReviewCard key={reviewData?._id} reviewData={reviewData} />
                ))}
              </div>
            )
          ) : (
            <p className="text-center text-2xl font-semibold">
              no Review found
            </p>
          )}
        </div>
      )}
      {role && id && (
        <div className="py-5 text-center">
          <button className="btnStyle" onClick={() => setIsShow(!isShow)}>
            {isShow ? "not now" : "make a review"}
          </button>
        </div>
      )}
    </div>
  );
};
ReviewSecion.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  AgentName: PropTypes.string,
  isTrue: PropTypes.bool,
};
export default ReviewSecion;
