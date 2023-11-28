import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const GetSoldPropertie = () => {
  const { user, loaging } = useContext(myAuthProvider);
  const axios = useAxiosPrivate();
  const getSoldPropertie = async () => {
    const { data } = await axios(`/getSoldPropertie/${user?.email}`);
    return data;
  };
  const {
    data = {},
    isPending,
  } = useQuery({
    queryKey: ["getMyPropertie", user?.email],
    queryFn: getSoldPropertie,
    enabled: !loaging,
  });
  return [data, isPending];
};

export default GetSoldPropertie;
