import SkillName from "./SkillName";
import Doughnuts from "./Doughnut";
const Comnbin = () => {
  return (
    <section className="relative text-center skill__background_image w-full ">
    <div className="absolute bottom-0 left-0 grid grid-cols-3 ball">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
    </div>
  <div className="absolute top-0 right-0 h-16 w-16 ballTwo">
  <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
<div className="w-12 h-12 bg-purple-400 rounded-full"></div>
  </div>
      <div className="main-container">
        <h2 className="text-4xl font-black p-4 text-blue-700">My skills</h2>
        <div className="flex max-sm:flex-col gap-8 justify-center items-center">
          <Doughnuts />
          <SkillName />
        </div>
      </div>
    </section>
  );
};

export default Comnbin;
