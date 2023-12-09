import SkillName from "./SkillName";
import Doughnuts from "./Doughnut";

const Comnbin = () => {
  return (
    <section className="text-center">
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
