import React, { Component } from 'react';
import { IonGrid, IonRow, IonCol, IonItemDivider, IonLabel } from '@ionic/react';
import Tile from "../Tile";
import "./style.css";

import imgHome from "../../images/home.svg";
import imgExam from "../../images/exam.svg";
// import imgResult from "../../images/result.svg";
import imgStudyMaterial from "../../images/study_material.svg";
import imgLogout from "../../images/logout.svg";
import imgAsk from "../../images/ask.svg";
import imgMyProfile from "../../images/myprofile.svg";
import imgFacility from "../../images/facility.svg";
import imgEvent from "../../images/event.svg";
import imgGallery from "../../images/gallery.svg";
import imgMap from "../../images/locate.svg";
import imgContact from "../../images/contact.svg";
import imgNotification from "../../images/notification.svg";


const studentsMenu =
    [
        {
            sectionName: "Home",
            imgSrc: imgHome
        },
        {
            sectionName: "Add Event",
            imgSrc: imgExam
        },
        {
            sectionName: "Add Circular",
            imgSrc: imgNotification
        },
        {
            sectionName: "Add Study Materials",
            imgSrc: imgStudyMaterial
        },
        {
            sectionName: "Q&A (Chat)",
            imgSrc: imgAsk
        },
        {
            sectionName: "My Profile",
            imgSrc: imgMyProfile
        }
    ]

// const generalInfo = [
//     {
//         sectionName: "Facilities",
//         imgSrc: imgFacility
//     },
//     {
//         sectionName: "Events",
//         imgSrc: imgEvent
//     },
//     {
//         sectionName: "Gallery",
//         imgSrc: imgGallery
//     },
//     {
//         sectionName: "Notification",
//         imgSrc: imgNotification
//     },
//     {
//         sectionName: "Locate",
//         imgSrc: imgMap
//     },
//     {
//         sectionName: "Contact",
//         imgSrc: imgContact
//     }
// ]

class FacultyHome extends Component {

    render() {
        return (
            <section className="student-home-page">
                <IonItemDivider>
                    <IonLabel>
                        Welcome Sir,
                    </IonLabel>
                </IonItemDivider>
                <IonGrid style={{ textAlign: "center", display: "flex", alignItems: "center" }}>
                    <IonRow>
                        {
                            studentsMenu.map((item => {
                                return <IonCol size="4" align-self-center>
                                    <Tile src={item.imgSrc} text={item.sectionName} />
                                </IonCol>
                            }))
                        }
                    </IonRow>
                </IonGrid>
                <IonItemDivider />
                {/* <IonItemDivider>
                    <IonLabel>
                        General Info
                    </IonLabel>
                </IonItemDivider> */}

                {/* <IonRow>
                        {
                            generalInfo.map((item => {
                                return <IonCol size="4" align-self-center>
                                    <Tile src={item.imgSrc} text={item.sectionName} />
                                </IonCol>
                            }))
                        }
                    </IonRow> */}


                <Tile style={{ marginLeft: "auto", marginRight: "25px" }} src={imgLogout} text="Logout" />

            </section>
        )
    }
}

export default FacultyHome;