import React, { Component } from "react";
import { IonButton, IonIcon } from "@ionic/react";

export const FormImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} style={{ height: "20%", width: "35%" }} />
    );
}

export const Form = ({ name, children }) => {
    return (
        <form name={name} className="flex-form">
            {children}
        </form>
    );
}

export const FormFooter = ({ children }) => {
    return (
        <section style={{ textAlign: "center", fontSize: "0.8em" }}>
            {children}
        </section>
    )
}

export const FormButton = ({ iconName = "", buttonText = "Click Me", onClick = () => { } }) => {
    return (
        <IonButton style={{ marginTop: "20px" }} color="dark" expand="block">
            {iconName && <IonIcon color="light" name={iconName} style={{ marginRight: "5px" }} />}
            {buttonText}
        </IonButton>
    );
}