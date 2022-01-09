import React from "react";
import {Row, Col} from 'react-bootstrap'
import guic from '../img/guic.png';

const portfolio = [
    {
        title: 'Gonzaga Investment Club Website',
        image: guic,
        description: 'React JS, Framer',
        date: '2 Jan, 2022',
        liveDemo: 'Live Demo',
        github: 'Github'
    },
    {
        title: 'Student Registration Website',
        image: guic,
        description: 'React JS, Framer',
        date: '2 Jan, 2022',
        liveDemo: 'https://gonzaga-investment-club.herokuapp.com/',
        github: 'Github'
    },
    

];



function Portfolio() {
    return (
      <>
        <div className="portfolio">
            <h1 className="title">Portfolio</h1>
                <Row >
                {portfolio.map(project => (
                    <Col>
                        <div className="project-card">
                            <img src={project.image} alt="project-img" className="project-img"/>
                            <h4>{project.title}</h4>
                            <div className="horizontal-line"/>
                            <p>{project.description}</p>
                            <p>{project.date}</p>
                            <Row>
                                <button className="btn-project" href={project.liveDemo}>Live Demo</button>
                                <button className="btn-project">Github</button>
                            </Row>
                        </div>
                    </Col>    
                ))}
            </Row>
            
        </div>
      </>
    );
}
  

export default Portfolio;
