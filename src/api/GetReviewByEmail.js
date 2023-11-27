import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useContext } from 'react';
import { myAuthProvider } from './../provider/AuthProvider';
const GetReviewByEmail = () => {
  const axios = useAxiosPrivate();
  const {user,loading} = useContext(myAuthProvider)
  const getReview = async () => {
    const { data } = await axios(`/getReviewByEmail/${user?.email}`);
    return data;
  };
  const {
    data = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["getReviewByEmail", user?.email],
    queryFn: getReview,
    enabled: !loading
  });
  return [data, isPending, refetch];
};
export default GetReviewByEmail;
