import React, { Component } from "react";
import { IonSearchbar } from "@ionic/react";
import { Form, FormButton } from "../FormItems";
import UserSearchResult from "../UserSearchResult";
import { connect } from "react-redux";
import { findUserByEmailAction } from "../../store/actions";

class QuickSearchForm extends Component {
    state = {
        searchEmail: "",
        searched: false,
        userInfo: false
    };
    onChangeHandler = (e) => {
        let { name, value } = e.target;
        this.setState(() => {
            return {
                [name]: value
            };
        });
    };
    onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!this.state.searchEmail) return;
        let userInfo = await this.props.findByEmail(this.state.searchEmail);
        console.log(userInfo);
        this.setState(() => {
            return {
                userInfo,
                searched: true
            }
        });

    };
    render() {
        return (<React.Fragment>
            <Form onSubmit={this.onSubmitHandler}>
                <IonSearchbar required name="searchEmail" onIonChange={this.onChangeHandler} debounce={500} placeholder={"Search user by email"} type="email" value={this.state.searchEmail} />
                <FormButton type="submit" buttonText="Search" />
            </Form>
            {this.state.searched && <UserSearchResult userInfo={this.state.userInfo} />}
        </React.Fragment>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findByEmail: (email) => {
            return dispatch(findUserByEmailAction(email));
        }
    }
}

export default connect(null, mapDispatchToProps)(QuickSearchForm);