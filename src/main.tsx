import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeroSection from './component/HeroSection/HeroSection.tsx'
import App from './App.tsx'
import Project from './component/SkillProject/Project/Project.tsx'
import Experience from './component/Experience.tsx'
import Services from './Experience/Services.tsx'
const router=createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
    {
      path:'',
      element:<App/>
    },
      {
        path: "Hero",
        element: <HeroSection />,
      },
      {
        path:"Services",
        element:<Services/>
      },
      {
        path:"Project",
        element:<Project/>
      },
      {
        path:'Experience',
        element:<Experience/>
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
