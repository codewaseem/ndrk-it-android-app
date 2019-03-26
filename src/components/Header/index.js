import React, { Component } from 'react';
import "./style.css";
import logo from "../../logo.png";
import { IonToolbar, IonTitle, IonHeader, IonButton, IonButtons, IonIcon } from '@ionic/react';
class Header extends Component {

    state = {
        isMainPage: false
    }


    render() {
        return (
            <IonHeader>
                <IonToolbar color="dark">
                    {
                        !this.state.isMainPage && (
                            <IonButtons slot="start">
                                <IonButton>
                                    <IonIcon name="arrow-back" />
                                </IonButton>
                            </IonButtons>
                        )
                    }
                    <header className="main-header">
                        {
                            this.state.isMainPage &&
                            <img className="logo" src={logo}></img>

                        }
                        <IonTitle className="title">{this.props.title ? this.props.title : "N.D.R.K"}</IonTitle>
                    </header>
                </IonToolbar>
            </IonHeader>
        )
    }
}

export default Header;