import React, { Component } from "react";
import { IonInput, IonTextarea } from "@ionic/react";
import imgEvent from "../../images/exam.svg";
import { FormItem, FormIconLabel, FormButton, FormImage, Form, DateTimeInput } from "../../components/FormItems";
import CenteredPage from "../CenteredPage";
import { withChangedTitle } from "../../context";

class AddEventPage extends Component {
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgEvent} />
                <Form name="add-event">
                    <FormItem>
                        <FormIconLabel iconName="text" />
                        <IonInput placeholder="Event Name" type="text"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="calendar" />

                        <DateTimeInput placeholder="Event Date" display-format="DD/MMM/YYYY" />
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="clock" />

                        <DateTimeInput placeholder="Event Start Time" display-format="hh:mm A" />
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="list-box" />
                        <IonTextarea placeholder="Describe the event here..." rows={6}></IonTextarea>
                    </FormItem>
                    <FormButton buttonText="Add Event"></FormButton>
                </Form>

            </CenteredPage>
        )
    }
}

export default withChangedTitle("Add Event")(AddEventPage);