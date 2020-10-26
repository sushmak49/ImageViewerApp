import React, { Component } from 'react';
import '../login/Login.css';
import Typography from '@material-ui/core/Typography';
import { CardContent, FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Header from '../../common/header/Header.js';
import ReactDOM from 'react-dom';
import Home from '../home/Home.js';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            incorrectInput: 'dispNone',
            accessToken : 'IGQVJVenRwbzBaWHRrb1l3RGJTQW1FOTZAiZAllzb1RBTzR4SW5KWUJUa21FZA3NLOHd3UFZANY0ZAORW80M1VXSndMMGZAweVRnWlgxR3AzaU5RSG1UNXhJeVpzZATUyNHVCOUZAQYmg1dko2NlBtd3dXSWc3MG5LaGhfLVVaUnEw',
            userInput: {
                username : 'user',
                password : 'passwd',
            },
            loggedIn : sessionStorage.getItem('access-token')==null?false:true,
        }
    }

    inputUsernameChangeHandler = (event) => {
        this.setState({username:event.target.value});
    }

    inputPasswordChangeHandler = (event) => {
        this.setState({password:event.target.value});
    }

    loginClickHandler = () => {

        let username =  this.state.username;
        let password = this.state.password;
        let accessToken = this.state.accessToken;

        username === "" ? this.setState({ usernameRequired: "dispBlock",incorrectInput: "dispNone"}) : this.setState({ usernameRequired: "dispNone" });
        password === "" ? this.setState({ passwordRequired: "dispBlock",incorrectInput: "dispNone"}) : this.setState({ passwordRequired: "dispNone" });

        if (username!=="" && password!=="") {
            if(username === this.state.userInput.username && password === this.state.userInput.password) {
                sessionStorage.setItem('access-token',accessToken);
                this.setState({loggedIn : true});
                this.setState({incorrectInput:"dispNone"});
                //Take user to HomePage
                this.redirectToHomePage();
            }else {
                this.setState({incorrectInput:"dispBlock"});
            }
        }     
    }

    redirectToHomePage = () => {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Card className="login-card-container">
                        <CardContent className="card-content">
                            <Typography variant="h4" component="h2">
                                LOGIN
                            </Typography>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" className="form-input" username={this.state.username} type="text" onChange={this.inputUsernameChangeHandler}></Input>
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" className="form-input" password={this.state.password} type="password" onChange={this.inputPasswordChangeHandler}></Input>
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormHelperText className={this.state.incorrectInput}><span className="red">Incorrect username and/or password</span></FormHelperText>
                            <br/>
                            <Button
                                className="login-btn"
                                variant="contained"
                                color="primary"
                                onClick={this.loginClickHandler}
                            >
                                LOGIN
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;