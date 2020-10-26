import React, { Component } from 'react';
import './Header.css';
import Search from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { IconButton } from '@material-ui/core';
import ProfileImage from '../../assets/profile-pic.jpg';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: sessionStorage.getItem('access-token') == null ? false : true,
        }
    }
    render() {
        return (
            <div>
                <div className="header-component">
                    <div className="header-logo">
                        Image Viewer
                    </div>

                    {
                        this.state.loggedIn === true ?
                            (
                                <div className="header-right">
                                    <div className="search-box">
                                        <Search />
                                        <InputBase
                                            className="search-input"
                                            placeholder="Search..."
                                        />
                                    </div>
                                     <div>
                                         <IconButton>
                                             <img src={ProfileImage} alt="S" style={{ width: 40, height: 40, borderRadius: 50 }} />
                                         </IconButton>
                                     </div>
                                </div>
                    
                     )
                     :""
                }

            </div>
            </div>
        )
    }
}

export default Header;