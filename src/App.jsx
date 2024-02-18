import Header from './components/Header'
import { FloatingNav } from './components/FloatingNav';

export default function App() {

  return (
    <div>
      <header>
        {window.innerWidth >= 750 ? (<Header />) : (
          <div className='phone'>

            <FloatingNav />
          </div>
        )}

      </header>
      <section>Hero</section>
      <section>About</section>
      <section>Tech Stack</section>
      <section>Projects</section>
      <footer></footer>
    </div>
  )
}
