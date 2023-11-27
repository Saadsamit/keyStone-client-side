import { NavLink } from "react-router-dom";


const CilentNavLink = () => {
    return (
        <>
        <li>
          <NavLink
            to={"/Dashboard/Wishlist"}
            className={"text-xl flex justify-center capitalize"}
          >
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/Property-bought"}
            className={"text-xl flex justify-center capitalize"}
          >
            my Propertys
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/My-reviews"}
            className={"text-xl flex justify-center capitalize"}
          >
            My reviews
          </NavLink>
        </li>
      </>
    );
};

export default CilentNavLink;