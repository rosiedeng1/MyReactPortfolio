
//     import '../index.css'

// const Footer = () => { 
//   return ( 
//     <footer className="footer"> 
//       <div className="container"> 
//         <div className="row"> 
//           <div className="col-md-6"> 
//             {/* <p>© 2023 Geek. All rights reserved.</p>  */}
//           </div> 
//           <div className="col-md-6 text-md-right"> 
//             <ul className="social-icons list-unstyled"> 
//               <li> 
//                 <a  
// href="https://www.linkedin.com/in/rosie-deng-2b71a9122/" target="_blank" rel="noopener noreferrer"> 
//                   {/* <FontAwesomeIcon icon={faLinkedin} />  */}
//                 </a> 
//               </li> 
//               <li> 
//                 <a href= 
// "https://github.com/rosiedeng1" target="_blank" rel="noopener noreferrer"> 
//                   {/* <FontAwesomeIcon icon={faGithub} />  */}
//                 </a> 
//               </li> 
//             </ul> 
//           </div> 
//         </div> 
//       </div> 
//     </footer> 
//   ); 
// }; 
  
// export default Footer;

const Footer = () => {
    return (
      <footer>
         <li>
  <a href='https://www.linkedin.com/in/rosie-deng-2b71a9122/' className='footer text-white'>
  Linkedin Profile
   </a >
   </li>,
   <li>
  <a href='https://github.com/rosiedeng1' className='footer text-white'>
  Github Profile
   </a>
   </li>,
      </footer>
    );
  };
  
  export default Footer;