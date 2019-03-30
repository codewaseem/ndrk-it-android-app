import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgStudentSignUp from "../../images/student_signup.svg";
import { IonItem, IonInput, IonLabel, IonIcon } from "@ionic/react";
import { Form, FormButton, FormFooter, FormImage } from "../../components/FormItems";

class StudentSignUpPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgStudentSignUp} alt={"Sign Up"} />

                <FormFooter>
                    <p>
                        Already have an account?
                    <br />
                        <a>Login</a> here.
                </p>
                </FormFooter>
            </CenteredPage>
        );
    }
}

export default StudentSignUpPage;