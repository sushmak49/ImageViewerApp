import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-component">
                    <div className="header-logo">
                        Image Viewer
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;