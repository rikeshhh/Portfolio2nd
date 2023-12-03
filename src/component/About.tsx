import { motion } from "framer-motion";

const About = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
    initial="hidden"
    className="w-96"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    <motion.h1
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      About me
    </motion.h1>
    <motion.p
      className="mt-6 text-left md:text-2xl text-"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
            Hello! I'm Rikesh Shrestha, a budding Frontend Developer with a passion for creating beautiful and functional web experiences. I bring a solid foundation in HTML, CSS, JavaScript and React, and I'm eager to learn, grow, and contribute to  innovative projects. Let's collaborate to build the web of the future!.
    </motion.p>
  </motion.div>
  );
};

export default About;
