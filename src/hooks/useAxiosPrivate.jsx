import axios from "axios";
//   baseURL: "http://localhost:5000/api/v1",
const axiosPrivate = axios.create({
  baseURL: 'https://keystone-two.vercel.app/api/v1',
  withCredentials: true,
});
const useAxiosPrivate = () => {
  return axiosPrivate;
};
export default useAxiosPrivate;
