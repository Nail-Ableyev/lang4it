import React from "react"
import masterlist from "../source.json";
import MyCard from "./MyCard";
import ActionsPane from "./ActionsPane";

function Colors(){
    const key = "colors"

    const listOfCards = masterlist[key].map( item => <MyCard key={item} front={""} back={item} isFlipped={false} background={item}/>)

    return (
        <>
            {listOfCards}
            <ActionsPane/>
        </>)

}

export default Colors