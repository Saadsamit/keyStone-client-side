import { useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { myAuthProvider } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useRole = (Role) => {
  const axios = useAxiosPrivate();
  const { user, loading } = useContext(myAuthProvider);
  const findData = async () => {
    const { data } = await axios(`/getRole/${user?.email}`);
    return data;
  };
  const { data, isPending } = useQuery({
    queryKey: ["role",user?.email],
    queryFn: findData,
    enabled: !loading,
  });
  const role = data?.role === Role;
  return [role, isPending];
};
export default useRole;
