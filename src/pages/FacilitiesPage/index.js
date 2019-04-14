import React from "react";
import Page from "../Page";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { withChangedTitle } from "../../context";
import { facilitiesInfo, defaultImageSliderOptions } from "../../staticData";
import ImageSlider from "../../components/ImageSlider";


const FacilitiesPage = () => {
    return (
        <Page>
            {
                facilitiesInfo.map(info => {
                    return (
                        <IonCard key={info.title}>
                            <ImageSlider pager options={defaultImageSliderOptions} imagesData={info.images} style={{maxHeight:"250px"}} />
                            <IonCardHeader style={{ textAlign: "center" }}>
                                <IonCardTitle>{info.title}</IonCardTitle>
                            </IonCardHeader>

                            {info.paras.length !== 0 && info.paras.map((para,i) => (
                                <IonCardContent key={i}>
                                    {para}
                                </IonCardContent>
                            ))}
                        </IonCard>
                    );
                })
            }

        </Page>
    );
}

export default withChangedTitle("Facilites")(FacilitiesPage);