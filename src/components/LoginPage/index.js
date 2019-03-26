import React, { Component } from 'react';
import "./style.css";
import imgLoginAvatar from "../../images/login_avatar.svg";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                <img className="login_avatar" src={imgLoginAvatar}>
                </img>
                <IonItem>
                    <IonLabel color="dark"><IonIcon name="mail" /></IonLabel>
                    <IonInput placeholder="Email"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="dark">
                        <IonIcon name="key" />
                    </IonLabel>
                    <IonInput placeholder="Password" type="password"></IonInput>
                </IonItem>
                <IonButton style={{ marginTop: "25px", width: "35%" }} color="dark" expand="block"><IonIcon color="light" name="unlock" style={{ marginRight: "5px" }} /> Login</IonButton>
                <p className="go-signup">
                    Don't have an account?
                    <br />
                    <a>Sign Up</a> here.
                    <br />
                    <br />
                    Forgot Password?
                    <br />
                    <a>Reset</a> here.
                </p>
            </div>
        );
    }
}

export default LoginPage;