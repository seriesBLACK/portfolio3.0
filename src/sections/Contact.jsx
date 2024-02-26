import { useRef, useState } from "react";
import "../css/contact.css";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandMailgun, IconBrandWhatsapp } from "@tabler/icons-react";



const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ok2f66h",
      "template_cv4rlww",
      formRef.current,
      "EaUyL-OqsontocfNy"
    )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };


  const pathVariant = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: isInView ? 1 : 0,
      transition: {
        duration: 2
      }
    }
  }

  const arrowVariant = {
    initail: {
      y: -10
    },
    animate: {
      y: isInView && 0,
      transition: {
        duration: 1,
      },
    }
  }


  return (
    <section
      id="contactSec"
      ref={ref}
      className="flex w-full relative"
    >


      <div id="contactTextContainer" className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[80%] max-sm:w-[100%] max-sm:text-center flex flex-col gap-2">
          <h1 id="contact_header" className="text-[4rem] max-sm:text-[2rem] font-bold">Let&apos;s work together</h1>
          <div className="flex items-center gap-2 justify-center">
            <h2 className="text-3xl max-sm:text-xl font-mono">Mail</h2>
            <span className="text-sm text-gray-400">aw.webdevelop@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <h2 className="text-3xl max-sm:text-xl font-mono">Address</h2>
            <span className="text-sm text-gray-400">Yemen/Aden</span>
          </div>
          <div className="flex items-center gap-2 justify-center" >
            <h2 className="text-3xl max-sm:text-xl font-mono">Phone</h2>
            <span className="text-sm text-gray-400">+967 780755885</span>
          </div>
        </div>
      </div>


      <div id="contactFormContainer" className="w-[50%] h-full flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute z-[-1]">
          <svg className="z-[-1] max-sm:w-[300px] max-sm:h-[300px] stroke-[0.2px]" width="500px" height="500px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144"></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path variants={arrowVariant} initial="initail" animate="animate" d="M12 2V9L14 7" stroke="#f97316" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></motion.path>
              <motion.path variants={arrowVariant} initial="initail" animate="animate" d="M12 9L10 7" stroke="#f97316" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></motion.path>
              <motion.path variants={pathVariant} initial="initial" animate="animate" d="M7 4.12988C3.46 4.64988 2 6.72988 2 10.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V10.9999C22 6.72988 20.54 4.64988 17 4.12988" stroke="#f97316" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></motion.path>
              <motion.path variants={pathVariant} initial="initial" animate="animate" d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98" stroke="#f97316" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></motion.path>
            </g>
          </svg>
        </motion.div>


        <motion.form
          className="flex flex-col gap-5 w-[80%] z-2"
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <input className="bg-transparent border-[1px] border-white p-3 rounded-lg" type="text" required placeholder="Name" name="name" />
          <input className="bg-transparent border-[1px] border-white p-3 rounded-lg" type="email" required placeholder="Email" name="email" />
          <textarea className="bg-transparent border-[1px] border-white rounded-lg p-2" rows={4} placeholder="Message" name="message" />
          <button className="bg-orange-500 p-5 max-sm:p-2 max-sm:text-sm border-none rounded-lg text-xl cursor-pointer">Send</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>


      <div className="flex absolute bottom-0 left-0 right-0 h-[10%] flex-col items-center">
        <div className="flex gap-2">
          <a href="https://www.facebook.com/abood.2337">
            <IconBrandFacebook className=" cursor-pointer hover:scale-110 w-9 h-9 p-1" />
          </a>
          <a href="https://github.com/seriesBLACK/">
            <IconBrandGithub className=" cursor-pointer hover:scale-110 w-9 h-9 p-1" />
          </a>
          <a href="https://wa.me/967780755885">
            <IconBrandWhatsapp className=" cursor-pointer hover:scale-110 w-9 h-9 p-1" />
          </a>
          <a href="mailto: aw.webdevelop@gmail.com">
            <IconBrandGoogle className=" cursor-pointer hover:scale-110 text-3xl w-9 h-9 p-1" />
          </a>
        </div>
        <div className="bg-gray-700 w-[50%] h-[1px]"></div>
      </div>

    </section>
  );
};

export default Contact;