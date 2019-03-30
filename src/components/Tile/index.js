import React, { Component } from 'react';
import { IonRippleEffect } from "@ionic/react";

const Tile = ({ imgSrc, text, onClick, style }) => {
    return (
        <div style={{ padding: "10px 5px", textAlign: "center", ...style }} onClick={onClick}>
            <IonRippleEffect></IonRippleEffect>
            <img alt={text} src={imgSrc} style={{ width: "35px", height: "35px", margin: "auto" }}>
            </img>
            <figcaption style={{ fontSize: "0.8em", color: "gray" }}>{text}</figcaption>
        </div>
    )
}

export default Tile;