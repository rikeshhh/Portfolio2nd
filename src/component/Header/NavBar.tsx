import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const NavBar = () => {
  return (
    <section className="font-semibold text-lg  border-black  p-4 border-b-2">
      <div className="main-container ">
        <div className="flex justify-between">
          <Link to="/">Rikesh</Link>
          <nav className="max-sm:hidden">
            <ul className="flex gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="Combine">Skills</Link>
              </li>
              <li>
                <Link to="Project">Project</Link>
              </li>
              <li>
                <Link to="Experience">Experience</Link>
              </li>
            </ul>
          </nav>
          <nav className="lg:hidden">
            <Dropdown label="" dismissOnClick={false} className="bg-none">
              <Dropdown.Item>
                <Link to="/">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="Combine">Skills</Link>
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
