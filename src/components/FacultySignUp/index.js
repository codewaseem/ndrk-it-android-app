import React, { Component } from 'react';
import "./style.css";
import imgFaculty from "../../images/lecturer.svg";
import imgBranch from "../../images/branch.svg";
import imgName from "../../images/name.svg";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import imgYear from "../../images/year.svg";

class StudentSignUpPage extends Component {
    render() {
        return (
            <div className="signup-page">
                <img className="student_avatar" src={imgFaculty}>
                </img>
                <IonItem>
                    <IonLabel color="dark" style={{ maxWidth: "20px" }}> <img src={imgName} style={{ width: "16px" }} /></IonLabel>
                    <IonInput type="text" placeholder="Faculty's Name"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="dark" style={{ maxWidth: "20px" }}> <img src={imgBranch} style={{ width: "16px" }} /></IonLabel>
                    <IonInput type="text" placeholder="Department"></IonInput>
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