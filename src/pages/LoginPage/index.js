import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgLoginAvatar from "../../images/login_avatar.svg";
import { IonInput } from "@ionic/react";
import { FormItem, Form, FormButton, FormFooter, FormImage, FormIconLabel, DontHaveAnAccount } from "../../components/FormItems";
import { Link } from "react-router-dom";
import { RoutesURL } from "../../staticData";
import { withChangedTitle } from "../../context";

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
                    <DontHaveAnAccount />
                    <br />
                    <p>
                        Forgot Password?
                        <br />
                        <Link to={RoutesURL.PASSWORD_RESET}>Reset</Link> here.
                    </p>
                </FormFooter>
            </CenteredPage>
        );
    }
}

export default withChangedTitle("Login")(LoginPage);