import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import About from './component/About.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeroSection from './component/HeroSection.tsx'
const router=createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
