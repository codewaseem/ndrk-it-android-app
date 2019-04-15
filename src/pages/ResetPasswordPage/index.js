import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { loginAvatar as imgLoginAvatar } from "../../staticData";
import { IonInput } from "@ionic/react";
import { FormItem, Form, FormButton, FormFooter, FormImage, FormIconLabel, DontHaveAnAccount } from "../../components/FormItems";
import { withChangedTitle, onlyNonUser, withUser } from "../../context";
import { Redirect } from "react-router-dom";
import { getUserHomeUrl } from "../../helpers";

class ResetPasswordPage extends Component {

    state = {
        email: "",
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        let { email } = this.state;
        if (email) {
            await this.props.resetPassword(email);
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
                <Form onSubmit={this.onSubmitHandler} name="password_reset">
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput onIonChange={this.onChangeHandler} required type="email" name="email" value={this.state.email} placeholder="Email"></IonInput>
                    </FormItem>
                    <FormButton iconName="unlock" buttonText="Request Password Reset" />
                </Form>
            </CenteredPage>
        );
    }
}

export default onlyNonUser(withUser((withChangedTitle("Password Reset")(ResetPasswordPage))));