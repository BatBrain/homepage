import React, { Component } from 'react';
// import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../resumeData';

class Projects extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <h1 className='heading'>
            <Fade bottom cascade>Projects</Fade></h1>
            <div className='projects-content'>
                    {data.projects.map((project)=>(
                            <Fade bottom>
                                <div className='project' key={project.id}>
                                    <a href={project.url}>
                                        <img src={project.imageSrc} alt={project.title}></img>
                                    </a>
                                    <h1>{project.title}</h1>
                                    <span>{project.service}</span>
                                </div>
                            </Fade>
                    ))}
            </div>
        </div>  );
    }
}
 
export default Projects;