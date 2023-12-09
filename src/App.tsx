import './App.css'
import Experience from './component/Experience'
import HeroSection from './component/HeroSection/HeroSection'
import Project from './component/SkillProject/Project/Project'
import Comnbin from './component/SkillProject/Skill/Comnbin'
function App() {

  return (
    <>
  
    <div className='flex justify-center items-center flex-col main-container gap-40'>
      <HeroSection/>
      <Comnbin/>
      <Project/>
      <Experience/>
    </div>
    </>
  )
}

export default App
