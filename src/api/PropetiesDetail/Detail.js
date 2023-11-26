import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const Detail = (id)=>{
    const axios = useAxiosPrivate();
    const detailData = async () => {
        const { data } = await axios(`/Properties/${id}`);
        return data;
      };
      const { data={},isPending } = useQuery({
        queryKey: ["Detail-Data"],
        queryFn: detailData,
      });
      return[data,isPending]
}
export default Detail