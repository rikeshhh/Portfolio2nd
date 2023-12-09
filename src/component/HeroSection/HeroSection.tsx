import HeroAside from "./HeroImage";

const HeroSection = () => {

  return (
    <section className="HeroSection py-16">
      <div className="main-container">
        <div className="flex  flex-col gap-8">
          <HeroAside />
          <div className="flex justify-center items-center font-black flex-col text-4xl gap-10 text-center">
            <h1>Rikesh Shrestha</h1>
            <span className="text-2xl text-blue-700">Frontend Developer</span>
            <div className="text-xl font-semibold text-[#C5C5C5] text-center">
              <p>
                Turning ideas into elegant and efficient digital solutions.
                Explore my work below or connect with me to discuss your next
                project
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 max-sm:flex-col">
            <button className="border rounded-full border-[#fff] p-2 bg-white text-black w-48">
              Get In Touch
            </button>
            <button className="border rounded-full border-[#fff] p-2  w-48 hover:bg-white hover:text-black">
              Download cv
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
