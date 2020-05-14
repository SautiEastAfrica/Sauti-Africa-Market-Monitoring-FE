import React from 'react';
// import styled from 'styled-components'
import {Link} from "react-router-dom"
import '../styles/navbar.css';

// const Navbar = styled.div `
// display:flex;
// justify-content:center;


// `

// const Nav = styled.div `

// margin:1rem 5rem;
// `
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
