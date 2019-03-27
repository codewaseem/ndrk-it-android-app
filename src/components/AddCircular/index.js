import React, { Component } from "react";
import { IonItem, IonInput, IonButton, IonTextarea, IonDatetime, IonLabel } from "@ionic/react";
import "./style.css"
import imgNotification from "../../images/notification.svg";

class AddCircular extends Component {
    render() {
        return (
            <div className="add-circular-page ">
                <img style={{ margin: "auto" }} className="login_avatar" src={imgNotification}>
                </img>
                <IonItem>

                    <IonInput placeholder="Circular Name" type="text"></IonInput>
                </IonItem>
                <IonItem>

                    <IonDatetime style={{ paddingLeft: "0px" }} placeholder="Valid Till" display-format="DD/MMM/YYYY" />
                </IonItem>
                <IonItem>
                    <IonTextarea placeholder="Describe the circular here..." rows={6}></IonTextarea>
                </IonItem>
                <IonButton style={{ marginTop: "25px" }} color="dark" expand="block">
                    Add Circular
                    </IonButton>

            </div>
        )
    }
}

export default AddCircular;