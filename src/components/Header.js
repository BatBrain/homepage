import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../resumeData';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>CREATIVE</h1>
            <header>
                <h1>
                    <Fade bottom cascade>
                    </Fade>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                            <text x="20" y="50" fontFamily="plaster">{data.name}</text>
                        </svg>
                </h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;