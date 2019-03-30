import React, { Component } from "react";
import Page from "../Page";
import "./style.css";

const CenteredPage = ({ style, classes = [], children }) => {
    return (
        <Page classes={["centered-flex-page", ...classes]} style={style}>
            {children}
        </Page>
    );
}

export default CenteredPage;