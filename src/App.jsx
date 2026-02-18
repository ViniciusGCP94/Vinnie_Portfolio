import './App.css'
import About from './components/sections/AboutHome/About.jsx'
import ProjectCard from './components/Projects/ProjectCard.jsx'
import Home from './pages/Homepage/Home.jsx'
import Contact from './components/sections/Forms/ContactForm.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><ProjectCard /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </>
  )
}
export default App