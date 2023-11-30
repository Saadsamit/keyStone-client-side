import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const GetAllUser = ()=>{
    const axios = useAxiosPrivate();
    const getAllUser = async () => {
        const { data } = await axios(`/ManageUsers`);
        return data;
      };
      const {
        data = [],
        refetch,
        isPending,
      } = useQuery({
        queryKey: ["getAllUser"],
        queryFn: getAllUser,
      });
      return [data,refetch,isPending]
}
export default GetAllUser