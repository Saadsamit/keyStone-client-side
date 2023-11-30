import axios from 'axios';
// baseURL: 'http://localhost:5000/api/v1'
const axiosPublic = axios.create({
    baseURL: 'https://keystone-two.vercel.app/api/v1',
    
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;