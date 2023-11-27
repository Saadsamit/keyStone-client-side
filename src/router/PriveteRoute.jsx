import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";

const PriveteRoute = ({ children }) => {
  const { user, loading } = useContext(myAuthProvider);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  return children;
};
PriveteRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PriveteRoute;
