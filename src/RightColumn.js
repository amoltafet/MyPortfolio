import React from "react";
import Skills from "./Skills";
import Portfolio from './components/Portfolio';
import Work from "./components/Work";
import {Row, Col} from 'react-bootstrap';
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";

function RightColumn() {
    return(
        <div className="right-column">
            <Hero/>
            <Education/>
            <Skills/>
            <Portfolio/>
            <Work/>
        </div>
    );
}

function Education() {
    return(
        <div className="education">
            <h1 className="title">Education</h1>
            <div className="edu-card">
                <Row>
                    <Col>
                        <h2>Gonzaga University</h2>
                        <h3>B.S. in Computer Science</h3>
                        <h5>Relevant Course Work</h5>
                        <ul>
                            <li><h5>Fundamentals of Computer Programming</h5></li>
                            <li><h5>Data Structures and Algorithms</h5></li>
                            <li><h5>Object Oriented Programming</h5></li>
                            <li><h5>Software Engineering</h5></li>
                            <li><h5>Database Systems</h5></li>
                            <li><h5>Operating Systems</h5></li>
                            <li><h5>Android Developmen</h5></li>
                        </ul>
                    </Col>
                    <Col>
                        <img src={require('./img/work/gonzaga.jpeg')} alt="gonzaga" className="company-logo"
                            style={{
                                marginLeft: "1em",
                                marginTop: "4em",
                            }}
                        />
                    </Col>
                </Row>
                
            </div>
        </div>    
    )
}




export default RightColumn;