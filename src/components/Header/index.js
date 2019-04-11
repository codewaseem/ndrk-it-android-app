import React, { Component } from 'react';
import "./style.css";
import { IonToolbar, IonTitle, IonHeader, IonButton, IonButtons, IonIcon } from '@ionic/react';
import { withRouter } from 'react-router';
import { TitleContext } from '../../context';
import { vibrate } from '../../helpers';


class Header extends Component {


    goBack = () => {
        vibrate();
        if(this.props.location.pathname === "/") {
            if(window.navigator && window.navigator.app) {
                window.navigator.app.exitApp();
            }
        } else {
            this.props.history.goBack();
        }
    }

    componentDidMount() {
        document.addEventListener("backbutton", this.goBack, false);
    }

    render() {
        return (
            <TitleContext.Consumer>
                {({ title }) => (
                    <IonHeader>
                        <IonToolbar color="dark">

                            <IonButtons slot="start">
                                <IonButton onClick={this.goBack}>
                                    <IonIcon name="arrow-back" />
                                </IonButton>
                            </IonButtons>

                            <header className="main-header">
                                <IonTitle style={{ visibility: "visible" }} className="title">{title}</IonTitle>
                            </header>
                        </IonToolbar>
                    </IonHeader>
                )}
            </TitleContext.Consumer>
        )
    }
}

export default withRouter(Header);