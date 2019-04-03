import React from "react";
import { IonText } from "@ionic/react";
import UserInfoCard from "../UserInfoCard";

const UserSearchResult = ({ userInfo }) => {
    if (userInfo) {
        return (
            <React.Fragment>
                <p style={{ textAlign: "center" }}><IonText color="success">Last search result.</IonText></p>
                <UserInfoCard userInfo={userInfo} />
            </React.Fragment>
        );
    }
    else {
        return <p style={{ textAlign: "center" }}><IonText color="danger">No user found.</IonText></p>;
    }
};

export default UserSearchResult;