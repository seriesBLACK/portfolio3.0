import Header from './components/Header'
import { FloatingNav } from './components/FloatingNav';
import Hero from './sections/Hero';
import About from './sections/About';
// import ProjectsSec from './sections/ProjectsSec';
import TechStack from './sections/TechStack';

export default function App() {

  return (
    <div>

      {window.innerWidth >= 750 ? (<Header />) : (<FloatingNav />)}
      <Hero />
      <About />
      <TechStack />
      {/* <ProjectsSec /> */}
      {/* <section>Tech Stack</section>
      <section>Projects</section>
      <footer></footer> */}

    </div>
  )
}
