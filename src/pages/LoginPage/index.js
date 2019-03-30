import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgLoginAvatar from "../../images/login_avatar.svg";
import { IonItem, IonInput, IonLabel, IonIcon } from "@ionic/react";
import { Form, FormButton, FormFooter, FormImage } from "../../components/FormItems";

class LoginPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgLoginAvatar} alt={"Login"} />
                <Form name="login">
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
                    <FormButton iconName="unlock" buttonText="Login" />
                </Form>
                <FormFooter>
                    <p>
                        Don't have an account?
                        <br />
                        <a>Sign Up</a> here.

                    </p>
                    <p>
                        Forgot Password?
                        <br />
                        <a>Reset</a> here.
                    </p>
                </FormFooter>
            </CenteredPage>
        );
    }
}

export default LoginPage;