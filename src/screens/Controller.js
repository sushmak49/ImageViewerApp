import React,{ Component } from 'react';
import Login from './login/Login.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/home/Home.js';
import PrivateRoutes from '../common/PrivateRoutes.js';
import Profile from '../screens/profile/Profile.js';

class Controller extends Component{
    constructor(props){
        super(props);
        this.baseUrl = "localhost:3000/";
        this.state={
            loggedIn: sessionStorage.getItem('access-token')==null?false:true
        }
    }
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Route exact path="/" render={(props) => <Login {...props} baseUrl={this.baseUrl} />}></Route>
                    <PrivateRoutes exact path='/home' component={Home} baseUrl={this.baseUrl} />
                    <PrivateRoutes exact path='/profile' component={Profile} baseUrl={this.baseUrl} />
                </div>
            </Router>
        )
    }
}

export default Controller;