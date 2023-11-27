import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../api/useRole";
import CilentNavLink from "../components/CilentNavLink";
import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import AgentNavLink from "../components/AgentNavLink";
import AdminNavLink from "../components/AdminNavLink";
const Dashboard = () => {
  const { logoutUser } = useContext(myAuthProvider);
  const client = useRole("client");
  const agent = useRole("agent");
  const admin = useRole("admin");
  return (
    <div id="navBar" className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
      <label htmlFor="my-drawer" className="btn btn-ghost sm:m-5 m-2 md:hidden">
          <FiMenu className="text-3xl text-[#1F8A70]" />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:w-80 sm:w-1/2 w-full justify-between min-h-full bg-[#D7FBE8] text-[#1F8A70]">
          <div className="flex flex-col gap-4">
            <div className="md:hidden">
              <label htmlFor="my-drawer" className="btn btn-ghost">
                <FaXmark className="text-3xl text-[#1F8A70]" />
              </label>
            </div>
            <Link to="/" className="btn btn-ghost">
              <p className="sm:text-3xl text-lg flex items-center font-Ubuntu font-bold text-[#1F8A70]">
                <MdHomeWork className="text-4xl" /> KeyStone
              </p>
            </Link>
            {client[0] && <CilentNavLink />}
            {agent[0] && <AgentNavLink />}
            {admin[0] && <AdminNavLink />}
            <li>
              <NavLink
                to={"/Dashboard/My-Profile"}
                className={"text-xl flex justify-center capitalize"}
              >
                {client[0] && "My Profile"}
                {agent[0] && "agent Profile"}
                {admin[0] && "admin Profile"}
              </NavLink>
            </li>
          </div>
          <button onClick={logoutUser} className="btnStyle">
            logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
