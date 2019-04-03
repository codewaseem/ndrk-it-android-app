import React from "react";
import { IonText } from "@ionic/react";
import UserInfoCard from "../UserInfoCard";

const UserSearchResult = ({ userInfo }) => {
    if (userInfo) {
        return <UserInfoCard userInfo={userInfo} />;
    }
    else {
        return <p style={{ textAlign: "center" }}><IonText color="danger">No user found.</IonText></p>;
    }
};

export default UserSearchResult;