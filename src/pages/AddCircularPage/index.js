import React, { Component } from "react";
import { IonInput, IonTextarea } from "@ionic/react";
import { FormItem, FormIconLabel, FormButton, FormImage, Form, DateTimeInput } from "../../components/FormItems";
import CenteredPage from "../CenteredPage";
import { withChangedTitle } from "../../context";
import { connect } from "react-redux";
import { addCircular } from "../../store/actions";
import { notification as imgNotification } from "../../staticData";

class AddCircularPage extends Component {

    state = {
        circularForm: {
            name: "",
            endDatetime: "",
            description: ""
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let endDatetime = new Date(this.state.circularForm.endDatetime).getTime();

        let done = await this.props.addCircular({ name: this.state.circularForm.name, endDatetime, description: this.state.circularForm.description });
        if(done) {
            this.resetForm();
        }
    }

    onChangeHandler = (e) => {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                circularForm: {
                    ...prevState.circularForm,
                    [name]: value
                }
            }
        });
    }

    resetForm = () => {
        this.setState(() => {
            return {
                circularForm: {
                    name: "",
                    endDatetime: "",
                    description: ""
                }
            }
        });
    }
    render() {
        return (
            <CenteredPage>
                <FormImage src={imgNotification} />
                <Form onSubmit={this.onSubmit} name="add-circular">
                    <FormItem>
                        <FormIconLabel iconName="text" />
                        <IonInput name="name" onIonChange={this.onChangeHandler} required value={this.state.circularForm.name} placeholder="Circular Name" type="text"></IonInput>
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="calendar" />

                        <DateTimeInput min={(new Date()).toISOString().split("T")[0]} name="endDatetime" onIonChange={this.onChangeHandler} required value={this.state.circularForm.endDatetime} placeholder="Valid Till Date" display-format="DD/MMM/YYYY" />
                    </FormItem>
                    <FormItem>
                        <FormIconLabel iconName="list-box" />
                        <IonTextarea name="description" onIonChange={this.onChangeHandler} required value={this.state.circularForm.description} placeholder="Describe the circular here..." rows={6}></IonTextarea>
                    </FormItem>
                    <FormButton buttonText="Add Circular"></FormButton>
                </Form>

            </CenteredPage>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCircular: (data) => {
            return dispatch(addCircular(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(withChangedTitle("Add Circular")(AddCircularPage));