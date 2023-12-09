import penguin from './port.jpg'
const HeroAside = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 ">
  <div className="w-80 max-sm:w-52 rounded-full bg-slate-500 ">
<figure className='w-72  h-72 max-sm:w-48 max-sm:h-48 rounded-full  overflow-hidden'>
  <img src={penguin} alt=""  className='bg-contain'/>
</figure>
  </div>
    </section>
  );
};

    
export default HeroAside;
