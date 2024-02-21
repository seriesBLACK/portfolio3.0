import Header from './components/Header'
import { FloatingNav } from './components/FloatingNav';
import Hero from './sections/Hero';
import About from './sections/About';

export default function App() {

  return (
    <div>

      {window.innerWidth >= 750 ? (<Header />) : (<FloatingNav />)}
      <Hero />
      <About />
      {/* <section>Tech Stack</section>
      <section>Projects</section>
      <footer></footer> */}

    </div>
  )
}
