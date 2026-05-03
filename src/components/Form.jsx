import { useState } from "react";
import '../styles/Form.css'

function Form({onAddProject}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState('');

    //handles form submission, the data is stored in newProject and then passed as argument to the callback function and finally saved with the rest.
    const addProject = (e) => {
        e.preventDefault();

        //new project format
        const newProject = {
            id: Date.now(),
            title: title,
            image: image,
            description: description
        }

        onAddProject(newProject);

        //resets each state to empty
        setTitle('');
        setDescription('');
        setImage('');
    }

    return (
        <>
        <h2 style={{color: '#ea8594', paddingTop : '3rem', fontWeight: 600, textDecoration: 'underline', fontSize: '30px'}}>ADD PROJECT</h2>
        <form className="project-form" onSubmit={addProject}>
            <label>Project Title</label>
            <input type="text" value={title} placeholder='Enter title here...' onChange={(e) => setTitle(e.target.value)} required/>
            <label>Image URL</label>
            <input type="text" value={image} placeholder='Paste image URL here...' onChange={(e) => setImage(e.target.value)} required/>

            {/* Live image preview */}
            {image && (
                <img
                src={image}
                alt='preview'
                style={{ width: '100%', borderRadius: '8px', marginTop: '0.5rem' }}
                />
            )}

            <label>Description</label>
            <textarea value={description} placeholder="Describe your project here..." onChange={(e) => setDescription(e.target.value)} required/>
            <button type="submit">Add</button>
        </form>
        </>
    )
}
export default Form;