import aw from "/imgs/aw.png"
import "../css/header.css"
import { IconBrandFacebook, IconBrandGithub, IconBrandMailgun, IconBrandWhatsapp } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="header">
      <img src={aw} alt="logo" className="header-img" />
      <nav className="navBar">
        <a className="anker" href="">About/</a>
        <a className="anker" href="">Tech Stack /</a>
        <a className="anker" href="">Projects</a>
      </nav>
      <div className="flex gap-3 mr-8">
        <IconBrandFacebook className=" cursor-pointer hover:scale-110 rounded-full bg-blue-700 w-9 h-9 p-1" />
        <IconBrandGithub className=" cursor-pointer hover:scale-110 rounded-full bg-black w-9 h-9 p-1" />
        <IconBrandWhatsapp className=" cursor-pointer hover:scale-110 rounded-full bg-green-700 w-9 h-9 p-1" />
        <IconBrandMailgun className=" cursor-pointer hover:scale-110 rounded-full bg-red-700 text-3xl w-9 h-9 p-1" />

      </div>
    </header>
  )
}
