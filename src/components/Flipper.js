import React, {useContext, useEffect, useState} from "react";
import masterlist from "../source.json"
import NotFound from "./NotFound";
import {Context} from "../Context"
import PictureWordFlipper from "./PictureWordFlipper";
import Colors from "./Colors";
import WordWordFlipper from "./WordWordFlipper";
import LoginPass from "./LoginPass";

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
        else if(type==="LoginPass"){
            return(<LoginPass/>)
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