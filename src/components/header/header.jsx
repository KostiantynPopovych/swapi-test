import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import windowDimensions from 'react-window-dimensions';

import './header.scss';

import logo from '../../assets/img/icon.svg';

class Header extends Component {
    render () {
        return (
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container-iner">
                        <div className="navbar-container-iner-logo">
                            <Link to='/people'> 
                                <img src={logo} alt="Logo" /> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
};

export default windowDimensions()(Header);