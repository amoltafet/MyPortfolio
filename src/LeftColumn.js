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
                <AiIcons.AiFillLinkedin className="icon"
                onClick={() => {
                    window.open('https://www.linkedin.com/in/ahmad-moltafet-63b7b619a/', '_blank');
                }}/>
                    <AiIcons.AiFillGithub  className="icon"
                    onClick={() => {
                        window.open('https://github.com/amoltafet', '_blank');
                    }}/>
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