import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom"


const Navbar = styled.div `
display:flex;
justify-content:center;


`

const Nav = styled.div `

margin:1rem 5rem;
`
const Navigation = () => {
  return (
    <div>
         
      <Navbar>
       
        <Nav>
          <Link to = "/">Home</Link>
        </Nav>
        <Nav>
       <Link to = "/About">About</Link>
        </Nav>
        <Nav>
    <Link to = "/Contact">Contact</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
