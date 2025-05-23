import React, {Fragment} from "react";

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="p-3 text-primary text-center mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Copyright &copy;2025,@Anand</h3>
                                <p>All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;