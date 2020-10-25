import React,{ Component } from 'react';
import Login from './login/Login.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component{
    constructor(){
        super();
        this.baseUrl = "localhost:3000"
    }
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Route exact path="/" render={(props) => <Login {...props} baseUrl={this.baseUrl} />}></Route>
                </div>
            </Router>
        )
    }
}

export default Controller;