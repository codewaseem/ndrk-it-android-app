import React, { Component } from 'react';
import { IonGrid, IonRow, IonCol, IonItemDivider, IonLabel } from '@ionic/react';
import Tile from "../Tile";
import "./style.css";

import imgHome from "../../images/home.svg";
import imgLogout from "../../images/logout.svg";
import imgMyProfile from "../../images/myprofile.svg";
import imgNotification from "../../images/notification.svg";
import imgStudents from "../../images/students.svg";
import imgFaculty from "../../images/lecturer.svg";


const studentsMenu =
    [
        {
            sectionName: "Home",
            imgSrc: imgHome
        },
        {
            sectionName: "View Faculty",
            imgSrc: imgFaculty
        },
        {
            sectionName: "View Students",
            imgSrc: imgStudents
        },
        {
            sectionName: "Add Circular",
            imgSrc: imgNotification
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
                        Hello Admin,
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