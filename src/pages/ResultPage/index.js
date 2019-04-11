import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { IonButton, IonText } from "@ionic/react";
import { withChangedTitle } from "../../context";

class ResultPage extends Component {

    render() {
        return (
            <CenteredPage style={{justifyContent:"center"}}>
                <IonText style={{marginBottom:"20px"}}>For results visit VTU's official site.</IonText>
                <a href="http://results.vtu.ac.in/" target="_blank" rel="noopener noreferrer">
                    <IonButton>
                    Visit Here
                    </IonButton>
                </a>
            </CenteredPage>
        );
    }
}

export default  withChangedTitle("Results")(ResultPage);