import { NavLink } from "react-router-dom";


const AdminNavLink = () => {
    return (
        <>
        <li>
          <NavLink
            to={"/Dashboard/Manage-Properties"}
            className={"text-xl flex justify-center capitalize"}
          >
            Manage Properties
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/Advertise-property"}
            className={"text-xl flex justify-center capitalize"}
          >
            Advertise Property
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/Manage-Users"}
            className={"text-xl flex justify-center capitalize"}
          >
            Manage Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/Manage-reviews"}
            className={"text-xl flex justify-center capitalize"}
          >
            Manage reviews
          </NavLink>
        </li>
      </>
    );
};

export default AdminNavLink;