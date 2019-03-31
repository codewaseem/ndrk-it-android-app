import React, { Component } from "react";
import { IonButton, IonIcon, IonItem, IonLabel, IonSelect } from "@ionic/react";

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

export const FormItem = ({ children, style, ...props }) => {
    return (
        <IonItem style={{ width: "100%", ...style }} {...props}>
            {children}
        </IonItem>
    );
}

export const FormImageLabel = ({ imgSrc, ...props }) => {
    return (
        <IonLabel color="dark" style={{ maxWidth: "20px" }} {...props}> <img src={imgSrc} style={{ width: "16px" }} /></IonLabel>
    );
}

export const FormIconLabel = ({ iconName, ...props }) => {
    return (
        <IonLabel color="dark" style={{ maxWidth: "20px" }} {...props}> <IonIcon name={iconName} /> </IonLabel>
    );
}

export const SelectInput = ({ children, style, ...props }) => {
    return (
        <IonSelect style={{ maxWidth: "calc(100% - 20px)", width: "calc(100% - 20px)", paddingLeft: "5px", ...style }} {...props}>
            {children}
        </IonSelect>
    );
}