import React from "react"
import masterlist from "../source.json";
import MyCard from "./MyCard";
import ActionsPane from "./ActionsPane";
import LinkToFlip2Match from "./LinkToFlip2Match";

function PictureWordFlipper({target}){

    const listOfCards = masterlist[target].map(item => <MyCard key={item} front={<img src={`${process.env.PUBLIC_URL}/img/${target}/${item}.svg`}/>} back={item} isFlipped={false}/>)

    return (
        <>
        {listOfCards}
        <ActionsPane />
        <LinkToFlip2Match />
        </>
    )
}
export default PictureWordFlipper