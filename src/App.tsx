import './App.css'
import Services from './Experience/Services'
import Experience from './component/Experience'
import HeroSection from './component/HeroSection/HeroSection'
import Project from './component/SkillProject/Project/Project'
import Comnbin from './component/SkillProject/Skill/Comnbin'
function App() {

  return (
    <>
  
    <main>
      <HeroSection/>
      <Services/>
      <Comnbin/>
      <Project/>
      <Experience/>
    </main>
    </>
  )
}

export default App
