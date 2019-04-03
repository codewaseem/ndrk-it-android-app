import React, { Component } from "react";
import Page from "../Page";
import { withChangedTitle, withUser, onlyUser } from "../../context";
import { IonItemDivider, IonLabel } from "@ionic/react";
import { greetUser } from "../../helpers";

class FacultyHomePage extends Component {
    render() {
        return (
            <Page>
                <IonItemDivider>
                    <IonLabel>
                        {this.props.user && greetUser(this.props.user)}
                    </IonLabel>
                </IonItemDivider>
            </Page>
        );
    }
}

export default onlyUser(withUser(withChangedTitle("Faculty Home")(FacultyHomePage)));