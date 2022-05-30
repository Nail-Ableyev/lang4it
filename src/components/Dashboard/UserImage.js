import React from "react"

function UserImage ({user, status}){
    return(
        <div className="userImageContainer">
            <img src={`${process.env.PUBLIC_URL}/img/dashboard/users/${user}.jpg`}/>
            <div className="userName for-title">{user}</div>
            <div className="userStatus">{status}</div>
        </div>
    )
}

export default UserImage