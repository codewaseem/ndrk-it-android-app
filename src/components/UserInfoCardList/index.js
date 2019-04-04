import React from "react";
import UserInfoCard from "../UserInfoCard";

const UserInfoCardList = ({users = []}) => {
    return (
        <React.Fragment>
            {users.map(user => {
                return <UserInfoCard userInfo={user} key={user.username} />
            })}
        </React.Fragment>
    )
}

export default UserInfoCardList;