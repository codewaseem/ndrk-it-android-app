import React, { Component } from "react";
import TilesGrid from "../TilesGrid";
import { loginOrLogoutOptionsData } from "../../staticData";
import { withUser } from "../../context";

const LoginOrLogout = (props) => {
    console.log("HERE");
    if(this.props.user) {
        return <TilesGrid tilesInfo={loginOrLogoutOptionsData.loggedIn} {...props}/>
    }
    else {
        return <TilesGrid tilesInfo={loginOrLogoutOptionsData.loggedOut} {...props}/>
    }
}

export default withUser(LoginOrLogout);