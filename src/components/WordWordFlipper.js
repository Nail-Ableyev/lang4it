import React from "react"
import masterlist from "../source.json";
import MyCard from "./MyCard";
import ActionsPane from "./ActionsPane";

function WordWordFlipper({target}){

    const listOfCards = masterlist[target].map( item => <MyCard key={item[1]} front={item[0]} back={item[1]} isFlipped={false}/>)

    return (
        <>
            {listOfCards}
            <ActionsPane/>
        </>)
}
export default WordWordFlipper