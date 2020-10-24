import React, { Component } from 'react';
import '../login/Login.css';
import Typography from '@material-ui/core/Typography';
import { CardContent, FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            incorrectInput: 'dispNone',
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
        let access_token = 'IGQVJYNmxrT2MwQmwzaHNheWNJZADAyaFZAhVmczWDFuMGZAKLTlUVjdFNHNTa1RJeFlRM3I1bVZApajd2X2ZAHTm55eDJ0RGRVS1h4ZAVBBdDJyam5ZAUm4yUWRpOHNncnpNaEo5ekw4WnBQRzBpZAWNGTEFLcm1LNlA1dTVKZAUxr';

        username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });

        if (username!=="" && password!=="") {
            if(username==="user" && password==="passwd") {
                console.log('you can login');
                sessionStorage.setItem('access-token',access_token);
                this.setState({incorrectInput:"dispNone"});
            }else {
                this.setState({incorrectInput:"dispBlock"});
            }
        }     
    }

    render() {
        return (
            <div>
                <div className="header-component">
                    <Typography className="header-logo">
                        Image Viewer
                </Typography>
                </div>
                <div className="login-card-container">
                    <Card>
                        <CardContent className="card-content">
                            <Typography variant="headline" component="h2">
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