import React from "react";
import { Redirect } from "react-router";
import { RoutesURL } from "../../staticData";
import { withUser } from "../../context";


class LogoutPage extends React.Component {

    componentDidMount() {
        this.props.logoutUser();
        // window.location.reload();
    }

    render() {
        return (
            <Redirect to={RoutesURL.HOME} />
        )
    }
}

export default withUser(LogoutPage);

