import useAxiosPrivate from '../hooks/useAxiosPrivate';
const NewUser = (currentUser)=>{
    const axiosPrivate = useAxiosPrivate()
    const data = {name: currentUser?.displayName,email:currentUser?.email,image: currentUser?.photoURL}
    return axiosPrivate.post('/newUser',data)
}
export default NewUser