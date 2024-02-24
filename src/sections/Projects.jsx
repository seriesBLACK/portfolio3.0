import { useScroll, useSpring, motion, useTransform } from "framer-motion"
import "../css/projects.scss";
import { useRef } from "react";
import eureka from "/imgs/Eureka.png";
import twitter from "/imgs/twitter.png";
import mern from "/imgs/mern.png";
import ytmate from "/imgs/ytmate.png";
import { IconBrandReact, IconBrandFirebase, IconBrandNextjs, IconBrandTailwind, IconBrandGithub, IconBrandMongodb, IconBrandNodejs, IconEmphasis, IconBrandPython, IconBrandJavascript } from "@tabler/icons-react"



const items = [
  {
    id: 1,
    title: "Eureka",
    img: eureka,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://eureka-bice.vercel.app/",
    icon: [<IconBrandFirebase className="h-10 w-10 stroke-[0.5px] mr-1" />, "Firebase", <IconBrandReact className="h-10 w-10 stroke-[0.5px] ml-4 mr-1" />, "React"],
    git: "https://github.com/seriesBLACK/Eureka-Real-Estate",
  },
  {
    id: 2,
    title: "twitter-clone",
    img: twitter,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://twitter-clone-gigrv6a15-seriesblack.vercel.app/",
    icon: [<IconBrandNextjs className="h-10 w-10 stroke-[0.5px] mr-1" />, "Next.js", <IconBrandFirebase className="h-10 w-10 stroke-[0.5px] ml-4 mr-1" />, "Firebase", <IconBrandTailwind className="h-10 w-10 stroke-[0.5px] ml-4 mr-1 fill-current" />, "TailwindCss"],
    git: "https://github.com/seriesBLACK/twitter-clone",
  },
  {
    id: 3,
    title: "Mern-Auth Demo",
    img: mern,
    desc: "This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It includes authentication features that allow users to sign up, log in, and log out, and provides access to protected routes only for authenticated users.",
    link: "https://mern-app-7vci.onrender.com/",
    icon: [<IconBrandMongodb className="h-10 w-10 stroke-[0.5px]" />, <IconEmphasis className="h-11 w-11 stroke-[0.5px]" />, <IconBrandReact className="h-10 w-10 stroke-[0.5px]" />, <IconBrandNodejs className="h-10 w-10 stroke-[0.5px] mr-2" />, "Mern Stach", <IconBrandTailwind className="h-10 w-10 stroke-[0.5px] fill-current ml-4" />, "TailwindCss"],
    git: "https://github.com/seriesBLACK/auth-demo"
  },
  {
    id: 4,
    title: "YT Mate",
    img: ytmate,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    git: "https://github.com/seriesBLACK/YtMate",
    link: "https://ytmate.onrender.com",
    icon: [<IconBrandPython className="h-10 w-10 stroke-[0.5px] mr-1" />, "Python", <IconBrandJavascript className="h-10 w-10 stroke-[0.5px] mr-1 ml-4" />, "JavaScript"]
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="w-full">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <span className="flex items-center text-sm text-neutral-500">
              {item.icon}
            </span>

            <div className="flex items-center gap-12">

              <a href={item.link} className="w-[200px]">
                <button>Take a look</button>
              </a>

              <a href={item.git} >
                <IconBrandGithub className="h-8 w-8 fill-current text-white " />
              </a>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default function Projects() {
  const ref = useRef(null);


  const { scrollYProgress } = useScroll({
    target: ref
  });


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });


  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}
