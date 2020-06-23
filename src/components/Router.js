import React, { useContext } from 'react'; 
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'; 

// import Header from './Header'; 
import Login from './auth/Login'; 
import Logout from './auth/Logout'; 
import Register from './auth/Register'; 
import Product from './Product'; 
import PrivateRoute from './auth/PrivateRoute'; 
import Dashboard from './Dashboard'; 
import Profile from './Profile'; 

import { AppContext } from '../App'; 

import { Layout, Menu, Breadcrumb } from 'antd';

import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

function Router(){

    const app = useContext(AppContext);
    const { user } = app.state;

    return(
            <BrowserRouter>
                {/* <Header /> */}
                    <Layout className="layout">
                        <Header>
                        <div className="logo">
                            {/* <img src={require('../images/Sauti-logo-big.png')}/>  */}
                        </div>
                            { user ? (
                                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="/dashboard"><Link to='/dashboard'>Dashboard</Link></Menu.Item>
                                <Menu.Item key="/product"><Link to='/product'>Product</Link></Menu.Item>
                                <Menu.Item key="/profile"><Link to='/profile'>Profile</Link></Menu.Item>
                                <Menu.Item key="/logout"><Link to='/logout'>Logout</Link></Menu.Item>
                                </Menu>
                            ) : ( 
                                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="/login"><Link to='/login'>Login</Link></Menu.Item>
                                <Menu.Item key="/register"><Link to='/register'>Register</Link></Menu.Item>
                                </Menu>
                            )}
                        </Header>

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
                            <Route exact path="/product" component={Product}/>
                            <Route path="/product/:category/:country/:market/:product" component={Product}/>
                            <Redirect to="/dashboard" />
                        </Switch>
                    </PrivateRoute>
                </Switch>
                <Footer style={{ textAlign: 'center' }}>Market Monitoring ©2020 Created by Sauti Africa</Footer>
            </Layout>
            </BrowserRouter>
        ); 
    }; 

export default Router; 