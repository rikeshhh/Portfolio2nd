import HeroAside from "./HeroImage";
import { motion } from "framer-motion";
const HeroSection = () => {
  const words = "Rikesh Shrestha";
  const letters = words.split("");
  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };
  return (
    <section className="HeroSection py-16 hero__background__image">
      <div className="main-container ">
        <div className="flex  flex-col gap-8 relative">
          <HeroAside />
          <div className="flex justify-center items-center font-black flex-col text-4xl gap-10 text-center">
          <div className="flex">
          {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
          </div>
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
