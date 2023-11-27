import { NavLink } from "react-router-dom";


const AgentNavLink = () => {
    return (
        <>
        <li>
          <NavLink
            to={"/Dashboard/My-added-properties"}
            className={"text-xl flex justify-center capitalize"}
          >
            My added properties
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/add-new-propertie"}
            className={"text-xl flex justify-center capitalize"}
          >
            add new propertie
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/My-sold-properties"}
            className={"text-xl flex justify-center capitalize"}
          >
           My sold properties
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Dashboard/Requested-properties"}
            className={"text-xl flex justify-center capitalize"}
          >
            Requested properties
          </NavLink>
        </li>
      </>
    );
};

export default AgentNavLink;