import React, { Component } from "react";
import { Redirect } from "react-router";
import { RoutesURL } from "../../staticData";



class SignUpPage extends Component {
    render() {
        let { match } = this.props;
        if (match.isExact) {
            return (<Redirect to={RoutesURL.STUDENT_SIGNUP} />);
        } 
        // if(match)
        return null;
    }
}

export default SignUpPage;