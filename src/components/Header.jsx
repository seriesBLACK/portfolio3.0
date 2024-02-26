import aw from "/imgs/aw.png"
import "../css/header.css"
import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandWhatsapp } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="header">
      <img src={aw} alt="logo" className="header-img" />
      <nav className="navBar">
        <a className="anker" href="#about">About/</a>
        <a className="anker" href="#tech">Tech Stack /</a>
        <a className="anker" href="#projects">Projects</a>
      </nav>
      <div className="flex items-start gap-3 mr-8">
        <a href="https://www.facebook.com/abood.2337">
          <IconBrandFacebook className=" cursor-pointer hover:scale-110 rounded-full bg-blue-700 w-9 h-9 p-1" />
        </a>
        <a href="https://github.com/seriesBLACK/">
          <IconBrandGithub className=" cursor-pointer hover:scale-110 rounded-full bg-black w-9 h-9 p-1" />
        </a>
        <a href="https://wa.me/967780755885">
          <IconBrandWhatsapp className=" cursor-pointer hover:scale-110 rounded-full bg-green-700 w-9 h-9 p-1" />
        </a>
        <a href="mailto: aw.webdevelop@gmail.com">
          <IconBrandGoogle className=" cursor-pointer hover:scale-110 rounded-full bg-red-700 text-3xl w-9 h-9 p-1" />
        </a>


      </div>
    </header>
  )
}
