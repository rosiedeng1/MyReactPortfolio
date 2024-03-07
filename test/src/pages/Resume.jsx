import Header from "../components/Header.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import { Link } from 'react-router-dom';

// This is a static page mocking a "Resume" section about myself 
export default function Resume() {
    return (
        <>
        <Header></Header>
        <Nav></Nav>
        <p>
{/* <a href="Resume.png.pdf" target="_blank" rel="noreferrer"> */}
{/* Here is my resume :)
    </a> */}
  <Link to="/assets/Resume.png.pdf" target="_blank" download>Download</Link>
        </p>
        <Footer></Footer>

        </>
    );
  }