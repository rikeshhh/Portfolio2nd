
const NavBar = () => {
  return (
    <section className="font-semibold text-lg  border-black  p-4 border-b-2">
    <div className="main-container flex justify-between items-center">
    <h2>Rikesh</h2>
    <nav className="">
     
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Skills</li>
      </ul>
    </nav>
    </div>
    </section>
  );
};

export default NavBar;
