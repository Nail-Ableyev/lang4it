import React, {useEffect, useContext} from "react"
import {Context} from "../../Context"
import "./Dashboard.css"
import UserBox from "./UserBox"
import learnersList from "../../learners.json"

function Dashboard (){

    const {setCurrentPage} = useContext(Context);

    useEffect(()=> {
        setCurrentPage("dashboard")
    },[])

    const learners = learnersList["learners"].map(item => <UserBox user={item["name"]} status={item["status"]} badges={item["badges"]} />) 

    return(
        <div>
            {learners}
        </div>
    )
}

export default Dashboard