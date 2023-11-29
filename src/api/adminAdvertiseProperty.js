import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const AdminAdvertiseProperty = ()=>{
    const axios = useAxiosPrivate();
    const AdvertiseProperty = async () => {
        const { data } = await axios('/adminAdvertiseProperty');
        return data;
      };
      const {
        data = [],
        refetch,
        isPending,
      } = useQuery({
        queryKey: ["AdvertiseProperty"],
        queryFn: AdvertiseProperty,
      });
      return [data,refetch,isPending]
}
export default AdminAdvertiseProperty