import React from "react";
import * as AiIcons from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import resume from './resume.pdf';

function LeftColumn() {
    return(
        <div className="left-column">
            <div className="me"/>
            <h1 className='name'>Ahmad Moltafet</h1>
            <PersonalInfo />
            <div className="social-icons">
                <IconContext.Provider value={{size: '1.5em', className: 'icon'}}>
                <a href="https://www.linkedin.com/in/ahmad-moltafet-b8a8b8a4/"><AiIcons.AiFillLinkedin/></a>
                    <AiIcons.AiFillGithub />
                </IconContext.Provider>    
                <div className="line"/>
            </div>    
        </div>
    );
}

function PersonalInfo() {
    return(
        <div className="personal-info">
            <button className="button"
            onClick={() => {
                window.open(resume, '_blank'); }}>
            Resume</button>
            <button className="button"
                
            >Contact Me</button>
            <h5>email: moltafet.ahmad2015@gmail.com</h5>
            <h5>phone: (509) 992-9504</h5>
        </div>
);            
}

export default LeftColumn;