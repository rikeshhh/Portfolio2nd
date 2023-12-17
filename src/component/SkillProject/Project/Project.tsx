import ProjectData from './ProjectData'

const Project = () => {
  return (
    <section className='hero__background__image'>
    <div className="main-container">
    <div className='flex flex-col justify-center items-center '>
        <h2 className='font-semibold p-8  text-center text-4xl'>  My Project</h2>
      <ProjectData/>
        </div>   
    </div>
    </section>
  )
}

export default Project
