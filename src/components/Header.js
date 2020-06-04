import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom'; 

import '../styles/Header.scss'; 

import { AppContext } from '../App'; 

function Header(props){

    const app = useContext(AppContext);
    const { user } = app.state;

    return(
        <header className="top">
            <nav>
                <h1 className="title">
                    <Link to="/">SAUTI AFRICA - Market Monitoring</Link>
                </h1>
                <div>
                    { user ? (
                        <>
                        {/* <Link to="/">HOME</Link> */}
                        <Link to="/dashboard">DASHBOARD</Link>
                        {/* <Link to="/product">PRODUCT</Link> */}
                        <Link to="/profile">PROFILE</Link>
                        <Link to="/logout">LOGOUT</Link>
                        </>
                    ) : ( 
                        <> 
                        {/* <Link to="/">HOME</Link> */} 
                        <Link to="/login">LOGIN</Link>
                        <Link to="/register">REGISTER</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    ); 
}; 

export default Header; 