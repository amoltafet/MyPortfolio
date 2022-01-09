import React from "react";
import SkillBar from 'react-skillbars';

const skills = [
    {
        "type": "React",
        "level": 87,
        "color": {
          "bar": "#f94144",
          
        }
      },
      {
        "type": "Java",
        "level": 80,
        "color": {
          "bar": "#f3722c"
        }
      },
      {
        "type": "Javascript",
        "level": 55,
        "color": {
          "bar": "#f8961e"
        }
      },
      {
        "type": "C/C++",
        "level": 65,
        "color": {
          "bar": "#f9844a"
        }
      },
      {
        "type": "HTML/CSS",
        "level": 75,
        "color": {
          "bar": "#f9c74f"
        }
      },
      {
        "type": "Python",
        "level": 30,
        "color": {
          "bar": "#90be6d" 
        }
      }
];


function Skills() {
    return(
        <div className="skills">
            <h1 className="title">Skills</h1>
            <SkillBar skills={skills} />
        </div>    
    )
}

export default Skills;