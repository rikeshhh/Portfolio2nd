import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const NavBar = () => {
  const data=[
    {
      id:1,
        to:'/',
        name:'Home',
    },
    {
      id:2,
        to:"Services",
        name:'Services',
    },
    {
      id:3,
        to:"Project",
        name:'Projects'
    },
    {
      id:4,
        to:'Experience',
        name:'Experience'
    },
    
] 
 return (
    <section className="font-semibold text-lg  border-black  p-4 text-white">
      <div className="main-container ">
         <div className="flex justify-between ">
          <Link to="/" className="italic font-Manrope font-bold drop-shadow-xl text-xl">Rikesh</Link>
          <nav className="max-sm:hidden">
            <ul className="flex gap-10">
           
           {data.map((item)=>
           <li key={item.id}>
  <NavLink 
                   style={({ isActive }) => ({ borderBottom: isActive ? "2px solid #e65624" : "white" })}
                to={item.to}>{item.name}</NavLink>
           </li>
           )}
            </ul>
          </nav>
          <nav className="lg:hidden">
            <Dropdown label="" dismissOnClick={false} className="bg-none">
              <Dropdown.Item>
                <Link to="/">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="Services">Services</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="Project">Project</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="Experience">Experience</Link>
              </Dropdown.Item>
            </Dropdown>
          </nav>
        </div>
       </div>
    </section>
  );
};

export default NavBar;
