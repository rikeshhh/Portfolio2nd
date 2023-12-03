import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
 const Layout = () => {
  return (
    <div className='flex w-full text-white'>
    <header className='w-1/5'>
    <NavBar/>
    </header>
    <main className='flex justify-start items-center w-5/6 bg-[#3C3C5B] main-background pt-96px pl-132px'>
        <Outlet/>
    </main>
    <footer className='flex justify-center items-center w-16 p-2  flex-col text-4xl gap-4 bg-[#2E2E47]'>
<CiFacebook/>
<FaGithub/>
<CiLinkedin/>
    </footer>
    </div>
  )
}

export default Layout
