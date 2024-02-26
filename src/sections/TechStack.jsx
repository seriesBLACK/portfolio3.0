import "../css/techStack.css";
import js from "/imgs/js.png";
import python from "/imgs/python.png";
import _react from "/imgs/react.png";
import flask from "/imgs/flask.png";
import html from "/imgs/html.png";
import css from "/imgs/css.png";
import node from "/imgs/node.svg";
import mongondb from "/imgs/mongondb.png";
import redux from "/imgs/redux.png";
import firebase from "/imgs/firebase.png";
import tailwind from "/imgs/tailwind.png";
import next from "/imgs/next.svg";

export default function TechStack() {
  const cards = [

    {
      id: 1,
      image: js,
      name: "Java Script",
    },

    {
      id: 2,
      image: next,
      name: "Next Js",
    },
    {
      id: 3,
      image: python,
      name: "Python",
    },
    {
      id: 4,
      image: _react,
      name: "React",
    },
    {
      id: 5,
      image: flask,
      name: "",
    },
    {
      id: 6,
      image: redux,
      name: "",
    },
    {
      id: 7,
      image: mongondb,
      name: "",
    },
    {
      id: 8,
      image: firebase,
      name: "Firebase",
    },
    {
      id: 9,
      image: node,
      name: "NodeJs",
    },
    {
      id: 10,
      image: html,
      name: "Html",
    },
    {
      id: 11,
      image: css,
      name: "Css",
    },
    {
      id: 12,
      image: tailwind,
      name: "Tailwind",
    },
  ];


  return (
    <section id="tech" className='w-full h-[100vh] bg-gradient-to-b from-[#0c0c1d] to-[#111132]'>
      <h1 className='text-center font-[Melodrama-Bold] text-[4rem] max-sm:text-[2rem]'>Tech Stack</h1>
      <div className="flex justify-start items-center">
        <div className='w-[20%] h-[1px] bg-[#545050] max-sm:hidden'></div>
        <p className='text-gray-500 max-sm:hidden'>I&apos;ve gathered plenti of skills <br />  over the past few years here&apos;s some.</p>
      </div>

      <div className="card_coantiner">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt="techImage" />
            <h3>{card.name}</h3>
          </div>
        ))}

      </div>
    </section>
  )
}

