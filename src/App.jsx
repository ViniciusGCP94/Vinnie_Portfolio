import './App.css'
import About from './components/sections/AboutHome/About.jsx'
import ProjectCard from './components/Projects/ProjectCard.jsx'
import Home from './pages/Homepage/Home.jsx'
import Contact from './components/sections/Forms/ContactForm.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Home />
      <About />
      <ProjectCard />
      <Contact />
      <Footer />
    </>
  )
}
export default App