import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Dashboard = () => {
  const cilentNav = (
    <>
      <li>
        <NavLink to={'/Wishlist'} className={'text-xl flex justify-center capitalize'}>Wishlist</NavLink>
      </li>
      <li>
        <NavLink to={'/My-reviews'} className={'text-xl flex justify-center capitalize'}>My reviews</NavLink>
      </li>
      <li>
        <NavLink to={'/Property-bought'} className={'text-xl flex justify-center capitalize'}>my Property</NavLink>
      </li>
      <li>
        <NavLink to={'/My-Profile'} className={'text-xl flex justify-center capitalize'}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div id="navBar" className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost m-5 md:hidden">
          <FiMenu className="text-3xl text-[#1F8A70]" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:w-80 sm:w-1/2 w-full min-h-full bg-[#D7FBE8] text-[#1F8A70]">
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
          {cilentNav}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
