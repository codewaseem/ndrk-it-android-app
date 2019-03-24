import React, { Component } from 'react';
import "./style.css";
import logo from "../../logo.png";
class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <img className="logo" src={logo}></img>
                <h1>N.D.R.K</h1>
            </header>
        )
    }
 }

 export default Header;