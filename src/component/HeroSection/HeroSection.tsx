import HeroAside from "./HeroImage";

const HeroSection = () => {
  const downloadPort='portfolio.docx'

  return (
    <section className="HeroSection">
      <div className="main-container">
        <div className="flex  flex-col gap-8">
          <HeroAside />
          <div className="flex justify-center items-center font-black flex-col text-4xl gap-10">
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
          <div className="flex justify-center items-center gap-4">
            <button className="border rounded-md border-[#fff] p-2">
              Get In Touch
            </button>
            <button className="border rounded-md border-[#fff] p-2">
              Download cv
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
