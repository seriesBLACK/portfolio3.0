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
      image: js,
      name: "Java Script",
    },

    {
      image: next,
      name: "Next Js",
    },
    {
      image: python,
      name: "Python",
    },
    {
      image: _react,
      name: "React",
    },
    {
      image: flask,
      name: "",
    },
    {
      image: redux,
      name: "",
    },
    {
      image: mongondb,
      name: "",
    },
    {
      image: firebase,
      name: "Firebase",
    },
    {
      image: node,
      name: "NodeJs",
    },
    {
      image: html,
      name: "Html",
    },
    {
      image: css,
      name: "Css",
    },
    {
      image: tailwind,
      name: "Tailwind",
    },
  ];


  return (
    <section className='w-full h-[100vh] bg-gradient-to-b from-[#0c0c1d] to-[#111132]'>
      <h1 className='text-center font-[Melodrama-Bold] text-[4rem] max-sm:text-[2rem]'>Tech Stack</h1>
      <div className="flex justify-start items-center">
        <div className='w-[20%] h-[1px] bg-[#545050] max-sm:hidden'></div>
        <p className='text-gray-500 max-sm:hidden'>I&apos;ve gathered plenti of skills <br />  over the past few years here&apos;s some.</p>
      </div>

      <div className="card_coantiner">
        {cards.map((card) => (
          <div key={cards.name} className="card">
            <img src={card.image} alt="techImage" />
            <h3>{card.name}</h3>
          </div>
        ))}

      </div>
    </section>
  )
}

