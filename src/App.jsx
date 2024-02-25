import Header from './components/Header'
import { FloatingNav } from './components/FloatingNav';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {

  return (
    <>

      {window.innerWidth >= 750 ? (<Header />) : (<FloatingNav />)}
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  )
}
