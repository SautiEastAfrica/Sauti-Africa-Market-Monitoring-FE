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
                    <Link to="/">Market Monitoring - for Sauti Africa</Link>
                </h1>
                <div>
                    { user ? (
                        <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Logout</Link>
                        </>
                    ) : ( 
                        <> 
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    ); 
}; 

export default Header; 