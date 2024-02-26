import { useRef } from "react";
import "../css/about.css";
import scroll from "/imgs/scroll.png"
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);


  return (
    <section id="about" className="w-full h-[100vh] bg-gradient-to-b from-[#111132] to-[#0c0c1d] flex flex-col items-center justify-center">
      <h1 className="text-[3rem] max-sm:hidden">About</h1>
      <motion.div ref={ref} id="aboutSec" className="size-[75%] grid grid-cols-3 gap-4">
        <motion.div id="first-col" initial={{
          x: -500
        }}
          animate={{
            x: inView && 0,
            transition: {
              duration: 0.5,

            }
          }}
          className="bg-black shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg col-start-1 col-span-2 max-sm:h-[259px]">
          <h2 id="first-col-h2" className="font-bold text-3xl max-sm:text-2lg m-5">About me:</h2>
          <p id="first-col-p" className="font-mono max-sm:text-sm m-5">I&apos;m Abd ul Walee Talal a 23 years old junior graduate from Unversity of Aden with a mechatronics bachelor degree based in Yemen/Aden,
            I started codeing four years ago when I knew that I can get all the data from a website without having to go trough all of It&apos;s pages, so I started with python for easy scraping, and that was the start of my journey !
            I injoyed coding and It become a hobby and from then I kept learning more and more skills.
          </p>
        </motion.div>
        <motion.div
          id="second-col"
          initial={{
            x: 500
          }}
          animate={{
            x: inView && 0,
            transition: {
              duration: 1,
              stiffness: 100
            }
          }}
          className="bg-[#ffffffa6] shadow-[3px_3px_3px_3px_rgba(109,40,217)] rounded-lg row-span-2">
          <h2 id="second-col-h2" className="font-bold text-3xl max-sm:text-lg m-5 text-black">What I can do:</h2>
          <p id="second-col-p" className="font-mono m-5 text-black max-sm:text-sg">well I can do alot of things, mainly making websites. I can make a website with react, nextjs or even vanilla js as fast as possible.
            or for a modren websites mren-stach is the way to go now a days nothing that I can&apos;t do. I can help you with an existing website or making one from the ground up all for the least price you can find. <br />
            "make it work, make it right, make it fast".

          </p>

        </motion.div>


        <motion.div
          id="third-col"
          initial={{
            y: 500
          }}
          animate={{
            y: inView && 0,
            transition: {
              duration: 1.5,
              stiffness: 100
            }
          }}

          className="bg-[#8b4513] flex flex-col justify-center shadow-[3px_3px_3px_0px_rgba(109,40,217)] rounded-lg col-end-2">
          <h2 id="third-col-h2" className="font-bold text-3xl max-sm:text-lg max-md:text-lg m-5">Take a look at some noteworthy projects</h2>
          <motion.img
            animate={{
              y: 10,

              transition: {
                duration: 1.5,
                repeat: Infinity
              }
            }}

            className="mx-auto w-[59px] max-sm:w-12" src={scroll} alt="" />
        </motion.div>
      </motion.div>
    </section>
  )
}

