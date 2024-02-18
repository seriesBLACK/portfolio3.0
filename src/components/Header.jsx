import aw from "/imgs/blackAw.png"
import "../css/header.css"

export default function Header() {
  return (
    <div className="header">
      <img src={aw} alt="logo" className="header-img" />
      <nav className="navBar">
        <a className="anker" href="">About/</a>
        <a className="anker" href="">Tech Stack /</a>
        <a className="anker" href="">Projects</a>
      </nav>
      <button className="contact_btn">Contact</button>
    </div>
  )
}
//Minimum price websites that work