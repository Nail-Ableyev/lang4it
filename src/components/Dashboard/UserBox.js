import React from "react"
import UserImage from "./UserImage"
import Badge from "./Badge"

function UserBox({user, status, badges}) {

    const badgesList = badges.map(item => <Badge type={item["badgeName"]} amount={item["amount"]} />)


    return(
        <>
            <div className="userBox">
                <UserImage user={user} status={status} />
                <div className="forBadges">
                    {badgesList}
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}


export default UserBox