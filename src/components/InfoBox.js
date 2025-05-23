import React, { Component, Fragment } from "react";

class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: "Ultimate Vacations",
                    description:
                        "A simple Vacation website created using React. It offers a modern UI, interactive cards, and smooth navigation built with React Router and MDBootstrap.",
                    link: "https://anandp529.github.io/vacation-website/",
                },
                {
                    title: "Brains-Kart Application",
                    description:
                        "Brains-Kart is an e-commerce web application offering a seamless shopping experience for Gents, Ladies, and Kids. It features user authentication, dynamic product listings, cart management, and secure checkout.",
                    link: "#",
                },
                {
                    title: "Movie Ticket Application",
                    description:
                        "A user-friendly movie ticket booking app that allows users to browse movies, select showtimes, choose seats, and make secure payments—all in one seamless experience.",
                    link: "#",
                },
            ],
        };
    }

    render() {
        return (
            <Fragment>
                <div className="portfolio" id="portfolio">
                    <h2 className="heading text-primary">
                        <span>Latest Projects</span>
                    </h2>
                    <div className="portfolio-container">
                        {this.state.projects.map((project, index) => (
                            <div className="portfolio-box" key={index}>
                                <div className="portfolio-layer">
                                    <h4 className="text-primary">{project.title}</h4>
                                    <p className="text-white">{project.description}</p>
                                    <div className="text-center mt-auto">
                                        <a
                                            href={project.link}
                                            className="btn btn-primary rounded-pill px-5 mt-4"
                                            target="_blank"
                                            rel="noreferrer"
                                            role="button"
                                        >
                                            Open
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProjectsSection;
