import React from "react";
import Page from "../Page";
import { IonCard, IonCardHeader, IonText, IonCardTitle, IonCardContent, IonItem, IonLabel, IonList, IonListHeader, IonAvatar } from '@ionic/react';
import { withChangedTitle } from "../../context";
import { departmentsInfo } from "../../staticData";

const DepartmentsPage = () => {
    return (
        <Page>
            {
                departmentsInfo.map(department => {
                    return (
                        <IonCard key={department.title}>
                            <img alt="Department" src={department.imgSrc}></img>
                            <IonCardHeader style={{ textAlign: "center" }}>
                                <IonCardTitle>{department.title}</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                {department.content1}
                            </IonCardContent>
                            <IonCardContent>
                                {department.content2}
                            </IonCardContent>

                            {department.facultyMembers.length !== 0 &&
                                (<IonList>
                                    <IonListHeader>Faculty Members</IonListHeader>

                                    {department.facultyMembers.map(member => (

                                        <IonItem key={member.name} style={{ width: "calc(100% - 16px)" }}>
                                            <IonAvatar>
                                                <img alt="Faculty Member" src={member.imgSrc} />
                                            </IonAvatar>
                                            <IonLabel style={{ marginLeft: "10px" }}>
                                                <IonText color="dark"><h2>{member.name}</h2></IonText>
                                                <IonText color="medium"><h5>{member.title}</h5></IonText>
                                            </IonLabel>
                                        </IonItem>

                                    ))}
                                </IonList>)
                            }
                        </IonCard>
                    );
                })
            }

        </Page>
    );
}

export default withChangedTitle("Departments")(DepartmentsPage);