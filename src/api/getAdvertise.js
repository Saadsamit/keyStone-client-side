import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const GetAdvertise = ()=>{
    const axios = useAxiosPrivate();
    const getAdvertise = async () => {
        const { data } = await axios('/getAdvertise');
        return data;
      };
      const {
        data = [],
        isPending,
      } = useQuery({
        queryKey: ["getAdvertise"],
        queryFn: getAdvertise,
      });
      return [data,isPending]
}
export default GetAdvertise