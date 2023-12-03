import { Link } from "react-router-dom";
import { FaHome,FaRegAddressCard } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" bg-[#2E2E47] flex flex-col justify-center text-white items-center h-screen font-Poppins text-lg">
      <div className="flex">
        <ul>
          <li className="flex justify-center items-center gap-4">
              <FaHome />
            <Link to="">
              Home
            </Link>
          </li>
          <li className="flex justify-center items-center gap-4">
          <FaRegAddressCard />
            <Link to="About">About</Link>
          </li>
          <li className="flex justify-center items-center gap-4">
          <Link to=""></Link>
          </li>
          <li className="flex justify-center items-center gap-4">
            <Link to=""></Link>
          </li>
          <li className="flex justify-center items-center gap-4">
            <Link to=""></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
