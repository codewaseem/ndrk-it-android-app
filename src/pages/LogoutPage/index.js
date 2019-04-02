import React from "react";
import { User } from "parse";
import { Redirect } from "react-router";
import { RoutesURL } from "../../staticData";

export default (props) => {
    User.logOut();
    return <Redirect to={RoutesURL.HOME} {...props} />
}