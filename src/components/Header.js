import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../resumeData';
import {ReactComponent as Logo} from '../logoOnly.svg';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>CREATIVE</h1>
            <header>
                <h1>
                    <Fade bottom cascade>
                        {data.name}
                    </Fade>
                </h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <a class="button" href="https://calendly.com/sol-ferguson/30-minute-interview">Schedule a Call</a>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;