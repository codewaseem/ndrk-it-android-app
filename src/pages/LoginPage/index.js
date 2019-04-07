import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgLoginAvatar from "../../images/login_avatar.svg";
import { IonInput } from "@ionic/react";
import { FormItem, Form, FormButton, FormFooter, FormImage, FormIconLabel, DontHaveAnAccount } from "../../components/FormItems";
import { RoutesURL } from "../../staticData";
import { withChangedTitle, onlyNonUser, withUser, withNotify } from "../../context";
import { Link, Redirect } from "react-router-dom";
import { getUserHomeUrl } from "../../helpers";

class LoginPage extends Component {

    state = {
        email: "",
        password: ""
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        if (email && password) {
            await this.props.login(email, password);
        } else {
            this.props.notify("Invalid", "Please enter all details", "error");
        }
    }

    onChangeHandler = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        this.setState(() => {
            return {
                [fieldName]: fieldValue
            }
        });
    }

    render() {
        if (this.props.user) {
            return <Redirect to={getUserHomeUrl(this.props.user)} />
        }
        return (
            <CenteredPage>
                <FormImage src={imgLoginAvatar} alt={"Login"} />
                <Form onSubmit={this.onSubmitHandler} name="login">
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput onIonChange={this.onChangeHandler} required type="email" name="email" value={this.state.email} placeholder="Email"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput minlength={8} onIonChange={this.onChangeHandler} required name="password" value={this.state.password} placeholder="Password" type="password"></IonInput>
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

export default onlyNonUser(withNotify(withUser((withChangedTitle("Login")(LoginPage)))));