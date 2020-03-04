import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../resumeData';

class Contact extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            <h1>
                <Fade bottom cascade> Contact.</Fade>
            </h1>
            <div className='contact-content'>
                <h1>
                Let’s create your next<br></br>
                <span className='amazing-color'>experience together</span></h1>
                <ul className="contact-list">
                    <li><a href={`mailto:${data.contactEmail}`} className='email'><i className="far fa-envelope"/></a></li>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}><i className={`${link.facode}`}/></a></li>
                    ))}
                </ul>
            </div>
        </div>
        )
    }
}
 
export default Contact;