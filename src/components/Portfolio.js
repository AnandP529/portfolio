import React, {Fragment} from "react";
import Anandpicture from "../assets/images/Anandpicture.jpg";

class Portfolio extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container bg-black mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="mb-3 text-primary">Hi, I'm</h2>
                            <h3 className="mb-2 fw-bold text-primary">Poorna AnandKumar Pedapati</h3>
                            <h4 className="text-primary">Front-End Developer</h4>
                            <p className="text-primary">Aspiring Froent-End Developer with expertise in JavaScript, React.js, and Redux.
                                Passionate about building scalable, user-friendly web applications and eager to contribute to innovative
                                projects while enhancing my skills.</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                                <div className="card-body text-center">
                                    <img
                                        src={Anandpicture}
                                        alt="Poorna AnandKumar"
                                        className="profile-img"
                                    />
                                </div>
                        </div>
                        <div className="social-icons">
                            <a
                                href="http://www.gmail.com"
                                target="_blank"
                                className="me-3"
                            >
                                <i className="fas fa-envelope fa-2x text-secondary"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/poorna-anandkumar-pedapati-017717271/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-3"
                            >
                                <i className="fab fa-linkedin fa-2x text-info"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-3"
                            >
                                <i className="fab fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/im_anand_vihari/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-3"
                            >
                                <i className="fab fa-instagram fa-2x text-danger"></i>
                            </a>

                        </div>

                    </div>
                </div>


            </React.Fragment>
        );
    }
}
export default Portfolio;