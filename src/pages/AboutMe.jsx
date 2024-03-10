import Photo from '../assets/Photo.png';

// This is a static page mocking an "About Me" section about myself 
export default function AboutMe(props) {
    return (
<div>
    <img src={Photo} alt="main-photo" className="photo float-left"></img>
            <p className="aboutme">
            Hi everyone. My name is Rosie and I'm currently enrolled in the Fullstack Bootcamp program :) I live in Brooklyn, NY and am working for a specialty pharmacy. This is my profile, I hope you can take a look and enjoy to see the projects that I have worked on! 
        </p>
        </div>
    );
  }

