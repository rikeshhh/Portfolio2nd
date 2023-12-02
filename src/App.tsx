import './App.css'
import NavBar from './NavBar'
import HeroSection from './component/HeroSection'
function App() {

  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main className='flex justify-center items-center flex-col h-screen'>
      <HeroSection/>
    </main>
    <footer></footer>
    </>
  )
}

export default App
