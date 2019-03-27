import React, { Component } from "react";
import { IonItem, IonInput, IonButton, IonTextarea, IonDatetime } from "@ionic/react";
import "./style.css"
import imgEvent from "../../images/exam.svg";

class AddEventPage extends Component {
    render() {
        return (
            <div className="add-event-page ">
                <img style={{ margin: "auto" }} className="login_avatar" src={imgEvent}>
                </img>
                <IonItem>

                    <IonInput placeholder="Event Name" type="text"></IonInput>
                </IonItem>
                <IonItem>

                    <IonDatetime style={{ paddingLeft: "0px" }} placeholder="Event Date" display-format="DD/MMM/YYYY" />
                </IonItem>
                <IonItem>

                    <IonDatetime style={{ paddingLeft: "0px" }} placeholder="Event Start Time" display-format="hh:mm A" />
                </IonItem>
                <IonItem>
                    <IonTextarea placeholder="Describe the event here..." rows={6}></IonTextarea>
                </IonItem>
                <IonButton style={{ marginTop: "25px" }} color="dark" expand="block">
                    Add Event
                    </IonButton>

            </div>
        )
    }
}

export default AddEventPage;