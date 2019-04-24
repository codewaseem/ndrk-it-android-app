import React, { Component } from 'react';
import "./style.css";
import { IonToolbar, IonTitle, IonHeader, IonButton, IonButtons, IonIcon } from '@ionic/react';
import { withRouter } from 'react-router';
import { vibrate } from '../../helpers';
import { connect } from 'react-redux';


class Header extends Component {


    goBack = () => {
        vibrate();
        if (this.props.location.pathname === "/") {
            if (window.navigator && window.navigator.app) {
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
            <IonHeader>
                <IonToolbar color="dark">

                    {this.props.location.pathname !== "/" &&
                        <IonButtons slot="start">
                            <IonButton onClick={this.goBack}>
                                <IonIcon name="arrow-back" />
                            </IonButton>
                        </IonButtons>
                    }

                    <header className="main-header">
                        <IonTitle style={{ visibility: "visible" }} className="title">{this.props.appTitle}</IonTitle>
                    </header>
                </IonToolbar>
            </IonHeader>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        appTitle: state.ui.appTitle
    }
}

export default connect(mapStateToProps)(withRouter(Header));