import React from "react";
import { IonGrid, IonRow, IonCol, IonCard, IonLabel, IonIcon, IonCardSubtitle, IonCardHeader } from "@ionic/react";
import { User_Types } from "../../server";

const UserInfoCard = ({ userInfo }) => {
    return (<IonCard>
        <IonCardHeader style={{ padding: "10px" }}>
            <IonCardSubtitle>User Type: {userInfo.type == User_Types.Faculty ? "Faculty" : "Student"}</IonCardSubtitle>
        </IonCardHeader>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonIcon name="person"></IonIcon>
                    <IonLabel color="primary">{userInfo.name}</IonLabel>
                </IonCol>
                <IonCol size="3">
                    <IonIcon name="male"></IonIcon>
                    <IonLabel color="danger" style={{ textTransform: "capitalize" }}>{userInfo.gender}</IonLabel>
                </IonCol>
            </IonRow>
            {userInfo.type == User_Types.Student &&
                <IonRow>
                    <IonCol>
                        <IonIcon name="finger-print"></IonIcon>
                        <IonLabel color="dark" style={{ textTransform: "uppercase" }}>{userInfo.usn}</IonLabel>
                    </IonCol>
                    <IonCol size="3">
                        <IonIcon name="calendar" />
                        <IonLabel color="dark"> Year {userInfo.year}</IonLabel>
                    </IonCol>
                </IonRow>}
            <IonRow>
                <IonCol>
                    <IonIcon name="mail" />
                    <IonLabel color="tertiary">{userInfo.email}</IonLabel>
                </IonCol>
                <IonCol size="3">
                    <IonIcon name="git-merge" />
                    <IonLabel color="dark" style={{ textTransform: "uppercase" }}>{userInfo.branch}</IonLabel>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonCard>);
};


export default UserInfoCard;