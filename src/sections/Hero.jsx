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
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
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


    <section className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AW talal</motion.h2>
          <motion.h1 variants={textVariants}>FRONT-END Web developer</motion.h1>
          <p className="text-xl font-[Melodrama-Bold]">Minimum price websites that work</p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        // variants={sliderVariants}
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
