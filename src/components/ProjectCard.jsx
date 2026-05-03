import '../styles/ProjectCard.css'

function ProjectCard({ title, desc, image }) {
    return (
        <div className='project-card'>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}
export default ProjectCard;