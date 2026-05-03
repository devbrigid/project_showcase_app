import { useState} from 'react';
import ProjectCard from './ProjectCard';
import '../index.css';

function ProjectList ({projects}){
    //handles the text input by users
    const [inputs,setInputs] = useState("");

    //condition for filtering projects according to users search inputs
    const filteredProducts = inputs ? projects.filter((project) => project.title.toLowerCase().includes(inputs.toLowerCase())) : projects;

    const handleChange = (e) => {
        e.preventDefault();
        setInputs(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
   

    return (
        <div className='full-list'>
            <div className='search-box'>
                <input type='text' id='name' onChange={handleChange} value={inputs} placeholder='Search for projects...'
                style={{ padding: '0.5rem', borderRadius: '8px' }}
                />
                <button onSubmit={handleSubmit} 
                style={{ borderRadius: '8px', padding: '0.5rem 1rem' }}>
                    Search
                </button>
            </div>
            <div className='project-list' id='projects'>
                {filteredProducts.length === 0 ?
                (<p>Project not found.</p>) 
                : (filteredProducts.map((project) => (
                    <ProjectCard key={project.id} title={project.title} desc={project.description} image={project.image} />
                )))
                }
            </div>
        </div>
    )
}
export default ProjectList;