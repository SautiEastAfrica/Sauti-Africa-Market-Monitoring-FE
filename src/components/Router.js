import React from 'react'; 
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 

import Header from './Header'; 
import Login from './auth/Login'; 
import Logout from './auth/Logout'; 
import Register from './auth/Register'; 
import Product from './Product'; 
import Home from './Home'; 

import PrivateRoute from './auth/PrivateRoute'; 
import Dashboard from './Dashboard'; 
import Profile from './Profile'; 

function Router(){
return(
        <BrowserRouter>
            <Header />
            <Switch>
                {/* unauthenticated */}
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/" component={Login}/>
                {/* <Route exact path="/" component={Home}/> */}
                {/* authenticated */}
                <PrivateRoute>
                    <Switch>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/product" component={Product}/>
                        <Redirect to="/dashboard" />
                    </Switch>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    ); 
}; 

export default Router; 