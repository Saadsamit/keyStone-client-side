import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import { MdHomeWork } from "react-icons/md";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { myAuthProvider } from "../provider/AuthProvider";
const HeaderNav = () => {
  const location = useLocation()
  const {user,logoutUser} = useContext(myAuthProvider)
  const handleLogout = ()=>{
    logoutUser()
  }
  const links = (
    <>
      <li>
        <NavLink to={'/'} className={'text-[#0B666A] font-semibold'}>home</NavLink>
      </li>
      <li>
        <NavLink  to={'/All-properties'} className={'text-[#0B666A] font-semibold'}>All properties</NavLink>
      </li>
      <li>
        <NavLink  to={'/Dashboard'} className={'text-[#0B666A] font-semibold'}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#D7FBE8]">
      <Container>
        <div id="navBar" className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#0B666A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 capitalize z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1"
              >
                {links}
              </ul>
            </div>
            <a href="/">
              <p className="sm:text-3xl text-lg flex items-center font-Ubuntu font-bold text-[#1F8A70]">
                <MdHomeWork className="text-4xl sm:block hidden" /> KeyStone
              </p>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-[#00425A] menu menu-horizontal px-1 gap-4 capitalize text-lg">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? (
                <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <CgProfile className="text-2xl"></CgProfile>
                  </div>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
              ) : location.pathname === '/login' ?  <Link to={'/Registration'} className="btnStyle">Registration</Link> : <Link to={'/login'} className="btnStyle">login</Link>
            }
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderNav;
