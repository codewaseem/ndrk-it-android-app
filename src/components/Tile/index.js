import React from 'react';
import { IonRippleEffect } from "@ionic/react";
import { vibrate } from '../../helpers';

const Tile = ({ imgSrc, text, style }) => {
    return (
        <div style={{ padding: "10px 5px", textAlign: "center", ...style }} onClick={() => {
            vibrate();
        }}>
            <IonRippleEffect></IonRippleEffect>
            <img alt={text} src={imgSrc} style={{ width: "35px", height: "35px", margin: "auto" }}>
            </img>
            <figcaption style={{ fontSize: "0.8em", color: "gray" }}>{text}</figcaption>
        </div>
    )
}

export default Tile;