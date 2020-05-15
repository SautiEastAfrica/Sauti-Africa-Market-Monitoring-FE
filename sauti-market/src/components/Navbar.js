import React from 'react';

import {Link} from "react-router-dom"
import '../styles/navbar.css';


const Navigation = () => {
  return (
    <nav>
     <div className = 'nav-links'>
       <Link to = "/">Home</Link>
       <Link to = "/About">About</Link> 
       <Link to = "/Contact">Contact</Link>
     </div>
    </nav>
  );
};

export default Navigation;
