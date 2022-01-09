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
                <a href="https://www.linkedin.com/in/ahmad-moltafet-b8a8b8a4/"><AiIcons.AiFillLinkedin className="icon"/></a>
                    <AiIcons.AiFillGithub  className="icon"/>
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
            <p className="info">moltafet.ahmad2015@gmail.com</p>
            <p className="info1">(509) 992-9504</p>
        </div>
);            
}

export default LeftColumn;