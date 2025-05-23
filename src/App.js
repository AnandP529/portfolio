import './App.css';
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router basename="/portfollo">
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="/" className="navbar-brand bg-black">My Portfollo</a>
                </nav>
                <Portfolio />
                <div style={{ marginBottom: '100px' }} />
                <Skills />
                <InfoBox />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
