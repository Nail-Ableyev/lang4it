import React from "react"
import learnersList from "../../badges.json"

function Badge({type, amount}){

    const theTitle = learnersList[type]?.title ?? type
    const description = learnersList[type]?.description

    return(
        <div className="badgeContainer">
            <img className="badge" src={`${process.env.PUBLIC_URL}/img/dashboard/badges/${type}.png`}/>
            {amount > 1 && <div className="multiplier">{amount}X</div>}
            <span className="tooltip"><b>{theTitle}</b><br/>{description}</span>
        </div>
    )
}

export default Badge