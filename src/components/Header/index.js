import React, { Component } from 'react';
import "./style.css";
import logo from "../../logo.png";
import { IonToolbar, IonTitle, IonHeader } from '@ionic/react';
class Header extends Component {
    render() {
        return (
            <IonHeader>
                <IonToolbar color="dark">
                    <header className="main-header">
                        <img className="logo" src={logo}></img>
                        <IonTitle className="title">N.D.R.K</IonTitle>
                    </header>
                </IonToolbar>
            </IonHeader>
        )
    }
}

export default Header;