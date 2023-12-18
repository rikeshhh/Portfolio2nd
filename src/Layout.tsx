import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./component/Header/NavBar";
import Footer from "./component/Footer/Footer";
const Layout = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
