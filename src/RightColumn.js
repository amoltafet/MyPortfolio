import React from "react";
import Skills from "./Skills";
import Portfolio from './components/Portfolio';
import Work from "./components/Work";
import {Row, Col} from 'react-bootstrap';
import Hero from "./components/Hero";

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
                        <h3>Gonzaga University</h3>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <h4>Relevant Course Work</h4>
                        <ul>
                            <li>Fundamentals of Computer Programming</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Object Oriented Programming</li>
                            <li>Software Engineering</li>
                            <li>Database Systems</li>
                            <li>Operating Systems</li>
                            <li>Android Developmen</li>
                        </ul>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                
            </div>
        </div>    
    )
}




export default RightColumn;