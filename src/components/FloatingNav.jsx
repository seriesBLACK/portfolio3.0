import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";



export const FloatingNav = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome />
    },
    {
      name: "About",
      link: "#about",
      icon: <IconMessage />
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconUser />
    }
  ]


  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - scrollYProgress.getPrevious();


    if (direction > 0) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  });
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: 10
        }}
        animate={{
          y: visible ? 10 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="floatingNav"
      >
        {navItems.map((navItem, idx) => (
          <div
            onClick={() => window.scrollTo({ top: navItem.link, behavior: 'smooth' })}
            key={idx}
            href={navItem.link}
            className="navItems"
          >
            <span>{navItem.icon}</span>

          </div>
        ))}

      </motion.div>
    </AnimatePresence>
  );
};

//className={"relative p-1 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"}
//        className={"flex max-w-[300px]  border-2 border-blue-700  fixed top-3 inset-x-0 mx-auto dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2  items-center justify-center space-x-3"}
