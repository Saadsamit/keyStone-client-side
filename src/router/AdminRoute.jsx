import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useRole from "../api/useRole";
import Loading from "../components/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(myAuthProvider);
  const [role, isPending] = useRole("admin");
  const location = useLocation();
  if (loading || isPending) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  if (!role) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
