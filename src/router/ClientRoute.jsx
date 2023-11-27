import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Spiner from "../components/Spiner";
import useRole from "../api/getRole";
const ClientRoute = ({ children }) => {
    const { user, loading } = useContext(myAuthProvider);
    const [role,isPending] = useRole('client')
  const location = useLocation();
  if (loading || isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spiner isTrue={false} />
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  if (!role) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
ClientRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientRoute;