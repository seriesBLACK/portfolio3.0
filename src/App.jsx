import Header from './components/Header'
import { FloatingNav } from './components/FloatingNav';
import Hero from './sections/Hero';

export default function App() {

  return (
    <div>

      {window.innerWidth >= 750 ? (<Header />) : (<FloatingNav />)}
      <Hero />
      {/* <section>About</section>
      <section>Tech Stack</section>
      <section>Projects</section>
      <footer></footer> */}

    </div>
  )
}
