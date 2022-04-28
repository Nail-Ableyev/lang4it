import React from "react"
import masterlist from "../source.json";
import MyCard from "./MyCard";
import ActionsPane from "./ActionsPane";

function PictureWordFlipper({target}){

    const listOfCards = masterlist[target].map(item => <MyCard key={item} front={<img src={`${process.env.PUBLIC_URL}/img/${target}/${item}.svg`}/>} back={item} isFlipped={false}/>)

    return (
        <>
        {listOfCards}
        <ActionsPane/>
        </>
    )
}
export default PictureWordFlipper