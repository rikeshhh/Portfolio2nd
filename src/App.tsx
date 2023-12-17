import './App.css'
import Services from './Experience/Services'
import Experience from './component/Experience'
import HeroSection from './component/HeroSection/HeroSection'
import Project from './component/SkillProject/Project/Project'
import Comnbin from './component/SkillProject/Skill/Comnbin'
function App() {

  return (
    <>
  
    <div className='flex justify-center items-center flex-col  gap-40 '>
      <HeroSection/>
      <Services/>
      <Comnbin/>
      <Project/>
      <Experience/>
    </div>
    </>
  )
}

export default App
