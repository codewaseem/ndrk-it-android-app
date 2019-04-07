import React, { Component } from "react";
import { IonInput, IonTextarea } from "@ionic/react";
import imgEvent from "../../images/exam.svg";
import { FormItem, FormIconLabel, FormButton, FormImage, Form, DateTimeInput } from "../../components/FormItems";
import CenteredPage from "../CenteredPage";
import { withChangedTitle } from "../../context";
import { connect } from "react-redux";
import { addEvent } from "../../store/actions";

class AddEventPage extends Component {

    state = {
        eventForm: {
            name: "",
            date: 0,
            time: 0,
            description: ""
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let datetimeString = String(this.state.eventForm.date).split('T')[0] + "T" + String(this.state.eventForm.time).split('T')[1]
        let datetime = new Date(datetimeString).getTime();

        await this.props.addEvent({name:this.state.eventForm.name,datetime, description: this.state.eventForm.description});
    }

    onChangeHandler = (e) => {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                eventForm: {
                    ...prevState.eventForm,
                    [name]: value
                }
            }
        });
    }
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgEvent} />
                <Form onSubmit={this.onSubmit} name="add-event">
                    <FormItem>
                        <FormIconLabel iconName="text" />
                        <IonInput onIonChange={this.onChangeHandler} required name="name" placeholder="Event Name" type="text"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="calendar" />

                        <DateTimeInput onIonChange={this.onChangeHandler} required name="date" placeholder="Event Date" display-format="DD/MMM/YYYY" />
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="clock" />

                        <DateTimeInput onIonChange={this.onChangeHandler} name="time" required disabled={!this.state.eventForm.date} placeholder="Event Start Time" display-format="hh:mm A" />
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="list-box" />
                        <IonTextarea onIonChange={this.onChangeHandler} name="description" required placeholder="Describe the event here..." rows={6}></IonTextarea>
                    </FormItem>
                    <FormButton buttonText="Add Event"></FormButton>
                </Form>

            </CenteredPage>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (data) => {
            return dispatch(addEvent(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(withChangedTitle("Add Event")(AddEventPage));