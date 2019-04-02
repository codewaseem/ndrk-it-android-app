import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgStudentSignUp from "../../images/student_signup.svg";
import imgUsn from "../../images/usn.svg";
import imgName from "../../images/name.svg";
import imgYear from "../../images/year.svg";

import { IonInput, IonSelectOption } from "@ionic/react";
import { Form, FormButton, FormFooter, FormImage, FormImageLabel, SelectInput, FormItem, FormIconLabel, HaveAnAccount } from "../../components/FormItems";
import { RoutesURL } from "../../staticData";
import { withChangedTitle, withUser } from "../../context";
import { Link, Redirect } from "react-router-dom";
import { isValidEmail, isValidUsn } from "../../helpers";
import { notify } from "reapop";
import { connect } from "react-redux";

class StudentSignUpPage extends Component {

    state = {
        name: "",
        usn: "",
        year: "",
        email: "",
        password: "",
        confirmPassword: ""

    }

    onChangeHandler = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        console.log(fieldName);
        if (fieldName === "usn") console.log(fieldValue);
        this.setState(() => {
            return {
                [fieldName]: fieldValue
            }
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        let { email, usn, name, year, password, confirmPassword } = this.state;
        let errorCount = 0;
        if (!isValidEmail(email)) {
            this.props.notify("Invalid", "Email is invalid", "error");
            errorCount++;
        }
        if (!isValidUsn(usn)) {
            this.props.notify("Invalid", "USN is invalid", "error");
            errorCount++;
        }

        if (!name) {
            this.props.notify("Invalid", "Please enter a proper name", "error");
            errorCount++;
        }

        if (!year) {
            this.props.notify("Invalid", "Select your academic year!", "error");
            errorCount++;
        }

        if ((!password || !confirmPassword || password !== confirmPassword)) {
            this.props.notify("Invalid", "Password/Confirm Password mismatch!", "error");
            errorCount++;
        }

        if (errorCount === 0)
            this.props.studentSignUp({ name, email, usn, year, password });

    }

    render() {
        if(this.props.user) {
            return (
                <Redirect to={`/${this.props.user.attributes.type}`} />
            );
        }
        return (
            <CenteredPage>
                <FormImage src={imgStudentSignUp} alt={"Sign Up"} />
                <Form name="student-signup" onSubmit={this.onSubmitHandler}>
                    <FormItem>
                        <FormImageLabel imgSrc={imgName} />
                        <IonInput required={true} onIonChange={this.onChangeHandler} name="name" value={this.state.name} type="text" placeholder="Full Name"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgUsn} />
                        <IonInput required={true} onIonChange={this.onChangeHandler} name="usn" value={this.state.usn} type="text" style={{ textTransform: "uppercase" }} pattern="[1-4](YG|yg)[0-9]{2}(CS|cs|EC|ec|CV|cv|ME|me)[0-9]{3}" placeholder="USN"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgYear} />
                        <SelectInput required={true} onIonChange={this.onChangeHandler} value={this.state.year} name="year" placeholder="Current Year">
                            <IonSelectOption value="1">1st Year</IonSelectOption>
                            <IonSelectOption value="2">2nd Year</IonSelectOption>
                            <IonSelectOption value="3">3rd Year</IonSelectOption>
                            <IonSelectOption value="4">4th Year</IonSelectOption>
                        </SelectInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput required={true} onIonChange={this.onChangeHandler} value={this.state.email} name="email" type="email" placeholder="Email"></IonInput>
                    </FormItem>

                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput required={true} onIonChange={this.onChangeHandler} value={this.state.password} name="password" type="password" placeholder="Password"></IonInput>
                    </FormItem>

                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput required={true} onIonChange={this.onChangeHandler} value={this.state.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password"></IonInput>
                    </FormItem>

                    <FormButton iconName="person-add" buttonText="Sign Up" />
                </Form>
                <FormFooter>
                    <HaveAnAccount />
                    <p>
                        <br />
                        Are you a faculty?
                      <br />
                        <Link to={RoutesURL.FACULTY_SIGNUP}>Sign Up</Link> here.
                    </p>
                </FormFooter>
            </CenteredPage >
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        notify: (title, message, status) => {
            dispatch(notify({ title, message, status }));
        }
    }
}

export default connect(null, mapDispatchToProps)(withUser((withChangedTitle("Student Sign Up")(StudentSignUpPage))));