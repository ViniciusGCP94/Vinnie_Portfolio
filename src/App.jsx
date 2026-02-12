import { Suspense, lazy } from 'react';
import './App.css'
import Home from './pages/Homepage/Home.jsx'

const About = lazy(() => import('./components/sections/AboutHome/About.jsx'));
const ProjectCard = lazy(() => import('./components/Projects/ProjectCard.jsx'));
const Contact = lazy(() => import('./components/sections/Forms/ContactForm.jsx'));

function App() {

  return (
    <>
      <Home />
      <Suspense fallback={<div className="bg-black h-20" />}></Suspense>
      <About />
      <ProjectCard />
      <Contact />
    </>
  )
}

export default App
