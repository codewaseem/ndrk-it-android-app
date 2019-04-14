import React from "react";
import Page from "../Page";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { withChangedTitle } from "../../context";
import { facilitiesInfo, defaultImageSliderOptions, bus, hostel, sports } from "../../staticData";
import ImageSlider from "../../components/ImageSlider";


const FacilitiesPage = () => {
    return (
        <Page>
            {
                facilitiesInfo.map(info => {
                    return (
                        <IonCard key={info.title}>
                            <ImageSlider key={info.title} pager options={defaultImageSliderOptions} imagesData={info.images} style={{maxHeight:"250px"}} />
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
            <IonCard>
                <img src={bus} alt="Bus" />
                <IonCardHeader>
                    <IonCardTitle>Transportation</IonCardTitle>
                </IonCardHeader>
            </IonCard>
            <IonCard>
                <img src={hostel} alt="Hostel" />
                <IonCardHeader>
                    <IonCardTitle>Hostel</IonCardTitle>
                </IonCardHeader>
            </IonCard>
            <IonCard>
                <img src={sports} alt="Sports" />
                <IonCardHeader>
                    <IonCardTitle>Sports</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </Page>
    );
}

export default withChangedTitle("Facilites")(FacilitiesPage);