import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const IsExistUser = ({children}) => {
    const {user,loading} = useContext(myAuthProvider)
    const location = useLocation()
    if(loading){
        return children
    }
    if(user){
        return <Navigate to={location.state ? location.state : '/'} replace/>
    }
    return children
};
IsExistUser.propTypes={
    children: PropTypes.node.isRequired
}
export default IsExistUser;