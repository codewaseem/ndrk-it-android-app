import React, { Component } from "react";
import CenteredPage from "../CenteredPage";
import img404 from "../../images/404.svg";
import { FormImage } from "../../components/FormItems";
import { IonText } from "@ionic/react";

class FourNotFourPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={img404} />
                <p style={{ textAlign: "center" }}><IonText color="danger"><h2>Page not found!</h2></IonText></p>
            </CenteredPage>
        );
    }
}

export default FourNotFourPage;