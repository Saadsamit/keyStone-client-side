import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
const GetReviewData = (id, isTrue) => {
  const axios = useAxiosPrivate();
  const getReview = async () => {
    const { data } = await axios(`/getReview${isTrue ? `?id=${id}` : ""}`);
    return data;
  };
  const {
    data = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["getReview"],
    queryFn: getReview,
  });
  return [data, isPending, refetch];
};
export default GetReviewData;
