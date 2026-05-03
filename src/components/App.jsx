import '../styles/App.css';
import { useState } from 'react';
import projectData from '../data/projects';
import Navbar from './Navbar';
import About from './About';
import Form from './Form';
import ProjectList from './ProjectList';
import Footer from './Footer';

function App() {
  const [projects,setProjects] = useState(projectData)

  //combines the original static array of projects with the ones being dynamically added
  const handleProjects = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
  }

  return (
    <>
    <Navbar />
    <About />

    {/* passing the function handleProjects as a prop to be the callback function */}
    <Form onAddProject={handleProjects}/>
    
    <ProjectList projects={projects} />
    <Footer />
    </>
  )
}

export default App
