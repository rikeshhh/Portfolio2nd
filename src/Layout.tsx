import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./component/Header/NavBar";
import Footer from "./component/Footer/Footer";
const Layout = () => {
  return (
    <>
      <header className="absolute z-40 w-full border-b-2 border-[#ffffff1a] py-6">
        <NavBar/>
      </header>
      <main className="hero__background__image text-white">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
