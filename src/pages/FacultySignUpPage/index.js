import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgFaculty from "../../images/lecturer.svg";
import imgBranch from "../../images/branch.svg";
import imgName from "../../images/name.svg";

import { IonInput, IonSelectOption } from "@ionic/react";
import { Form, FormButton, FormFooter, FormImage, FormImageLabel, SelectInput, FormItem, FormIconLabel, HaveAnAccount } from "../../components/FormItems";
// import { Link } from "react-router-dom";
// import { RoutesURL } from "../../staticData";
import { withChangedTitle, withUser, withNotify, onlyNonUser } from "../../context";
import { isValidEmail, isValidBranch } from "../../helpers";
import { Redirect } from "react-router";


class FacultySignUpPage extends Component {

    state = {
        name: "",
        branch: "",
        email: "",
        password: "",
        confirmPassword: ""

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

    onSubmitHandler = (e) => {
        e.preventDefault();
        let { email, branch, name, password, confirmPassword } = this.state;
        let errorCount = 0;
        if (!isValidEmail(email)) {
            this.props.notify("Invalid", "Email is invalid", "error");
            errorCount++;
        }
        if (!isValidBranch(branch)) {
            this.props.notify("Invalid", "Branch is invalid", "error");
            errorCount++;
        }

        if (!name) {
            this.props.notify("Invalid", "Please enter a proper name", "error");
            errorCount++;
        }

        if ((!password || !confirmPassword || password !== confirmPassword)) {
            this.props.notify("Invalid", "Password/Confirm Password mismatch!", "error");
            errorCount++;
        }

        if (errorCount === 0)
            this.props.facultySignUp({ name, email, branch, password });

    }

    render() {
        if (this.props.user) {
            return <Redirect to={"/" + this.props.user.attributes.type} />
        }
        return (
            <CenteredPage>
                <FormImage src={imgFaculty} alt={"Sign Up"} />
                <Form onSubmit={this.onSubmitHandler} name="faculty-signup">
                    <FormItem>
                        <FormImageLabel imgSrc={imgName} />
                        <IonInput onIonChange={this.onChangeHandler} required name="name" value={this.state.name} type="text" placeholder="Faculty's Name"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgBranch} />
                        <SelectInput onIonChange={this.onChangeHandler} required name="branch" value={this.state.branch} placeholder="Department">
                            <IonSelectOption value="cs">Computer Science</IonSelectOption>
                            <IonSelectOption value="ec">Electronics</IonSelectOption>
                            <IonSelectOption value="cv">Civil</IonSelectOption>
                            <IonSelectOption value="me">Mechanical</IonSelectOption>
                        </SelectInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput onIonChange={this.onChangeHandler} required name="email" value={this.state.email} type="email" placeholder="Email"></IonInput>
                    </FormItem>

                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput onIonChange={this.onChangeHandler} required name="password" value={this.state.password} type="password" placeholder="Password"></IonInput>
                    </FormItem>

                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput onIonChange={this.onChangeHandler} required name="confirmPassword" type="password" value={this.state.confirmPassword} placeholder="Confirm Password"></IonInput>
                    </FormItem>


                    <FormButton iconName="person-add" buttonText="Sign Up" />
                </Form>
                <FormFooter>
                    <HaveAnAccount />
                </FormFooter>
            </CenteredPage>
        );
    }
}

export default onlyNonUser(withUser(withNotify(withChangedTitle("Faculty Sign Up")(FacultySignUpPage))));