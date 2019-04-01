import React, { Component } from "react";
import { IonInput, IonTextarea } from "@ionic/react";
import imgNotification from "../../images/notification.svg";
import { FormItem, FormIconLabel, FormButton, FormImage, Form, DateTimeInput } from "../../components/FormItems";
import CenteredPage from "../CenteredPage";
import { withChangedTitle } from "../../context";

class AddCircularPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgNotification} />
                <Form name="add-circular">
                    <FormItem>
                        <FormIconLabel iconName="text" />
                        <IonInput placeholder="Circular Name" type="text"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="calendar" />

                        <DateTimeInput placeholder="Valid Till Date" display-format="DD/MMM/YYYY" />
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="list-box" />
                        <IonTextarea placeholder="Describe the circular here..." rows={6}></IonTextarea>
                    </FormItem>
                    <FormButton buttonText="Add Circular"></FormButton>
                </Form>

            </CenteredPage>
        )
    }
}

export default withChangedTitle("Add Circular")(AddCircularPage);