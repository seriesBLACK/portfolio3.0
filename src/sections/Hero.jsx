import "../css/hero.scss";
import hero from "/imgs/hero.png"
import { motion } from "framer-motion"

export default function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },

  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (


    <section id="hero" className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}></motion.h2>
          <motion.h1 variants={textVariants}>Full-Stack Web developer</motion.h1>
          <p className="text-xl text-gray-500">Develope a minimum price websites that work</p>

          <motion.div variants={textVariants} className="buttons">
            <a href="#projects"><motion.button variants={textVariants}>See the Latest Works</motion.button></a>
            <a href="#contactSec"><motion.button variants={textVariants}>Contact Me</motion.button></a>
          </motion.div>


        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Write Creat Influence
      </motion.div>
      <div className="imageContainer">
        <img src={hero} alt="" />
      </div>
    </section>


  )
}
