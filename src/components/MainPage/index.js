import React, { Component } from 'react';
import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonRippleEffect } from '@ionic/react';
import slide0 from "../../images/0.jpg";
import slide1 from "../../images/1.jpg";
import slide2 from "../../images/2.jpg";
import slide3 from "../../images/3.jpg";
import slide4 from "../../images/4.jpg";
import slide5 from "../../images/5.jpg";
import slide6 from "../../images/6.jpg";
import slide7 from "../../images/7.jpg";
import "./style.css";

import imgAbout from "../../images/about.svg";
import imgAdmission from "../../images/admission.svg";
import imgDepartment from "../../images/department.svg";
import imgFacility from "../../images/facility.svg";
import imgEvent from "../../images/event.svg";
import imgGallery from "../../images/gallery.svg";
import imgMap from "../../images/locate.svg";
import imgContact from "../../images/contact.svg";
import imgNotification from "../../images/notification.svg";
import imgLogin from "../../images/login.svg";
import imgSignup from "../../images/signup.svg";

const menuSectionData = [
    {
        sectionName: "Admissions",
        imgSrc: imgAdmission
    },
    {
        sectionName: "Departments",
        imgSrc: imgDepartment
    },
    {
        sectionName: "Facilities",
        imgSrc: imgFacility
    },
    {
        sectionName: "Events",
        imgSrc: imgEvent
    },
    {
        sectionName: "Gallery",
        imgSrc: imgGallery
    },
    {
        sectionName: "Notification",
        imgSrc: imgNotification
    },
    {
        sectionName: "About",
        imgSrc: imgAbout
    },
    {
        sectionName: "Locate",
        imgSrc: imgMap
    },
    {
        sectionName: "Contact",
        imgSrc: imgContact
    }
]

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

const slideOpts = {
    effect: 'flip',
    init: true,
    loop: true,
    autoplay: true,
};

class MainPage extends Component {
    render() {
        return (
            <section>
                <IonSlides pager={true} options={slideOpts} className="bullet">
                    <IonSlide>
                        <img alt="Slide 1" src={slide0} style={{ height: "220px", width: "100%" }}></img>
                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 2" src={slide1} style={{ height: "220px", width: "100%" }}></img>
                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 1" src={slide2} style={{ height: "220px", width: "100%" }}></img>
                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 1" src={slide3} style={{ height: "220px", width: "100%" }}></img>
                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 1" src={slide4} style={{ height: "220px", width: "100%" }}></img>

                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 1" src={slide5} style={{ height: "220px", width: "100%" }}></img>

                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 1" src={slide6} style={{ height: "220px", width: "100%" }}></img>

                    </IonSlide>
                    <IonSlide>
                        <img alt="Slide 1" src={slide7} style={{ height: "220px", width: "100%" }}></img>
                    </IonSlide>
                </IonSlides>
                <IonGrid style={{ textAlign: "center" }}>
                    <IonRow>
                        {
                            menuSectionData.map((item => {
                                return <IonCol size="4" align-self-center>
                                    <Tile src={item.imgSrc} text={item.sectionName} />
                                </IonCol>
                            }))
                        }
                    </IonRow>
                    <IonRow style={{ justifyContent: "space-between" }}>
                        <IonCol size="4">
                            <Tile src={imgSignup} text="Sign Up" />
                        </IonCol>
                        <IonCol size="4">
                            <Tile src={imgLogin} text="Login" />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </section>

        )
    }
}

export default MainPage;