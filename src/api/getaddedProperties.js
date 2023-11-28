import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useContext } from 'react';
import { myAuthProvider } from './../provider/AuthProvider';
const GetaddedProperties = () => {
  const axios = useAxiosPrivate();
  const {user,loading} = useContext(myAuthProvider)
  const getaddedProperties = async () => {
    const { data } = await axios(`/get-added-properties/${user?.email}`);
    return data;
  };
  const {
    data = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["getaddedProperties", user?.email],
    queryFn: getaddedProperties,
    enabled: !loading
  });
  return [data, isPending, refetch];
};
export default GetaddedProperties;
