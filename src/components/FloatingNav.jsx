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
      link: "hero",
      icon: <IconHome />
    },
    {
      link: "about",
      icon: <IconMessage />
    },
    {
      link: "projects",
      icon: <IconUser />
    },
  ]


  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - scrollYProgress.getPrevious();


    if (scrollYProgress.get() < 0.05) {
      setVisible(false);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <div className="phone">


      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4"

        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={`#${navItem.link}`}
              className={
                "relative  backdrop-blur dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              }
            >
              <span className="block sm:hidden">{navItem.icon}</span>
            </a>
          ))}
          <a href={'#contactSec'} className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Contact</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
