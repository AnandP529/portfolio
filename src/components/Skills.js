import React from "react";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
    const skills = [
        {
            icon: <FaCode size={40} className="icon-color" />,
            title: "Programming Languages",
            description:
                "I am proficient in popular programming languages used for modern development.",
            list: ["C", "Core Java","JavaScript"]
        },
        {
            icon: <FaTools size={40} className="icon-color" />,
            title: "Frontend Development",
            description:
                "I build beautiful, responsive, and interactive user interfaces using modern tools.",
            list: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js","Redux"]
        },
        {
            icon: <FaDatabase size={40} className="icon-color" />,
            title: "Backend Development",
            description:
                "I design and build scalable backend systems and RESTful APIs.",
            list: ["Node.js", "Express.js", "MongoDB","MYSQL"]
        }
    ];

    return (
        <React.Fragment>
            <div className="skills-section py-5">
                <h2 className="text-center text-white mb-5">
                    <span className="text-primary">My Skills</span>
                </h2>
                <div className="container">
                    <div className="row justify-content-center g-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card skill-card h-100 p-4">
                                    <div className="text-center mb-3">{skill.icon}</div>
                                    <h4 className="text-center text-primary">{skill.title}</h4>
                                    <p className="text-center text-white small">{skill.description}</p>
                                    <ul className="text-center list-unstyled text-white small">
                                        {skill.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="text-center mt-auto">
                                        <button className="btn btn-primary rounded-pill px-4 mt-3">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Skills;
