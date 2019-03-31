import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgLoginAvatar from "../../images/login_avatar.svg";
import { IonInput, IonLabel, IonIcon } from "@ionic/react";
import { FormItem, Form, FormButton, FormFooter, FormImage, FormIconLabel } from "../../components/FormItems";

class LoginPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgLoginAvatar} alt={"Login"} />
                <Form name="login">
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput placeholder="Email"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput placeholder="Password" type="password"></IonInput>
                    </FormItem>
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