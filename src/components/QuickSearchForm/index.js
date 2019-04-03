import React, { Component } from "react";
import { IonSearchbar } from "@ionic/react";
import { Form, FormButton } from "../FormItems";
import UserSearchResult from "../UserSearchResult";

export class QuickSearchForm extends Component {
    state = {
        searchEmail: ""
    };
    onChangeHandler = (e) => {
        let { name, value } = e.target;
        this.setState(() => {
            return {
                [name]: value
            };
        });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
    };
    render() {
        return (<React.Fragment>
            <Form onSubmit={this.onSubmitHandler}>
                <IonSearchbar name="searchEmail" onIonChange={this.onChangeHandler} debounce={500} placeholder={"Search user by email"} type="email" value={this.state.searchEmail} />
                <FormButton type="submit" buttonText="Search" />
            </Form>
            <UserSearchResult userInfo={{
                name: "Waseem Ahmed",
                gender: "male",
                usn: "4yg13cs022",
                year: 4,
                email: "alphawaseem@gmail.com",
                branch: "cs",
                type: "student"
            }} />
        </React.Fragment>);
    }
}
