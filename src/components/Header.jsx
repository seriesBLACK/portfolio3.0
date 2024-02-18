import aw from "../../public/imgs/aw.png"
import "../css/header.css"

export default function Header() {
  return (
    <div className="header">
      <img src={aw} alt="logo" className="header-img" />
      <nav class="navBar">
        <a class="anker" href="">About/</a>
        <a class="anker" href="">Tech Stack /</a>
        <a class="anker" href="">Projects</a>
      </nav>
      <button className="contact_btn">Contact</button>
    </div>
  )
}
//Minimum price websites that work