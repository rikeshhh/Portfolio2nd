import { useState } from "react";
import { CiLinkedin, CiFacebook, CiMenuBurger } from "react-icons/ci";
const NavBar = () => {
  const [openNav,setOpenNav]=useState(false)

  return (
    <nav className="flex justify-between font-Poppins font-normal text-lg max-sm:justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-b-4 border-indigo-500 p-3">
      <div className="flex justify-between items-center gap-16 max-sm:hidden">
        <div>Rikesh Shrestha</div>
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Testinomial</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end gap-4 text-lg ">
        <button>
          <CiLinkedin />
        </button>
        <button>
          <CiFacebook />
        </button>
        <button onClick={()=>setOpenNav(true)}>
          <CiMenuBurger />
        </button>
      </div>
      {openNav && <section className=""></section>}

    </nav>
  );
};

export default NavBar;
