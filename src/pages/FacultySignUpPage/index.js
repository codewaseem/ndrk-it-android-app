import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import imgFaculty from "../../images/lecturer.svg";
import imgBranch from "../../images/branch.svg";
import imgName from "../../images/name.svg";

import { IonInput, IonSelectOption } from "@ionic/react";
import { Form, FormButton, FormFooter, FormImage, FormImageLabel, SelectInput, FormItem, FormIconLabel, HaveAnAccount } from "../../components/FormItems";
import { Link } from "react-router-dom";
import { RoutesURL } from "../../staticData";
import { withChangedTitle } from "../../context";


class FacultySignUpPage extends Component {

    render() {
        return (
            <CenteredPage>
                <FormImage src={imgFaculty} alt={"Sign Up"} />
                <Form name="faculty-signup">
                    <FormItem>
                        <FormImageLabel imgSrc={imgName} />
                        <IonInput type="text" placeholder="Faculty's Name"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormImageLabel imgSrc={imgBranch} />
                        <SelectInput placeholder="Department">
                            <IonSelectOption value="cs">Computer Science</IonSelectOption>
                            <IonSelectOption value="ec">Electronics</IonSelectOption>
                            <IonSelectOption value="cv">Civil</IonSelectOption>
                            <IonSelectOption value="me">Mechanical</IonSelectOption>
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
                </FormFooter>
            </CenteredPage>
        );
    }
}

export default withChangedTitle("Faculty Sign Up")(FacultySignUpPage);