import React from "react";
import { IonSlides, IonSlide } from "@ionic/react";

const ImageSlider = ({ imagesData, ...props }) => {
    return (
        <IonSlides style={{ height: "100%", width: "100%" }} {...props} >
            {
                imagesData.map((imageInfo) => {
                    return (
                        <IonSlide key={imageInfo.src}>
                            <img alt={imageInfo.alt} src={imageInfo.src} style={{ height: "100%", width: "100%" }} />
                        </IonSlide>
                    );
                })
            }
        </IonSlides>
    );
}

export default ImageSlider;