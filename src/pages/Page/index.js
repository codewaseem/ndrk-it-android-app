import React, { Component } from "react";
import "./style.css";

const Page = ({ style = {}, classes = [], children }) => {
    return (
        <section style={style} className={`base-page-style ${classes.join(" ")}`}>
            {
                children? children :
                <p>Noting to show here</p>
            }
        </section>
    );
}

export default Page;