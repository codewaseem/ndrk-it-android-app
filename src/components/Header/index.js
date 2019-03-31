import React, { Component } from 'react';
import "./style.css";
import logo from "../../logo.png";
import { IonToolbar, IonTitle, IonHeader, IonButton, IonButtons, IonIcon } from '@ionic/react';
import { withRouter } from 'react-router';
import { TitleContext } from '../../context';


class Header extends Component {

    state = {
        isMainPage: false
    }

    goBack = () => {
        this.props.history.goBack();
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
                            {
                                !this.state.isMainPage && (
                                    <IonButtons slot="start">
                                        <IonButton onClick={this.goBack}>
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