// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Nav() {
  // The Navigation UI component will render each of the Link elements in the links prop
  return (
    <Navigation
      links={[
        // <Link key={1} className="nav-link text-light" to="/">
        //   Home
        // </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Me
        </Link>,
             <Link key={2} className="nav-link text-light" to="/about">
            Portfolio
           </Link>,
                  <Link key={2} className="nav-link text-light" to="/about">
                 Contact
                 </Link>,
                      <Link key={2} className="nav-link text-light" to="/about">
                      Resume
                      </Link>,
           
      ]}
    />
  );
}
