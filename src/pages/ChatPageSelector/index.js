import React  from "react";
import { withUser } from "../../context";
import { User_Types } from "../../server";
import { Redirect } from "react-router";

const ChatSelectorPage = (props) => {

    let { user , match} = props;
    if (user && user.type === User_Types.Student) {
        return <Redirect to={match.path + `/${user.branch}/${user.academicYear}`} />
    }
    else {
        return null;
    }

}

export default withUser(ChatSelectorPage);