import React, { Component } from 'react';
import "./style.css";
import imgStudentSignUp from "../../images/student_signup.svg";
import imgUsn from "../../images/usn.svg";
import imgName from "../../images/name.svg";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import imgYear from "../../images/year.svg";

class StudentSignUpPage extends Component {
    render() {
        return (
            <div className="signup-page">
                <img className="student_avatar" src={imgStudentSignUp}>
                </img>
                <IonItem>
                    <IonLabel color="dark" style={{ maxWidth: "20px" }}> <img src={imgName} style={{ width: "16px" }} /></IonLabel>
                    <IonInput type="text" placeholder="Full Name"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="dark" style={{ maxWidth: "20px" }}> <img src={imgUsn} style={{ width: "16px" }} /></IonLabel>
                    <IonInput type="text" placeholder="USN"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="dark" style={{ maxWidth: "20px" }}> <img src={imgYear} style={{ width: "16px" }} /></IonLabel>
                    <IonInput type="text" placeholder="Current Year" />
                    {/* <IonSelect style={{ display: "flex", flex: "1", width: "100%" }} placeholder="Current Year">
                        <IonSelectOption value="1">1st Year</IonSelectOption>
                        <IonSelectOption value="2">2nd Year</IonSelectOption>
                        <IonSelectOption value="3">3rd Year</IonSelectOption>
                        <IonSelectOption value="4">4th Year</IonSelectOption>
                    </IonSelect> */}
                </IonItem>
                <IonItem>
                    <IonLabel color="dark"><IonIcon name="mail" /></IonLabel>
                    <IonInput type="email" placeholder="Email"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel color="dark">
                        <IonIcon name="key" />
                    </IonLabel>
                    <IonInput type="password" placeholder="Password"></IonInput>
                </IonItem>
                <IonButton style={{ marginTop: "25px" }} color="dark" expand="block">
                    <IonIcon color="light" name="person-add" style={{ marginRight: "5px" }} />
                    Sign Up
                </IonButton>
                <p className="go-login">
                    Already have an account?
                    <br />
                    <a>Login</a> here.
                </p>
            </div>
        );
    }
}

export default StudentSignUpPage;