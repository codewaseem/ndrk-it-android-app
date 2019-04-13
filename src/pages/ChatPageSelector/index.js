import React from "react";
import { withUser } from "../../context";
import { User_Types } from "../../server";
import { Redirect } from "react-router";
import CenteredPage from "../CenteredPage";
import TilesGrid from "../../components/TilesGrid";
import { IonText } from "@ionic/react";
import { getClassroomOptions } from "../../staticData";

const ChatSelectorPage = (props) => {

    let { user, match } = props;
    if (user && user.type === User_Types.Student) {
        return <Redirect to={match.path + `/${user.branch}/${user.academicYear}`} />
    }
    else if (user && user.type === User_Types.Faculty) {
        return (<CenteredPage>
            <IonText><h3>Select Classroom</h3></IonText>
            <TilesGrid tilesInfo={getClassroomOptions(user.branch)} />
        </CenteredPage>)
    } else {
        return <Redirect to={"/"} />
    }

}

export default withUser(ChatSelectorPage);