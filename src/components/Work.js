import React from "react";
import {Row, Col} from 'react-bootstrap'

const jobs = [
    {
        title: 'Lead Manager',
        company: 'NWC Investments',
        date: 'July, 2018 - October, 2020',
        img: require('../img/work/nwc.png'),
        description: 'Work with investors in calculating their financial goals and present solutions to their problems. Present and track records of real estate rental properties and other types of investments. Evaluate current and future value of investments'
    },
    {
        title: 'SEAS Assistant',
        company: 'Gonzaga University',
        date: 'September, 2021 - May, 2022',
        img: require('../img/work/gonzaga.jpeg'),
        description: 'Build & rebuild computer systems as needed. Diagnose and troubleshoot issues with computer systems. Perform clerical duties in support of the department. Assist professors in development and implementation of experiments'
    },
    {
        title: 'Web Developer',
        company: 'LatteDaa Coffee',
        date: 'February, 2019 - May, 2019',
        img: require('../img/work/latte.jpeg'),
        description: 'Design, code and modify the website, from layout to function and according to a clients specifications. Strive to create visually appealing site that feature user-friendly design and clear navigation'
    },
    {
        title: 'Real Estate Broker',
        company: 'Synergy Properties',
        date: 'July, 2019 - October, 2021',
        img: require('../img/work/synergy.png'),
        description: 'Findnewleadsandconvertthemintobuyers or sellers. Help clients purchase or sell properties. Advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process of buying, selling, or leasing properties.'
    }    
];


function Work() {
    return(
        <div className="work">
            <h1 className="title">Work History</h1>
            {jobs.map(job => (
                <div className="job-card">
                    <Row>
                        <Col>
                            <img src={job.img} alt="company-logo" className="company-logo"/>
                        </Col>
                        <Col>
                            <h2>{job.title}</h2>
                            <h4>{job.company}</h4>
                            <h5>{job.date}</h5>
                            <p>{job.description}</p>
                        </Col>
                    </Row>
                    
                </div>    
            ))}        
        </div>    
    )
}


export default Work;