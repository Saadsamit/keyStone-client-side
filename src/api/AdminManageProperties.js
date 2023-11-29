import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const AdminManageProperties = ()=>{
    const axios = useAxiosPrivate();
    const adminManageProperties = async () => {
        const { data } = await axios(`/Manage-all-Properties`);
        return data;
      };
      const {
        data = [],
        refetch,
        isPending,
      } = useQuery({
        queryKey: ["adminManageProperties"],
        queryFn: adminManageProperties,
      });
      return [data,isPending,refetch]
}
export default AdminManageProperties