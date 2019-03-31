import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgStudentSignUp from "../../images/student_signup.svg";
import imgUsn from "../../images/usn.svg";
import imgName from "../../images/name.svg";
import imgYear from "../../images/year.svg";

import { IonInput, IonSelectOption } from "@ionic/react";
import { Form, FormButton, FormFooter, FormImage, FormImageLabel, SelectInput, FormItem, FormIconLabel, HaveAnAccount } from "../../components/FormItems";
import { Link } from "react-router-dom";
import { RoutesURL } from "../../staticData";


class StudentSignUpPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgStudentSignUp} alt={"Sign Up"} />
                <Form name="student-signup">
                    <FormItem>
                        <FormImageLabel imgSrc={imgName} />
                        <IonInput type="text" placeholder="Full Name"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgUsn} />
                        <IonInput type="text" style={{ textTransform: "uppercase" }} pattern={/[3-4]YG[0-9]{2}(CS|EC|CV|ME)[0-9]{3}/gi} placeholder="USN"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgYear} />
                        <SelectInput placeholder="Current Year">
                            <IonSelectOption value="1">1st Year</IonSelectOption>
                            <IonSelectOption value="2">2nd Year</IonSelectOption>
                            <IonSelectOption value="3">3rd Year</IonSelectOption>
                            <IonSelectOption value="4">4th Year</IonSelectOption>
                        </SelectInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="mail" />
                        <IonInput type="email" placeholder="Email"></IonInput>
                    </FormItem>

                    <FormItem>
                        <FormIconLabel iconName="key" />
                        <IonInput type="password" placeholder="Password"></IonInput>
                    </FormItem>

                    <FormButton iconName="person-add" buttonText="Sign Up" />
                </Form>
                <FormFooter>
                    <HaveAnAccount />
                    <p>
                        <br />
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

export default StudentSignUpPage;