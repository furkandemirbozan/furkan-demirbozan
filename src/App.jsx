import './App.css'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Project from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {

  return (
    <div className="grid-container">
      <div className="grid-item">
        <Hero />
      </div>
      <div className="grid-item">
        <Project />
      </div>
      <div className="grid-item">
        <Skills />
      </div>
      {/* <div className="grid-item">
        <Contact />
      </div> */}
      <div className="grid-item">
        <Footer />
      </div>
    </div>
  )
}

export default App
