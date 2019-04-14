import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import { four04 as img404 } from "../../staticData";
import { FormImage } from "../../components/FormItems";
import { IonText } from "@ionic/react";

class FourNotFourPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={img404} />
                <p style={{ textAlign: "center" }}><IonText color="danger">Page not found!</IonText></p>
            </CenteredPage>
        );
    }
}

export default FourNotFourPage;