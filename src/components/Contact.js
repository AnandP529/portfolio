import React from "react";

class Contact extends React.Component {
    state = {
        submitted: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
    };

    render() {
        if (this.state.submitted) {
            return (
                <div className="p-4 text-center text-white" style={{ backgroundColor: "#000" }}>
                    <h3 className="text-primary">Thank you for contacting me!</h3>
                    <p>I'll get back to you soon.</p>
                </div>
            );
        }

        return (
            <div className="p-4" style={{ backgroundColor: "#000" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="card" style={{ backgroundColor: "#000", color: "#fff" }}>
                                <div className="card-header text-center" style={{ backgroundColor: "#000" }}>
                                    <h3 className="text-primary">Get in Touch</h3>
                                    <p className="mb-0">
                                        Feel free to reach out for collaborations or just a friendly hello!
                                    </p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label className="form-label text-primary" htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control primary-input"
                                                /*placeholder="Your Name" */
                                                required
                                                style={{
                                                    backgroundColor: "#111",
                                                    color: "#fff",
                                                    borderColor: "#555",
                                                }}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className="form-label text-primary" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-control primary-input"
                                                /*placeholder="Phone Number" */
                                                required
                                                style={{
                                                    backgroundColor: "#111",
                                                    color: "#fff",
                                                    borderColor: "#555",
                                                }}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className="form-label text-primary" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control primary-input"
                                               /* placeholder="Email Address" */
                                                required
                                                style={{
                                                    backgroundColor: "#111",
                                                    color: "#fff",
                                                    borderColor: "#555",
                                                }}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className="form-label text-primary" htmlFor="message">
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="form-control primary-input"
                                                rows="4"
                                                /*placeholder="Your Message" */
                                                required
                                                style={{
                                                    backgroundColor: "#111",
                                                    color: "#fff",
                                                    borderColor: "#555",
                                                }}
                                            ></textarea>
                                        </div>

                                        <div className="d-grid text-center justify-content-center mb-3">
                                            <input
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                                value="Send Message"
                                            />
                                        </div>
                                    </form>
                                    <div className="mt-4 text-center">
                                        <h5 className="text-primary">Connect with me</h5>
                                        <div className="social-icons mt-2">
                                            <a
                                                href="https://www.linkedin.com/in/poorna-anandkumar-pedapati-017717271/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="me-3 text-white"
                                            >
                                                <i className="fab fa-linkedin fa-2x"></i>
                                            </a>
                                            <a
                                                href="https://github.com/AnandP529"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="me-3 text-white"
                                            >
                                                <i className="fab fa-github fa-2x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
