import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const AllProperties = (search)=>{
    const axios = useAxiosPrivate();
    const properties = async () => {
        const { data } = await axios(`/Properties?search=${search}`);
        return data;
      };
      const {
        data = [],
        refetch,
        isPending,
      } = useQuery({
        queryKey: ["properties"],
        queryFn: properties,
      });
      return [data,refetch,isPending]
}
export default AllProperties