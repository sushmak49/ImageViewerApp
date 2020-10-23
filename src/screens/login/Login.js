import React, { Component } from 'react';
import '../login/Login.css';
import Typography from '@material-ui/core/Typography';


class Login extends Component {

    render() {
        return (
            <div>
                <div className="header-component">
                    <Typography className="header-logo">
                        Image Viewer
                </Typography>
                </div>
            </div>
        )
    }
}

export default Login;