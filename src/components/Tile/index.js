import React, { Component } from 'react';
import { IonRippleEffect } from "@ionic/react";

const Tile = ({ src, text, onClick }) => {
    return (
        <div style={{ padding: "10px 5px" }} onClick={onClick}>
            <IonRippleEffect></IonRippleEffect>
            <img src={src} style={{ width: "35px", height: "35px", margin: "auto" }}>
            </img>
            <figcaption style={{ fontSize: "0.8em", color: "gray" }}>{text}</figcaption>
        </div>
    )
}

export default Tile;