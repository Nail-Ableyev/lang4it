import React, {useContext, useEffect, useState} from "react";
import masterlist from "../source.json"
import NotFound from "./NotFound";
import {Context} from "../Context"
import PictureWordFlipper from "./PictureWordFlipper";
import Colors from "./Colors";
import WordWordFlipper from "./WordWordFlipper";

function Flipper({type, id}){

    const {setCurrentPage} = useContext(Context);

    function ComponentToRender(){
        if (type==="wordPicFlip"){
            return (<PictureWordFlipper target={id}/>)
        }
        else if (type==="colors"){
            return (<Colors/>)
        }
        else if(type==="wordWordFlip"){
            return (<WordWordFlipper target={id}/>)
        }
    }

    useEffect(()=> {
        setCurrentPage(id)
    },[])

    return(
        <div className="for-cards">
            {masterlist[id] ? ComponentToRender() : <NotFound/>}
        </div>
    )
}

export default Flipper